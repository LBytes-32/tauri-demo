import { appWindow } from "@tauri-apps/api/window"
import { Dom } from "./com"
import { PersonRecord } from "./record"

export class Window {
    titlebar    : HTMLDivElement
    closeButton : HTMLDivElement
    content     : HTMLDivElement
    records     : PersonRecord[]
    
    constructor() {
        this.records = []
        
        // Initialize the title-bar.
        this.titlebar = Dom.newChild('div', document.body, {
            base: "title-bar",
            text: "User Database"
        })
        
        this.titlebar.onmousemove = (event) => {
            if (event.buttons == 1)
                appWindow.startDragging()
        }
        
        this.titlebar.ondblclick = () => {
            appWindow.toggleMaximize()
        }
        
        // Initialize the close button.
        this.closeButton = Dom.newChild('div', this.titlebar, {
            base: 'close-button',
            text: '×'
        })
          
        this.closeButton.onclick = () => {
            appWindow.close()
        }
        
        // Initialize the content area
        this.content = Dom.newChild('div', document.body, {
            base: "content"
        })
        
    }
    
    // Fetch records from storage.
    fetch() {
        
    }
    
    createPerson() {
        
    }
}