import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthservicesService } from '../authservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   loginform:FormGroup
   constructor( 
    private fb:FormBuilder,
    public authservice:AuthservicesService,
    private route:Router
  ){
    this.loginform=this.fb.group({
      username:['',[Validators.required,Validators.maxLength(20),Validators.minLength(5)]],
      password:['',[Validators.required, this.passwordvalidation]]
    })
    console.log(this.loginform)
   }

   passwordvalidation(password :any){
    
    var Regx=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
     if(!Regx.test(password.value)){
      return {error:'Password Error'}
     }
     else{
      return null
     }
   }

   login(){
      if(this.authservice.getlogin()){
        this.route.navigate(['home'])
      }

   }
   
}
