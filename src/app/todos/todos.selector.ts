import { AppState } from "./app.state";
import {createSelector} from '@ngrx/store'


export const selecttodolist=(state:AppState)=>state.todolist

export const selecttodo=createSelector(
    selecttodolist,
    (state)=>state.todos
)