
export namespace Dom {
    export type Style = {
        base? : string
        text? : string
    }
    
    export function newChild<T extends keyof HTMLElementTagNameMap>(element: T, parent: HTMLElement, style?: Style): HTMLElementTagNameMap[T] {
        let el = document.createElement(element)
        
        el.classList.add(style!.base!)
        el.textContent = style!.text!
        
        parent.appendChild(el)
        return el
    }
}



export type EventCapture<T extends keyof HTMLElementEventMap> = {
    event    : T
    element  : HTMLElement,
    listener : (e: Event) => any
}



export class EventManager {
    captures : EventCapture<any>[] = []
    
    captureEventListener<T extends keyof HTMLElementEventMap>(capture: EventCapture<T>) {
        capture.listener = capture.listener.bind(this)
        capture.element.addEventListener(capture.event, capture.listener)
        this.captures.push(capture)
    }
    
    destroyCaptures() {
        this.captures.forEach(capture => {
            capture.element.removeEventListener(capture.event, capture.listener)
        })
    }
}