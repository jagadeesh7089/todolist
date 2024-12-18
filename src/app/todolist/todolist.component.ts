import { Component ,model} from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-todolist',
  imports: [TodoComponent,CommonModule,FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  todos:any=[]
   newtodo=''

   addtodo(){
      
      this.todos.push({title:this.newtodo,status:false})
      this.newtodo=""
   }

   deletetodo(index:number){
      console.log(index)
      this.todos.splice(index,1)
   }

   updatestatus(index:number){
      this.todos=this.todos.filter((todo:any,i:number)=>{           
            if(i===index){
               todo.status=!todo.status
            }
            return todo
      })

      console.log(this.todos)

   }
}
