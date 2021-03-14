import { ToggleTodoAction, EditarTodoAction, BorrarTodoAction } from './../todo.actions';
import { AppState } from './../todo.reducers';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from './../model/todo.model';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef

  chkFiel: FormControl;
  txtInput: FormControl;
  editando: boolean;

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.chkFiel = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkFiel.valueChanges.subscribe(
      value => {
        console.log(value);
        const action = new ToggleTodoAction(this.todo.id);
        this.store.dispatch(action);
      }
    )
  }

  editar(){
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);

  }

  terminarEdicion(){
    this.editando = false;
    const action = new EditarTodoAction(this.todo.id, this.txtInput.value);
    this.store.dispatch(action);
  }

  eliminar(){
    const action = new BorrarTodoAction(this.todo.id);
    this.store.dispatch(action);
  }
}
