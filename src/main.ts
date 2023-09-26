import { invoke } from "@tauri-apps/api/tauri";
import { appWindow } from "@tauri-apps/api/window";

function childDivOf(parent: HTMLElement, style?: string): HTMLDivElement {
  let div = document.createElement('div')
  
  if (style)
    div.classList.add(style)
  
  parent.appendChild(div)
  return div
}

let titlebar = childDivOf(document.body, 'title-bar')
titlebar.textContent = "Title Bar"

titlebar.addEventListener('mousemove', (event) => {
  const LEFT_BUTTON = 1
  
  if (event.buttons == LEFT_BUTTON) {
    appWindow.startDragging()
  }
})

let close = childDivOf(titlebar, 'close-button')
close.textContent = 'X'
close.addEventListener('click', () => { appWindow.close() })

let div = childDivOf(document.body)
div.textContent = await invoke("greet", {
  name: "Luke"
})

