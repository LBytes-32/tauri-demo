import { Window } from "./window"
import "./ui.css"
import { RecordInput } from "./record"

export class Main {
  static window      : Window
  static recordInput : RecordInput
}

Main.window = new Window()
Main.recordInput = new RecordInput()
