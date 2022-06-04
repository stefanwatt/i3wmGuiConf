
#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]


use std::env;
use std::fs::File;
use std::io::Write;

#[tauri::command]
async fn write_config_file(app: tauri::AppHandle) -> Result<(), String> {
  let config_file_path = "/home/stefan/.config/i3tauri.conf";
  let mut file = File::create(config_file_path).unwrap();
  writeln!(&mut file, "Hello World!").unwrap();
  file.write(b"").unwrap();
  Ok(())
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![write_config_file])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
