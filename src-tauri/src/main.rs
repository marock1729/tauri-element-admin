// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    tauri::Builder::default()
        // プラグイン登録
        .plugin(
            tauri_plugin_sql::Builder::default()
                .add_migrations(
                    "sqlite:tauri-element-admin.db",
                    vec![tauri_plugin_sql::Migration {
                        version: 1,
                        description: "create table",
                        sql: include_str!("../migrations/ver1.sql"),
                        kind: tauri_plugin_sql::MigrationKind::Up,
                    }],
                )
                .build(),
        )
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
