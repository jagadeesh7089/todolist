
 import {createAction, props} from '@ngrx/store'
 import { Todo } from './todos.model'
 export const addtodo= createAction('addtodo',props<{todo:Todo}>())