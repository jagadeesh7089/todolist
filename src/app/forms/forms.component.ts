import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms'
@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
personForm:FormGroup
 constructor( private fb:FormBuilder){
  this.personForm=this.fb.group({
     fname:[''],
     lname:[''],
     age:['']
  });
 }

   print(){
       console.log(this.personForm.value)
   }

  // fname=new FormControl()
  // lname=new FormControl()
  // age=new FormControl()
  
  // print(){
  //   let person={
  //     'firstname':this.fname.value,
  //     'lastname':this.lname.value,
  //     'age':this.age.value
  //   }
  //   console.log(person)
  }

