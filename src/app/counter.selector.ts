import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

 export const selectcountstate=(state:AppState)=>state.counter

 export const selectcount=createSelector(
    selectcountstate,
    (state)=>state.count
 )