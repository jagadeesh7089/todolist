import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideStore, Store, StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { increment,decrement } from "./counter.action";
import { AppState } from './app.state';
import { selectcount } from './counter.selector';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [ AsyncPipe],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todolist';
  count:any;
  constructor( public store:Store<AppState>){
      this.count=this.store.select(selectcount)
      console.log(this.store.select(selectcount))
  }

  inc(){

     this.store.dispatch(increment())
  }
  dec(){
   this.store.dispatch(decrement())
  }
  

}
