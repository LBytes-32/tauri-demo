import { Dom } from "./com"
import { Main } from "./main"
import { TextInput } from "./ui"

export type Person = {
    name        : string
    age?        : number
    gender?     : string
    career?     : string
    reputation? : string
}

export class PersonRecord {
    container : HTMLDivElement
    
    constructor(person: Person) {
        this.container = Dom.newChild('div', Main.window.content, {
            base: 'person-record',
            text: person.name
        })
    }
}

export class RecordInput {
    container : HTMLDivElement
    
    input : {
        name       : TextInput
        age        : TextInput
        gender     : TextInput
        career     : TextInput
        reputation : TextInput
    }
    
    constructor() {
        this.container = Dom.newChild('div', Main.window.content, {
            base: 'flex-row'
        })
        
        this.input = {
            name       : new TextInput(this.container, 'Full Name'),
            age        : new TextInput(this.container, 'Age'),
            gender     : new TextInput(this.container, 'Gender'),
            career     : new TextInput(this.container, 'Career'),
            reputation : new TextInput(this.container, 'Reputation')
        }
    }
}