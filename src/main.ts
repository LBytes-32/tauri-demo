import { appWindow } from "@tauri-apps/api/window"
import { Dom } from "./dom"
import "./ui.css"

let titlebar = Dom.createDivOn(document.body, {
  base: "title-bar",
  text: "User Directory"
})

let content = Dom.createDivOn(document.body, {
  base: "content",
  text: "hi"
})

let close = Dom.createDivOn(titlebar, {
  base: 'close-button',
  text: '×'
})

close.onclick = (event) => {
  appWindow.close()
}

titlebar.onmousemove = (event) => {
  if (event.buttons == 1)
    appWindow.startDragging()
}


titlebar.ondblclick = () => {
  appWindow.toggleMaximize()
}