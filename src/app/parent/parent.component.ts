import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [CommonModule, FormsModule, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  messageToChild = 'Hello from Parent!';
  messageFromChild = '';

  onMessageFromChild(message: any) {
    this.messageFromChild = message;
  }
}
