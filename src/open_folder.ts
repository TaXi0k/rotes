import { invoke } from "@tauri-apps/api/core";
import { open_file_from_folder } from "./main";

export interface File {
    name: string;
    path: string;
    dir: boolean;
    supported: boolean;
}
export interface RootFolder {
    path: string;
    name: string;
}

let root_folder: RootFolder;

const file_list_container = document.querySelector('file-list') as HTMLElement;

export async function open_folder() {
    root_folder = await invoke('open_folder');
    console.log(`Path: ${root_folder.path}\nName: ${root_folder.name}`);

    //file_list_container.replaceChildren();

    //  for (var element of await create_file_elements(root_folder.path)) {
    //      file_list_container.appendChild(element);
    //  }

    var new_elements = await create_file_elements(root_folder.path);

    file_list_container.replaceChildren(...new_elements)
}

async function create_file_elements(parent_path: string): Promise<HTMLElement[]> {
    var elements: HTMLElement[] = [];

    for (var file of (await invoke('list_files', { dir: parent_path }) as Array<File>)) {
        if (!file.dir) {
            var button = document.createElement('button') as HTMLElement;
            button.textContent = file.name;
            button.title = file.path;
            button.dataset.path = file.path;
            button.dataset.supported = String(file.supported);
            button.classList.add('file-button');
            if (file.supported) {
                button.addEventListener('click', (e) => {
                    open_file_from_folder(((e.currentTarget as HTMLElement).dataset.path as string), (e.currentTarget as HTMLElement));
                })
            }
            
            elements.push(button);
        }
        else {
            var details = document.createElement('details') as HTMLElement;
            var summary = document.createElement('summary') as HTMLElement;

            summary.textContent = file.name;
            summary.title = file.path;
            details.appendChild(summary);

            for (var element of await create_file_elements(file.path)) {
                details.appendChild(element);
            }
            
            elements.push(details);
        }
    }

    return elements;
}