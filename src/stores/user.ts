import { defineStore } from "pinia";
import Database from "tauri-plugin-sql-api";

const getHash = async (text: string) => {
  const uint8 = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", uint8);
  return Array.from(new Uint8Array(digest))
    .map((v) => v.toString(16).padStart(2, "0"))
    .join("");
};

interface UserInfo {
  id: string
  auth: boolean
  firstName: string
  lastName: string
  email: string
}

export const useUser = defineStore({
  id: "user",
  state: (): UserInfo => ({
    id: "",
    auth: false,
    firstName: "",
    lastName: "",
    email: "",
  }),
  getters: {
    isLogin(): boolean {
      return this.auth;
    },
    fullName(): string {
      return this.firstName + " " + this.lastName;
    },
  },
  actions: {
    async login(id: string, password: string) {
      const hashValue = await getHash(password);
      const db = await Database.load("sqlite:tauri-element-admin.db");
      const sql =
        "SELECT id, first_name firstName, last_name lastName, email From USER WHERE id = ? AND password = ?";
      const result = (await db.select(sql, [id, hashValue])) as {
        [key: string]: any;
      }[];
      if (result.length === 0) {
        throw new Error("ログイン処理に失敗しました。");
      } else {
        const items = result[0];
        this.auth = true;
        this.id = items["id"];
        this.firstName = items["firstName"];
        this.lastName = items["lastName"];
        this.email = items["email"];
      }
    },
    async logout() {
      this.auth = false;
    },
  },
  persist: true,
});
