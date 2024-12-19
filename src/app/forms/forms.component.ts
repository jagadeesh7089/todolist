import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms'
@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
person:any=[]; 
personForm:FormGroup
 constructor( private fb:FormBuilder){
  this.personForm=this.fb.group({
     fname:[''],
     lname:[''],
     age:['']
  });
 }

   add(){
      this.person.push(this.personForm.value)
   }

   del(index:any){

   }
   edit(){

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

