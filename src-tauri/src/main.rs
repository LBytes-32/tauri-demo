// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]


#[tauri::command]
fn retrieve_json_example() -> String {
    return r#"
        {
            "name": "Luke Bates",
            "age": 21,
            "sex": "Male"
        }
    "#.to_string();
}

fn main() {
    
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![retrieve_json_example])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

