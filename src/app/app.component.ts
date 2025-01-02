import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todolist';
  register:FormGroup
  constructor( public fb:FormBuilder){
    this.register=this.fb.group(
      {
       username:['',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]] ,
       email:['',[Validators.required,Validators.email]],
       password:['',[Validators.required]],
       phone:['',[Validators.required,Validators.pattern(/^\d{10}$/)]]
      }
    )
  }


  signup(){
    console.log(this.register)
   
  }
  get formControls(){
    return this.register.controls;
  }
}
