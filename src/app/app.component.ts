import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Todo } from './todos/todos.model';
import { selecttodo } from './todos/todos.selector';
import { AppState } from './todos/app.state';
import { AsyncPipe, CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { addtodo } from './todos/todos.action';

@Component({
  selector: 'app-root',
  imports: [CommonModule ,FormsModule,AsyncPipe ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todolist';
  newtodo:string='';
  todos:any;
  constructor( private  store:Store<AppState>){
    this.todos=this.store.select(selecttodo)
      console.log('hiiiiii')
  }


  addtodo(){
     const newtodo={title:this.newtodo,status:false}
     this.store.dispatch(addtodo({todo:newtodo}))
     
  }
}
