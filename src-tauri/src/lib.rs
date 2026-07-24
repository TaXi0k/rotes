use font_kit::{handle, source::SystemSource};
use rfd::AsyncFileDialog;
use tauri::menu::NativeIcon::Folder;
use std::{fs, path::{self, PathBuf}};

use crate::{tools::collect_readdir_to_vec_pathbuf};

mod tools;

pub static SUPPORTED_FILETYPES: &[&str] = &[
    "txt",
    "md",
    "html",
    "css", 
    "js", 
    "ts", 
    "jsx", 
    "tsx", 
    "json", 
    "rs", 
    "ron", 
    "py", 
    "cpp",
    "c", 
    "h", 
    "go", 
    "toml", 
    "yaml", 
    "yml", 
    "xml", 
    "ini", 
    "env", 
    "cfg", 
    "conf", 
    "sql", 
    "log", 
    "csv", 
    "rtf"
];


#[derive(serde::Serialize)]
struct File {
    path: String,
    name: String,
    dir: bool,
    supported: bool,
}
#[derive(serde::Serialize)]
struct RootFolder {
    path: String,
    name: String,
}

#[tauri::command]
async fn open_folder() -> Result<RootFolder, String> {
    if let Some(folder) = AsyncFileDialog::new()
        .pick_folder()
        .await {
            Ok (RootFolder{
                path: folder.path().to_str().unwrap().into(),
                name: folder.file_name(),
            })
        } else {
            Err("Canceled open folder".into())
        }
    
}

#[tauri::command]
fn list_files(dir: String) -> Vec<File> {
    let path: PathBuf = path::PathBuf::from(dir);
    let mut contents: Vec<File> = vec![];

    if path.is_dir() {
        for file in collect_readdir_to_vec_pathbuf(path.read_dir().unwrap()) {
            contents.push(File{
                path: file.to_string_lossy().into(),
                name: file.file_name().unwrap_or_default().to_string_lossy().into(),
                dir: file.is_dir(),
                supported: SUPPORTED_FILETYPES.contains(&file.extension().unwrap_or_default().to_str().unwrap_or_default()),
            })
        }
    }

    contents.sort_by(|a, b| {
        match (path::PathBuf::from(&a.path).is_dir(), path::PathBuf::from(&b.path).is_dir()) {
            (true, false) => std::cmp::Ordering::Less,
            (false, true) => std::cmp::Ordering::Greater,
            _ => a.name.to_lowercase().cmp(&b.name.to_lowercase()),
        }
    });

    contents
}



// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
async fn open_file() -> Result<(String, String), String> {
    //let file = AsyncFileDialog::new()
    //    .add_filter("Plain Text", SUPPORTED_FILETYPES)
    //    .pick_file()
    //    .await;

    if let Some(file) = AsyncFileDialog::new()
        .add_filter("Plain Text", SUPPORTED_FILETYPES)
        .pick_file()
        .await {
            let path = file.path().to_path_buf();
            let content = fs::read_to_string(&path).unwrap();

            //content.replace("\r", "")
            Ok(( content.replace("\r", ""), path.to_str().unwrap().to_owned() ))
        } else {
            Err("Cancelled file open!".into())
        }
    
}

#[tauri::command]
async fn open_file_from_folder(path: String) -> String {
    let content = fs::read_to_string(&path).unwrap();
    content.replace("\r", "")
}

#[tauri::command]
fn save_file(path: String, contents: String) {
    fs::write(path, contents).expect("Failed to write to file");
}

#[tauri::command]
async fn save_as(contents: String) -> Result<String, String> {
    if let Some(target) = AsyncFileDialog::new()
        .add_filter("text", &["txt"])
        .save_file()
        .await {
            let path = target.path().to_path_buf();

            fs::write(&path, contents).expect("Failet to write to file (SAVE AS)");

            Ok(path.to_str().unwrap().to_owned())
        } else {
            Err("Canceled save as".into())
        }
}

#[tauri::command]
async fn get_system_fonts() -> Vec<String> {
    let source = SystemSource::new();
    let families = source.all_families().unwrap_or_default();
    families
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            greet,
            open_file,
            save_file,
            save_as,
            get_system_fonts,
            open_folder,
            list_files,
            open_file_from_folder,
            ])
        .run(tauri::generate_context!())    
        .expect("error while running tauri application");
}
