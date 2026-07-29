![rotes, your rustiest notepad](/assets/readme_banner.png)

---

<br><br>

# ❓ What is rotes and what can it do?

Now read carefully since you might not believe me at first, **rotes** is a notepad, CRAZY SHIT I KNOW.

What's worth noting (u get it, since it's a notepad - noting ... funny 🤣😂) this app supports markdown formatting! Yea I know microslop notepad also does and honestly does it 10x better but who cares! it's still microslop. But you know what it can't do (i think at least idk honestly didn't test) - OPEN ANY FILETYPE IN MARKDOWN MODE! Yes! Want to see json formatted as markdown, no problem! Rust files? Supported! .cpp? Supported! css? Supported!

I know noone asked but if you run this app in dev you can even rewrite it using itself, not that's a good idea - I tried.

## 👷🏻 You can you use this app to

* Take notes,
* Do coding in a couple of languages (I'm already feel sorry if you want even attempt that, but I guess you deserve that experience if you want to code in a random notepad instead of some IDE)
* Open `.log` files
* Idk it is a text editor you know what a text editor can do (rather shitty one if you ask me)

## 📑 What file formats rotes supports

> [!NOTE]
> rotes *likely* supports every plain-text file format, yet you can open only following with it, why? This app was designed with only `.txt` and `.md` in mind so I can't guarantee any other format working *well*. All of following file formats *should* open properly and be editable.
> If you want to open any other plain-text file format with rotes you can add it to `SUPPORTED_FILETYPES` array in `lib.rs` and compile rotes yourself. You can also write an issue and list file formats you found working so I can add them to rotes.

* `.txt`
* `.md`
* `.html`
* `.css`
* `.js`
* `.ts`
* `.jsx`
* `.tsx`
* `.json`
* `.rs`
* `.ron`
* `.py`
* `.cpp`
* `.c`
* `.h`
* `.go`
* `.toml`
* `.yaml`
* `.yml`
* `.xml`
* `.ini`
* `.env`
* `.cfg`
* `.conf`
* `.sql`
* `.log`
* `.csv`
* `.rtf`

## 💡 Any additional functionalities?

I think not, or I don't remember any.

Actually there is one, I dont think it's that "additional" but I didn't know where to list it :3

### Opening folders

rotes enables you to open not only singular files (that's boring) but also whole folders, similarly to Visual Studio Code. On left side there will be a list of every file and directory in folder you opened (just like in vsc, crazy coincidence). Opening a folder can take from less than a second to up to 20s depending on how many files and subfolders are there in provided folder. It could be faster but you can wait.

You can change colors of this app, and font. Talking about colors...

## 🎨 Theme

This app is designed around [Catppuccin](https://catppuccin.com/) and includes all its four flavours and all of its 14 colors as accent colors giving you 56 combos total.

Additionally this app comes with 3 bundled fonts, so it can look good even if you don't have any pretty font on your pc. Bundled fonts include [Inter](https://github.com/rsms/inter) for proportional, [JetBrains Mono](https://github.com/JetBrains/JetBrainsMono) for monospace and one special custom made font you (literally) **CAN'T** get anywhere on the Internet (besides this very repo). If you want to check it out you have to download the app... or just check sourcecode if you are boring and hate fun but if you do that I personally **HATE YOU**.

Here is a quick visualization of how app looks in different flavours:

![](/assets/flavour_preview.png)

<br><br>

# 📦 Installation

I provide this app compiled only for **64-bit Windows** as of now, later I'll likely also compile for Linux. Releases contain three binaries for you to download: standalone `.exe`, `.exe` installer and `.msi` installer - you pick one you like the most, I personally like standalone the most!

### Hey but I want this app on Linux or MacOS

You might say, well too bad for you! I guess this app should work on most of major OS (including Linux, MacOS and *BSD tho I didn't test it so i have no actual clue, just a guess) so you can compile it yourself. If you don't know how to compile a Tauri project I have a couple tips for you:

* Go get yourself some actually good notepad, [notepads by 0x7c13](https://github.com/0x7c13/Notepads) is amazing option (and it's damn pretty not like this bullshit)
* You have a browser right? https://letmegooglethat.com/?q=How+to+compile+a+tauri+app
* You can't google? That's ok there are always other ways: https://gemini.google.com, https://chatgpt.com, https://claude.ai, https://grok.com, https://chat.deepseek.com

<br><br>

# ❌ Uninstallation

I'm sure that as long as you are not braindead nor some worm (honestly even a worm would figure out uninstalling app) but fine, I'll tell you how

* For standalone executable
  * Just delete the executable, that's it. I don't know what you expected.
* For installed application
  * Exacly as you uninstall any other app: 
    * Go to Settings -> Apps -> Installed Apps -> Find rotes and uninstall it
    * Use some uninstaller app like geek uninstaller or sth you have idk

<br><br>

# 🗺️ Roadmap

I can't promise I'll do any of the following since I started this project since I was bored and it likely will stay as I'm bored project forever.

* Icons in built-in file explorer
* Support for .pdf (because why not)
* Support for some other funny or usefull file formats

<br><br>

# 💗 Credits or sth

* **Theme for whole app:** Catppuccin
  * Website: https://catppuccin.com/
  * GitHub: https://github.com/catppuccin
* **Icon of app:** [Rustacean.net](https://rustacean.net/fan-art.html) ([This one to be precise](https://rustacean.net/more-crabby-things/rustdocs.png) sadly I can't find its author)
* **Framework for whole app:** [Tauri](https://tauri.app/)
* **Crates used:**
  * [rfd](https://github.com/PolyMeilex/rfd)
  * [font-kit](https://github.com/servo/font-kit)
  * and all ones required by Tauri
* idk what else

<br><br>

# 🤝 Contributing

Contributions are always welcome and mean a lot! ♡ Here's how you can help:

* **🪱 Found a bug?** Open an issue!
* **🧠 Got an idea?** Open an issue and let's talk about it!
* **🩷 Want to fix or add something?** PRs are very welcome - just describe what you changed and why ★

> [!Note]
> Please, submit PRs and issues only in English (or Polish if you prefer).

<br><br>

# 🧻 License

**rotes** is shared under the MIT License - see [LICENSE](/LICENSE) for details.

> [!Note]
> The license is all that's legally required, but if you're able to, a little visible credit means the world to me - a mention in your README, about page, or anywhere that fits ♡ Linking back to this repo would be amazing too, but no pressure at all!

## 💗 TYSM for using **rotes**, I hope it treats you well (not likely) ★

<br><br>
<br><br>
<br><br>

# 💌 You are still reading?

Look at that cool (rly cool I know) drawing I made.

![I know that's damn cool](/assets/rysunek.png)
