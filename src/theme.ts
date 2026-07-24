const root = document.documentElement.style;

const select_flavour = document.getElementById('select-flavour') as HTMLSelectElement;
const select_accent = document.getElementById('select-accent-color') as HTMLSelectElement;
const select_font_normal = document.getElementById('select-font-normal') as HTMLSelectElement;
const select_font_monospace = document.getElementById('select-font-monospace') as HTMLSelectElement;
const radios_monospace = document.querySelectorAll('input[name="radio-monospace"]');

let flavour: string = 'mocha';        // 0 - uses official flavour names,     default: mocha
let accent: string = 'mauve';   // uses official color names,   default: mauve
let font_normal: string = 'Inter';
let font_monospace: string = 'JetBrains Mono';
let monospace_editor: string = "false";


select_flavour.addEventListener('input', () => {
    console.log('Changed value to ' + select_flavour.value);
    flavour = select_flavour.value;
    save_preferences();
    update_theme_colors();
});

select_accent.addEventListener('input', () => {
    console.log('Changed value to ' + select_accent.value);
    accent = select_accent.value;
    save_preferences();
    update_theme_colors();
});

select_font_normal.addEventListener('input', () => {
    font_normal = select_font_normal.value;
    save_preferences();
    update_fonts();
})
select_font_monospace.addEventListener('input', () => {
    font_monospace = select_font_monospace.value;
    save_preferences();
    update_fonts();
})

    radios_monospace.forEach(radio => {
        radio.addEventListener('change', (e) => {
            switch ((e.target as HTMLInputElement).value) {
                case "true":
                    monospace_editor = "true";
                    break;
                case "false":
                    monospace_editor = "false";
                    break;
            }
            update_fonts();
        })
    })

