import { Dom, EventManager } from "./com"
import { Main } from "./main"

export class TextInput {
    container : HTMLDivElement
    input     : HTMLInputElement
    label     : HTMLDivElement
    eventman  : EventManager
    
    constructor(parent: HTMLElement, label: string) {
        this.eventman = new EventManager()
        
        this.container = Dom.newChild('div', parent, {
            base: 'text-input-container'
        })
        
        this.label = Dom.newChild('div', this.container, {
            base: 'text-input-label',
            text: label
        })
        
        this.input = Dom.newChild('input', this.container, {
            base: 'text-input'
        })
        
        this.eventman.captureEventListener({
            event    : 'click',
            element  : this.container,
            listener : () => {
                this.input.focus()
            }
        })
    }
    
    destroy() {
        this.eventman.destroyCaptures()
    }
}