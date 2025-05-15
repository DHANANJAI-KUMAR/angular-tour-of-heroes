import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-reactive-form1',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './reactive-form1.component.html',
  styleUrl: './reactive-form1.component.scss'
})
export class ReactiveForm1Component {

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl(null, [Validators.required, Validators.min(18)])
    });

    // this.userForm = this.fb.group({   
    //   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   age: new FormControl(null, [Validators.required, Validators.min(18)])
    // })
  }

  
  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form submitted:', this.userForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

}
