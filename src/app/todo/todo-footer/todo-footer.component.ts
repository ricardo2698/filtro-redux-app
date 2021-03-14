import { Todo } from './../model/todo.model';
import { AppState } from './../todo.reducers';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromFiltro from '../../filter/filter.actions';
import * as fromTodo from '../todo.actions';


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  pendientes: number;
  completados: number;
  filtrosValidos: fromFiltro.filtrosValidos[] = ['todos','completados','pendiendes'];
  filtroActual: fromFiltro.filtrosValidos;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.subscribe(
      state => {
        this.filtroActual = state.filtro;
        this.contarPendientes(state.todos);
      }
    )
  }

  cambiarFiltro(nuevoFiltro:fromFiltro.filtrosValidos){
    const action = new fromFiltro.SetFiltroAction(nuevoFiltro);
    this.store.dispatch(action);
  }

  contarPendientes (todos:Todo[]){
    this.pendientes = todos.filter( todo => !todo.completado).length;
  }

  limpiarCompletados(){
    const action = new  fromTodo.BorrarAllTodoAction();
    this.store.dispatch(action);
  }

}
