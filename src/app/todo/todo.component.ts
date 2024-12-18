import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @ Input()todo:any

  @ Input()key:any

   @Output() deltodo=new EventEmitter()

   @ Output() updatestatus=new EventEmitter()
    
   del(){
    this.deltodo.emit(this.key)
   }

   update(){
      this.updatestatus.emit(this.key)
   }
}
