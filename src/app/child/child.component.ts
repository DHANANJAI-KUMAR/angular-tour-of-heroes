import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-child',
  imports: [CommonModule, FormsModule], 
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() message: string = '';
  @Output() messageEvent = new EventEmitter<string>();
  name: string = '';
  
  sendMessageToParent() {
    this.messageEvent.emit('Hello back from Child!');
  }
}
