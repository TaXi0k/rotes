import { invoke } from "@tauri-apps/api/core";
import { marked } from "marked";
import { reset_scale, scale_down, scale_up } from "./theme";
import { open_folder } from "./open_folder";

//          let greetInputEl: HTMLInputElement | null;
//          let greetMsgEl: HTMLElement | null;//       

//          async function greet() {
//              if (greetMsgEl && greetInputEl) {
//                  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
//                  greetMsgEl.textContent = await invoke("greet", {
//                      name: greetInputEl.value,
//                  });
//              }
//          }//         

//          window.addEventListener("DOMContentLoaded", () => {
//              greetInputEl = document.querySelector("#greet-input");
//              greetMsgEl = document.querySelector("#greet-msg");
//              document.querySelector("#greet-form")?.addEventListener("submit", (e) => {
//                  e.preventDefault();
//                  greet();
//              });
//          });



const text_area = document.getElementById('text-area') as HTMLTextAreaElement;
const file_path_text = document.querySelector('file-path') as HTMLElement;
const formatted_text = document.querySelector('formatted-text') as HTMLElement;
let buffer: string; //
let current_path: string;

// APP MENU BUTTON LISTENERS
(document.getElementById('button-settings') as HTMLElement).addEventListener('click', () => {
    console.log("OpenSettings");
    toggle_settings();
});
(document.getElementById('button-open-file') as HTMLElement).addEventListener('click', () => {
    console.log("OpenFile");
    open_file();
});
(document.getElementById('button-open-folder') as HTMLElement).addEventListener('click', () => {
    console.log("OpenFolder");
    open_folder();
});
(document.getElementById('button-save-as') as HTMLElement).addEventListener('click', () => {
    console.log("SaveAs");
    save_as();
});
(document.getElementById('button-toggle-markdown') as HTMLElement).addEventListener('click', () => {
    console.log("TogleMD");
    toggle_markdown();
    
});
(document.querySelector('file-path') as HTMLElement).addEventListener('click', () => {
    console.log("CopyPath");
    if (current_path) {
        navigator.clipboard.writeText(current_path);
        alert(`Coppied "${current_path}" to clipboard`);
    }
});



// KEYBINDS
document.addEventListener("keydown", (e) => {   //Open settings
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === ",") {
        e.preventDefault(); 
        console.log("Open settings!");
        toggle_settings();
    }
});
document.addEventListener("keydown", (e) => {   //Save file
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        e.preventDefault(); 
        console.log("Save!");
        if (buffer) { save_as() }
    }
});
document.addEventListener("keydown", (e) => {   //Open file
    if ((e.ctrlKey || e.metaKey) && !e.shiftKey && e.key.toLowerCase() === "o") {
        e.preventDefault(); 
        console.log("Open file!");
        open_file();
    }
});
document.addEventListener("keydown", (e) => {   //Open folder
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "o") {
        e.preventDefault(); 
        console.log("Open folder!");
        open_folder();
    }
});
document.addEventListener("keydown", (e) => {   //Toggle markdown
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "m") {
        e.preventDefault(); 
        console.log("Toggle markdown!");
        toggle_markdown();
    }
});
document.addEventListener("keydown", (e) => {   //Copy path
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "c") {
        e.preventDefault()
        console.log("Copy path!");
        if (current_path) {
            navigator.clipboard.writeText(current_path);
            alert(`Coppied "${current_path}" to clipboard`);
        }
    }
});
document.addEventListener("keydown", (e) => {   //Toggle file list
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "b") {
        e.preventDefault(); 
        toggle_file_list();
    }
});
document.addEventListener("keydown", (e) => {   //Zoom in
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "=") {
        e.preventDefault(); 
        scale_up(10);
    }
});
document.addEventListener("keydown", (e) => {   //Zoom out
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "-") {
        e.preventDefault(); 
        scale_down(10);
    }
});
document.addEventListener("keydown", (e) => {   //Reset zoom
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "0") {
        reset_scale();
    }
});
document.addEventListener('wheel', (e: WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        
        if (e.deltaY < 0) {
            scale_up(10);
        }
        if (e.deltaY > 0) {
            scale_down(10);
        }
    }
});
text_area.addEventListener('keydown', (e) => {
    if (e.key === "Tab") {
        e.preventDefault();

        var start = text_area.selectionStart;
        var end = text_area.selectionEnd;
        text_area.value = text_area.value.substring(0,start) + "    " + text_area.value.substring(end);
        text_area.selectionStart = text_area.selectionEnd = start + 4;
    }
})


