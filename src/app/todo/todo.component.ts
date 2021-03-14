import { AppState } from './todo.reducers';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToggleAllTodoAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

    completado: boolean;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  toogleAll(){
    this.completado = !this.completado;
    console.log(this.completado);
    const action = new ToggleAllTodoAction(this.completado);
    this.store.dispatch(action);
  }
}