function update_theme_colors() {
    
    // Base colors:
    switch (flavour) {
        case "mocha":     // Mocha
            root.setProperty('--text', 'var(--mocha-text)');
            root.setProperty('--subtext1', 'var(--mocha-subtext1)');
            root.setProperty('--subtext0', 'var(--mocha-subtext0)');
            root.setProperty('--overlay2', 'var(--mocha-overlay2)');
            root.setProperty('--overlay1', 'var(--mocha-overlay1)');
            root.setProperty('--overlay0', 'var(--mocha-overlay0)');
            root.setProperty('--surface2', 'var(--mocha-surface2)');
            root.setProperty('--surface1', 'var(--mocha-surface1)');
            root.setProperty('--surface0', 'var(--mocha-surface0)');
            root.setProperty('--base', 'var(--mocha-base)');
            root.setProperty('--mantle', 'var(--mocha-mantle)');
            root.setProperty('--crust', 'var(--mocha-crust)');
            break;
        case "macchiato":     // Macchiato
            root.setProperty('--text', 'var(--macchiato-text)');
            root.setProperty('--subtext1', 'var(--macchiato-subtext1)');
            root.setProperty('--subtext0', 'var(--macchiato-subtext0)');
            root.setProperty('--overlay2', 'var(--macchiato-overlay2)');
            root.setProperty('--overlay1', 'var(--macchiato-overlay1)');
            root.setProperty('--overlay0', 'var(--macchiato-overlay0)');
            root.setProperty('--surface2', 'var(--macchiato-surface2)');
            root.setProperty('--surface1', 'var(--macchiato-surface1)');
            root.setProperty('--surface0', 'var(--macchiato-surface0)');
            root.setProperty('--base', 'var(--macchiato-base)');
            root.setProperty('--mantle', 'var(--macchiato-mantle)');
            root.setProperty('--crust', 'var(--macchiato-crust)');
            break;
        case "frappe":     // Frappe
            root.setProperty('--text', 'var(--frappe-text)');
            root.setProperty('--subtext1', 'var(--frappe-subtext1)');
            root.setProperty('--subtext0', 'var(--frappe-subtext0)');
            root.setProperty('--overlay2', 'var(--frappe-overlay2)');
            root.setProperty('--overlay1', 'var(--frappe-overlay1)');
            root.setProperty('--overlay0', 'var(--frappe-overlay0)');
            root.setProperty('--surface2', 'var(--frappe-surface2)');
            root.setProperty('--surface1', 'var(--frappe-surface1)');
            root.setProperty('--surface0', 'var(--frappe-surface0)');
            root.setProperty('--base', 'var(--frappe-base)');
            root.setProperty('--mantle', 'var(--frappe-mantle)');
            root.setProperty('--crust', 'var(--frappe-crust)');
            break;
        case "latte":     // Latte
            root.setProperty('--text', 'var(--latte-text)');
            root.setProperty('--subtext1', 'var(--latte-subtext1)');
            root.setProperty('--subtext0', 'var(--latte-subtext0)');
            root.setProperty('--overlay2', 'var(--latte-overlay2)');
            root.setProperty('--overlay1', 'var(--latte-overlay1)');
            root.setProperty('--overlay0', 'var(--latte-overlay0)');
            root.setProperty('--surface2', 'var(--latte-surface2)');
            root.setProperty('--surface1', 'var(--latte-surface1)');
            root.setProperty('--surface0', 'var(--latte-surface0)');
            root.setProperty('--base', 'var(--latte-base)');
            root.setProperty('--mantle', 'var(--latte-mantle)');
            root.setProperty('--crust', 'var(--latte-crust)');
            break;
        default:    // Fallbacks to mocha
            root.setProperty('--text', 'var(--mocha-text)');
            root.setProperty('--subtext1', 'var(--mocha-subtext1)');
            root.setProperty('--subtext0', 'var(--mocha-subtext0)');
            root.setProperty('--overlay2', 'var(--mocha-overlay2)');
            root.setProperty('--overlay1', 'var(--mocha-overlay1)');
            root.setProperty('--overlay0', 'var(--mocha-overlay0)');
            root.setProperty('--surface2', 'var(--mocha-surface2)');
            root.setProperty('--surface1', 'var(--mocha-surface1)');
            root.setProperty('--surface0', 'var(--mocha-surface0)');
            root.setProperty('--base', 'var(--mocha-base)');
            root.setProperty('--mantle', 'var(--mocha-mantle)');
            root.setProperty('--crust', 'var(--mocha-crust)');
            break;
    }

    // Accent colors:
    switch (flavour) {
        case "mocha":     // Mocha
            switch (accent) {
                case 'rosewater':
                    root.setProperty('--accent', 'var(--mocha-rosewater)');
                    break;
                case 'flamingo':
                    root.setProperty('--accent', 'var(--mocha-flamingo)');
                    break;
                case 'pink':
                    root.setProperty('--accent', 'var(--mocha-pink)');
                    break;
                case 'mauve':
                    root.setProperty('--accent', 'var(--mocha-mauve)');
                    break;
                case 'red':
                    root.setProperty('--accent', 'var(--mocha-red)');
                    break;
                case 'maroon':
                    root.setProperty('--accent', 'var(--mocha-maroon)');
                    break;
                case 'peach':
                    root.setProperty('--accent', 'var(--mocha-peach)');
                    break;
                case 'yellow':
                    root.setProperty('--accent', 'var(--mocha-yellow)');
                    break;
                case 'green':
                    root.setProperty('--accent', 'var(--mocha-green)');
                    break;
                case 'teal':
                    root.setProperty('--accent', 'var(--mocha-teal)');
                    break;
                case 'sky':
                    root.setProperty('--accent', 'var(--mocha-sky)');
                    break;
                case 'sapphire':
                    root.setProperty('--accent', 'var(--mocha-sapphire)');
                    break;
                case 'blue':
                    root.setProperty('--accent', 'var(--mocha-blue)');
                    break;
                case 'lavender':
                    root.setProperty('--accent', 'var(--mocha-lavender)');
                    break;
                default:
                    root.setProperty('--accent', 'var(--mocha-mauve)');
                    break;
            }
            break;

        case "accent":     // Macchiato
            switch (accent) {
                case 'rosewater':
                    root.setProperty('--accent', 'var(--macchiato-rosewater)');
                    break;
                case 'flamingo':
                    root.setProperty('--accent', 'var(--macchiato-flamingo)');
                    break;
                case 'pink':
                    root.setProperty('--accent', 'var(--macchiato-pink)');
                    break;
                case 'mauve':
                    root.setProperty('--accent', 'var(--macchiato-mauve)');
                    break;
                case 'red':
                    root.setProperty('--accent', 'var(--macchiato-red)');
                    break;
                case 'maroon':
                    root.setProperty('--accent', 'var(--macchiato-maroon)');
                    break;
                case 'peach':
                    root.setProperty('--accent', 'var(--macchiato-peach)');
                    break;
                case 'yellow':
                    root.setProperty('--accent', 'var(--macchiato-yellow)');
                    break;
                case 'green':
                    root.setProperty('--accent', 'var(--macchiato-green)');
                    break;
                case 'teal':
                    root.setProperty('--accent', 'var(--macchiato-teal)');
                    break;
                case 'sky':
                    root.setProperty('--accent', 'var(--macchiato-sky)');
                    break;
                case 'sapphire':
                    root.setProperty('--accent', 'var(--macchiato-sapphire)');
                    break;
                case 'blue':
                    root.setProperty('--accent', 'var(--macchiato-blue)');
                    break;
                case 'lavender':
                    root.setProperty('--accent', 'var(--macchiato-lavender)');
                    break;
                default:
                    root.setProperty('--accent', 'var(--macchiato-mauve)');
                    break;
            }
            break;

        case "frappe":     // Frappe
            switch (accent) {
                case 'rosewater':
                    root.setProperty('--accent', 'var(--frappe-rosewater)');
                    break;
                case 'flamingo':
                    root.setProperty('--accent', 'var(--frappe-flamingo)');
                    break;
                case 'pink':
                    root.setProperty('--accent', 'var(--frappe-pink)');
                    break;
                case 'mauve':
                    root.setProperty('--accent', 'var(--frappe-mauve)');
                    break;
                case 'red':
                    root.setProperty('--accent', 'var(--frappe-red)');
                    break;
                case 'maroon':
                    root.setProperty('--accent', 'var(--frappe-maroon)');
                    break;
                case 'peach':
                    root.setProperty('--accent', 'var(--frappe-peach)');
                    break;
                case 'yellow':
                    root.setProperty('--accent', 'var(--frappe-yellow)');
                    break;
                case 'green':
                    root.setProperty('--accent', 'var(--frappe-green)');
                    break;
                case 'teal':
                    root.setProperty('--accent', 'var(--frappe-teal)');
                    break;
                case 'sky':
                    root.setProperty('--accent', 'var(--frappe-sky)');
                    break;
                case 'sapphire':
                    root.setProperty('--accent', 'var(--frappe-sapphire)');
                    break;
                case 'blue':
                    root.setProperty('--accent', 'var(--frappe-blue)');
                    break;
                case 'lavender':
                    root.setProperty('--accent', 'var(--frappe-lavender)');
                    break;
                default:
                    root.setProperty('--accent', 'var(--frappe-mauve)');
                    break;
            }
            break;

        case "latte":     // Latte
            switch (accent) {
                case 'rosewater':
                    root.setProperty('--accent', 'var(--latte-rosewater)');
                    break;
                case 'flamingo':
                    root.setProperty('--accent', 'var(--latte-flamingo)');
                    break;
                case 'pink':
                    root.setProperty('--accent', 'var(--latte-pink)');
                    break;
                case 'mauve':
                    root.setProperty('--accent', 'var(--latte-mauve)');
                    break;
                case 'red':
                    root.setProperty('--accent', 'var(--latte-red)');
                    break;
                case 'maroon':
                    root.setProperty('--accent', 'var(--latte-maroon)');
                    break;
                case 'peach':
                    root.setProperty('--accent', 'var(--latte-peach)');
                    break;
                case 'yellow':
                    root.setProperty('--accent', 'var(--latte-yellow)');
                    break;
                case 'green':
                    root.setProperty('--accent', 'var(--latte-green)');
                    break;
                case 'teal':
                    root.setProperty('--accent', 'var(--latte-teal)');
                    break;
                case 'sky':
                    root.setProperty('--accent', 'var(--latte-sky)');
                    break;
                case 'sapphire':
                    root.setProperty('--accent', 'var(--latte-sapphire)');
                    break;
                case 'blue':
                    root.setProperty('--accent', 'var(--latte-blue)');
                    break;
                case 'lavender':
                    root.setProperty('--accent', 'var(--latte-lavender)');
                    break;
                default:
                    root.setProperty('--accent', 'var(--latte-mauve)');
                    break;
            }
            break;

        default:    // Fallbacks to mocha
            switch (accent) {
                case 'rosewater':
                    root.setProperty('--accent', 'var(--mocha-rosewater)');
                    break;
                case 'flamingo':
                    root.setProperty('--accent', 'var(--mocha-flamingo)');
                    break;
                case 'pink':
                    root.setProperty('--accent', 'var(--mocha-pink)');
                    break;
                case 'mauve':
                    root.setProperty('--accent', 'var(--mocha-mauve)');
                    break;
                case 'red':
                    root.setProperty('--accent', 'var(--mocha-red)');
                    break;
                case 'maroon':
                    root.setProperty('--accent', 'var(--mocha-maroon)');
                    break;
                case 'peach':
                    root.setProperty('--accent', 'var(--mocha-peach)');
                    break;
                case 'yellow':
                    root.setProperty('--accent', 'var(--mocha-yellow)');
                    break;
                case 'green':
                    root.setProperty('--accent', 'var(--mocha-green)');
                    break;
                case 'teal':
                    root.setProperty('--accent', 'var(--mocha-teal)');
                    break;
                case 'sky':
                    root.setProperty('--accent', 'var(--mocha-sky)');
                    break;
                case 'sapphire':
                    root.setProperty('--accent', 'var(--mocha-sapphire)');
                    break;
                case 'blue':
                    root.setProperty('--accent', 'var(--mocha-blue)');
                    break;
                case 'lavender':
                    root.setProperty('--accent', 'var(--mocha-lavender)');
                    break;
                default:
                    root.setProperty('--accent', 'var(--mocha-mauve)');
                    break;
            }
            break;
    }
}