// UPDATE BUFFER ON CHANGE OF text_area CONTENT
text_area.addEventListener('input', () => {
    buffer = text_area.value;
    console.log(buffer);
    if (current_path) {
        invoke("save_file", {
            path: current_path,
            contents: buffer,
        });
    };
    update_markdown();

    console.log(count_lines());
})


// RESIZING OF FILE LIST
{
    var file_list = document.querySelector('file-list') as HTMLElement;
    var file_list_resizer = document.createElement('file-list-resizer') as HTMLElement;
    file_list.appendChild(file_list_resizer);

    file_list_resizer.addEventListener('mousedown', initResize, false);

    function initResize() {
        file_list_resizer.classList.add('active');
        document.body.classList.add('resizing-x');
        window.addEventListener(`mousemove`, Resize, false);
        window.addEventListener('mouseup', stopResize, false);
    }

    function Resize(e: MouseEvent) {
        file_list.style.width = (e.clientX - file_list.offsetLeft) + 'px';
    }
    
    function stopResize() {
        file_list_resizer.classList.remove('active');
        document.body.classList.remove('resizing-x');
        window.removeEventListener('mousemove', Resize, false);
        window.removeEventListener('mouseup', stopResize, false);
    }
}

function count_lines(): number {
    console.log(JSON.stringify(buffer));
    if (!buffer)  return 0;
    return buffer.split(/\r\n|\r|\n/).length
}

async function open_file() {
    await invoke<[string, string]>("open_file").then((result) => {
        buffer = result[0] as string;
        current_path = result[1] as string;
        console.log(buffer);
        console.log(current_path);
        text_area.value = buffer;
        file_path_text.innerText = current_path;
        update_markdown();
    })
}

export async function open_file_from_folder(path: string, button: HTMLElement) {
    console.log(`Open file from folder mode: ${path} from element ${button}`);
    await invoke<string>("open_file_from_folder", {path: path}).then((content) => {
        buffer = content;
        current_path = path;
        console.log(buffer);
        console.log(current_path);
        text_area.value = buffer;
        file_path_text.innerText = current_path;
        update_markdown();
    })


}

async function save_as() {
    await invoke<string>("save_as", {
        contents: buffer
    }).then((result) => {
        current_path = result;
        file_path_text.innerText = current_path;
    })
}

function toggle_markdown() {
    formatted_text.classList.toggle('hidden');
    (document.getElementById('button-toggle-markdown') as HTMLElement).classList.toggle('active');
}

marked.setOptions({
    breaks: true,
    gfm: true,
})

function update_markdown() {
    formatted_text.innerHTML = marked.parse(buffer) as string;
}

function toggle_file_list() {
    file_list.classList.toggle('hidden');
    (document.querySelector('main') as HTMLElement).classList.toggle('expanded');
}

function toggle_settings() {
    (document.querySelector('settings-container') as HTMLElement).classList.toggle('hidden');
    (document.querySelector('app-container') as HTMLElement).classList.toggle('settings');
    (document.getElementById('button-settings') as HTMLElement).classList.toggle('active');
}

async function load_system_fonts() {
    try {
        var fonts: string[] = await invoke('get_system_fonts');
        var normal = document.getElementById('select-font-normal') as HTMLSelectElement;
        var monospace = document.getElementById('select-font-monospace') as HTMLSelectElement;

        fonts.forEach(family => {
            var option = document.createElement('option');
            option.value = family;
            option.textContent = family;
            option.style.fontFamily = family;
            normal.appendChild(option.cloneNode(true));
            monospace.appendChild(option);
        })
    }
    catch (e) {
        console.error("Failed to load fonts from backend:", e);
    }
}
load_system_fonts();

