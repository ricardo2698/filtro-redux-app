import { Action } from "@ngrx/store";

export const SET_FILTRO = '[Filter] Set Filto';

export type filtrosValidos = 'todos' | 'completados' | 'pendiendes';

export class SetFiltroAction implements Action {
  readonly type = SET_FILTRO;
  constructor( public filtro: filtrosValidos){}
}

export type Acciones = SetFiltroAction;
