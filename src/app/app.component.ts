import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Todo } from './todos/todos.model';
import { selecttodo } from './todos/todos.selector';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todolist';
  todos:any;
  constructor( private  store:Store){
    this.todos=this.store.select(selecttodo)
  }
}
