import { createReducer ,on } from "@ngrx/store";
 import { increment,decrement } from "./counter.action";

  export interface CounterState{
   count :number,
  
  }

 const initialState:CounterState={
   count:0,
   
 }

 const _counterReducer=createReducer(
    initialState,
    on(increment,(state)=>({...state,count:state.count+1})),

    on(decrement,(state)=>{ return {...state,count:state.count-1}}),
    

 )

 export function counterReducer(state :any,action:any){
    return _counterReducer(state,action)
 }