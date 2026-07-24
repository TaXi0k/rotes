use std::{fs::ReadDir, path::PathBuf};

pub fn collect_readdir_to_vec_pathbuf(input: ReadDir) -> Vec<PathBuf> {
    input.filter_map(|e| e.ok())
        .map(|e| e.path().to_path_buf())
        .collect()
}