import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators,} from '@angular/forms'
import { PostformsService } from '../postforms.service';
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
 constructor( private fb:FormBuilder,public postservices:PostformsService){
  this.personForm=this.fb.group({
     fname:['',[Validators.required]],
     lname:['',[Validators.required]],
     age:['',[Validators.required,]]   
  });

  console.log(this.personForm)
 }

   add(){
      // this.person.push(this.personForm.value)
      // this.personForm.reset()
      console.log(this.personForm.value)
      this.postservices.postdata(this.personForm.value).subscribe((res)=>{
         this.postservices.getdata().subscribe((res)=>{
            this.person=res
         })
         
      })
      this.personForm.reset()
   }
   ngOnInit(){
      this.postservices.getdata().subscribe((res)=>{
         this.person=res
      })
   }

   del(id:any){
      this.postservices.deletedata(id).subscribe(((res)=>{

         this.postservices.getdata().subscribe((res)=>{
            this.person=res
         })

      }))
   }

   edit(id:any,person:any){
      this.currentIndex=id
      this.upbtnstatus=true
      this.personForm.setValue(person)
   
     
    

   }

   update(){
    
      // this.person[this.currentIndex]=this.personForm.value
      this.upbtnstatus=false
      this.postservices.updatedata(this.currentIndex,this.personForm.value).subscribe((res)=>{

         this.postservices.getdata().subscribe((res)=>{
            this.person=res
         })
      })
      this.personForm.reset()
      
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

