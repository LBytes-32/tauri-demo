
export namespace Dom {
    
    export type Style = {
        base? : string
        text? : string
    }
    
    export function createDivOn(parent: HTMLElement, style?: Style) {
        let div = document.createElement('div')
        
        div.classList.add(style!.base!)
        div.textContent = style!.text!
        
        parent.appendChild(div)
        return div
    }
    
}