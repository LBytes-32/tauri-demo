import { appWindow } from "@tauri-apps/api/window"
import { Dom } from "./dom"
import "./ui.css"
import { invoke } from "@tauri-apps/api"

let titlebar = Dom.createDivOn(document.body, {
  base: "title-bar",
  text: "User Directory"
})

let content = Dom.createDivOn(document.body, {
  base: "content",
  text: "hi"
})

type Person = {
  name: string,
  age: number,
  sex: string
}

content.textContent = await invoke<string>('retrieve_json_example').then(value => {
  let p = (JSON.parse(value) as Person)
  return `I am ${p.name}. I am ${p.age} years old. I am ${p.sex}.`
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