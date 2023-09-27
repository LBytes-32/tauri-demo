import { appWindow } from "@tauri-apps/api/window"
import { Dom } from "./dom"

export class Window {
    titlebar    : HTMLDivElement
    closeButton : HTMLDivElement
    content     : HTMLDivElement
    
    constructor() {
        // Initialize the title-bar.
        this.titlebar = Dom.createDivOn(document.body, {
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
        this.closeButton = Dom.createDivOn(this.titlebar, {
            base: 'close-button',
            text: '×'
        })
          
        this.closeButton.onclick = () => {
            appWindow.close()
        }
        
        // Initialize the content area
        this.content = Dom.createDivOn(document.body, {
            base: "content"
        })
    }
    
    // Fetch people from storage.
    fetchPeople() {
        
    }
}