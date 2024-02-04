<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/stores/user";
import { User, Lock } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

interface LoginForm {
  userId: string;
  password: string;
}

const loginFormRef = ref<FormInstance>();
const loginForm = reactive<LoginForm>({
  userId: "",
  password: "",
});

const rules = reactive<FormRules<LoginForm>>({
  userId: [
    {
      required: true,
      message: "ログインIDを入力してください。",
      trigger: "blur",
    },
    // {
    //   type: "email",
    //   message: "メールアドレス形式で入力してください。",
    //   trigger: "blur",
    // },
  ],
  password: [
    {
      required: true,
      message: "パスワードを入力してください。",
      trigger: "blur",
    },
  ],
});

const handleLoginButtonClick = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, _fields) => {
    if (!valid) {
      ElMessage({
        showClose: true,
        message: "入力値エラーが発生しました。",
        duration: 10000,
        type: "error",
      });
      return;
    }
  });

  await userStore
    .login(loginForm.userId, loginForm.password)
    .then(() => {
      router.push({ name: "Top" });
    })
    .catch((err: Error) => {
      ElMessage({
        showClose: true,
        message: err.message,
        duration: 10000,
        type: "error",
      });
    });
};

const handleCancelButtonClick = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>Login</span>
        <el-button link type="primary" tabindex="-1" style="display: none"
          >Forget password</el-button
        >
      </div>
    </template>
    <el-form ref="loginFormRef" :model="loginForm" :rules="rules">
      <el-form-item label="ログインID" prop="userId">
        <el-input v-model="loginForm.userId" :prefix-icon="User" />
      </el-form-item>
      <el-form-item label="パスワード" prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          show-password
          :prefix-icon="Lock"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="card-footer">
        <el-button type="primary" @click="handleLoginButtonClick(loginFormRef)">
          ログイン
        </el-button>
        <el-button @click="handleCancelButtonClick(loginFormRef)">
          リセット
        </el-button>
      </div>
    </template>
  </el-card>
</template>
<style scope>
.box-card {
  position: relative;
  top: 100px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  margin: auto;
  width: 480px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-footer {
  display: flex;
  justify-content: end;
  align-items: center;
}
</style>