function update_fonts() {
    root.setProperty('--normal-font', font_normal);
    root.setProperty('--monospace-font', font_monospace);

    switch (monospace_editor) {
        case "true":
            root.setProperty('--editor-font', 'var(--monospace-font)');
            break;
        case "false":
            root.setProperty('--editor-font', 'var(--normal-font)');
            break;
    }

    save_preferences();
}



export function scale_up(factor: number) {
    const currentScale = parseFloat(root.getPropertyValue('--editor-scale')) || 1;
    root.setProperty('--editor-scale', String(currentScale + factor / 100));
}
export function scale_down(factor: number) {
    const currentScale = parseFloat(root.getPropertyValue('--editor-scale')) || 1;
    root.setProperty('--editor-scale', String(currentScale - factor / 100));
}
export function reset_scale() {
    root.setProperty('--edit-scale', "1.0");
}

export function save_preferences() {
    // Save flavour
    localStorage.setItem('flavour', flavour);
    // Save accent
    localStorage.setItem('accent', accent);
    // Save font normal
    localStorage.setItem('font_normal', font_normal);
    // Save font monospace
    localStorage.setItem('font_monospace', font_monospace);
    // Save monospace editor
    localStorage.setItem('monospace_editor', monospace_editor);
}
export function load_preferences() {
    flavour = localStorage.getItem('flavour') as string;
    accent = localStorage.getItem('accent') as string;
    font_normal = localStorage.getItem('font_normal') as string;
    font_monospace = localStorage.getItem('font_monospace') as string;
    monospace_editor = localStorage.getItem('monospace_editor') as string;

    update_inputs();
    update_fonts();
    update_theme_colors();
}
export function update_inputs() {
    select_flavour.value = flavour;
    select_accent.value = accent;
    select_font_normal.value = font_normal;
    select_font_monospace.value = font_monospace;

    var target_radio = document.getElementById(`radio-monospace-${monospace_editor}`) as HTMLInputElement;
    if (target_radio) {
        target_radio.checked = true;
    }
}

load_preferences();