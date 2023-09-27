# Tauri + Vanilla TS

This template should help get you started developing with Tauri in vanilla HTML, CSS and Typescript.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

# Tauri Notes
These are notes I've taken on things I found useful in Tauri.
## Useful Imports
- Access the invoke command with `import {invoke}`.
- Access window commands and settings with `import {appWindow}`.

## Allow Window Access
- Tauri gives us the power to manipulate the window.
- Open the file `tauri.conf.json`.
- Add the following object to `"tauri"` -> `"allowList"`.
```json
"window": {
    "all": true
}
```
- The value `"all"` allows all window features to be used.
- This is quick, but less safe. I think it's fine in testing situations. Otherwise, only allow features the app uses.

## Custom Window Decorations
- First, we must disable native window decorations.
- Open the file `tauri.conf.json`.
- Add this option to `"tauri"` -> `"windows"`.
```json
"decorations": false
```
- Set `margin: 0px` in `body`.
- Create CSS for your beautiful title-bar.
- Create a new "titlebar" element in JavaScript. Apply the CSS.
- Add the following event listener. I'm sure there's a better implementation, but this WORKS.
- Ensure `appWindow` has been included!
```js
titlebar.addEventListener('mousemove', (event) => {
    const LEFT_BUTTON = 1
    
    if (event.buttons == LEFT_BUTTON)
        appWindow.startDragging()
})
```
- Using Intellisense, see what all can be done via `appWindow`!

## Calling Rust Functions
### Rust Environment
- Tauri allows JavaScript to invoke Rust functions.
- First, we must create a function in rust.
```rs
#[tauri::command]
fn rusty_greet(rusty_name: &str) -> String {
    return format!("Hello, {}!", rusty_name);
}
```
- [Learn more about Tauri commands here!](https://tauri.app/v1/guides/features/command)
- In `main.rs`, in the `main` function, notice the following.
```rs
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![rusty_greet])
        .run(tauri::generate_context!())
        .expect("Error while running application.");
}
```
- We must generate a handler for the "tauri command" function.
  
### JavaScript Environment
- Now, we can invoke this function in JavaScript.
- Import `invoke` first!
```js
let message = await invoke("rusty_greet", {
    rustyName: "Luke"
})
```
- ***Fun detail:*** Rust will convert **parameter names** from `camelCase` to `snake_case`!

## Communicate with JSON
- In Rust: Read JSON from file, work with it, stringify it, and send it.
- In JavaScript: Do the same.
```ts
let message = await invoke<string>('rust_function').then(value => {
    let p = (JSON.parse(value) as Person)
    return `My name is ${p.name}!`
})
```
- Communication revolves around sending a JSON string.