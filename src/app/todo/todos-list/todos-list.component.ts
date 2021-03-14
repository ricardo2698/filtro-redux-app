import { state } from '@angular/animations';
import { Todo } from './../model/todo.model';
import { AppState } from './../todo.reducers';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  todos: Todo[] = [];
  filtro : string;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.subscribe(
      state => {
        this.todos = state.todos;
        this.filtro = state.filtro;
      }
    )
  }

}
