import {createReducer, on} from '@ngrx/store'
import { addtodo } from './todos.action'
import { Todo } from './todos.model'
 
export interface TodosList{
    todos:[]
}

export const initialState:TodosList={
    todos:[]
}
export const  todoreducer= createReducer(
    initialState,
    on(addtodo,(state,{todo})=>({...state,todos:[]}))
)