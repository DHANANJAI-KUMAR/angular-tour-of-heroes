import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tempate-form1',
  standalone: true,
  imports: [CommonModule, FormsModule, JsonPipe],
  templateUrl: './tempate-form1.component.html',
  styleUrl: './tempate-form1.component.scss'
})
export class TempateForm1Component {
  user = {
    name: '',
    email: '',
    password: ''
  };


  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form submitted:', this.user);
    }
  }

}

