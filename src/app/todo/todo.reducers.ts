import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./model/todo.model";

import * as fromTodo from '../todo/todo.reducer';
import * as fromFiltro from '../filter/filter.reducer';

import * as fromFiltroActions from '../filter/filter.actions';
import * as fromTodoActions from '../todo/todo.actions';



export interface AppState {
  todos: Todo[];
  filtro: fromFiltroActions.filtrosValidos;
}


export const appReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filtro:fromFiltro.filtroReducer
}
