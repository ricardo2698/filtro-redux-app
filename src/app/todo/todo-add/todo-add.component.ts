import { AppState } from './../todo.reducers';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import *as fromTodo from '../todo.actions'

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(
    private store: Store<AppState>
  ) {
    this.store.subscribe(
      state => {
        console.log(state);
      }
    )
  }

  ngOnInit():void  {
    this.txtInput = new FormControl('', [Validators.required]);
  }

  agregarTodo(){
    console.log( this.txtInput.value );
    console.log( this.txtInput.valid );
    if( this.txtInput.invalid){
      return;
    }
    else{
      const action = new  fromTodo.AgregarTodoAction(this.txtInput.value);
      this.store.dispatch(action);
    }
    this.txtInput.setValue('');
  }

}
