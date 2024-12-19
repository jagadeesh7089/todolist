import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators,} from '@angular/forms'
@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
person:any=[]; 
currentIndex:any
upbtnstatus:boolean=false;
personForm:FormGroup
 constructor( private fb:FormBuilder){
  this.personForm=this.fb.group({
     fname:['',[Validators.required,Validators.minLength(3),Validators.maxLength(9)]],
     lname:['',[Validators.required]],
     age:['',[Validators.required,Validators.min(19),Validators.max(40)]]
  });

  console.log(this.personForm)
 }

   add(){
      this.person.push(this.personForm.value)
      this.personForm.reset()
      console.log(this.personForm)
      this.person
   }

   del(index:any){
      this.person.splice(index,1)
   }

   edit(person:any,i:any){
      this.upbtnstatus=true
      this.personForm.setValue(person)
      this.currentIndex=i

   }

   update(){
      this.person[this.currentIndex]=this.personForm.value
      this.upbtnstatus=false
      this.personForm.setValue({
         fname:'',
         lname:'',
         age:''
      })  
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

