import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms'
import { error } from 'console';
@Component({
  selector: 'app-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  
    
    
    loginform=new FormGroup(
      {
        username:new FormControl('',[Validators.required]),
        password:new FormControl(),
        gender:new FormControl(null,[Validators.required]),
        age:new FormControl('',[Validators.required])
      },this.checkage.bind(this)

      
    )

    checkage(fb:any){
      var gen=fb.get('gender').value
      console.log(gen)
      return {error:'notvalid'}
    }
    ngOnInit(){
      console.log(this.loginform)
    }

  
   login(){
       console.log(this.loginform.value.gender)
     
    console.log(this.loginform)
   }
}
