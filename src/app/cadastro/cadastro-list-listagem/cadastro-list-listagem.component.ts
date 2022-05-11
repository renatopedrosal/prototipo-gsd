import { Component } from '@angular/core';

export interface PeriodicElement {
  descricao: string;
  idPerfil: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { idPerfil: 1, descricao: 'Diretor' },
  { idPerfil: 2, descricao: 'Gerentes' },
  { idPerfil: 3, descricao: 'Editor(a)' },
  { idPerfil: 4, descricao: 'Gerente Assistente' },
  { idPerfil: 5, descricao: 'Editor(a) Associado(a)' },

];

@Component({
  selector: 'app-cadastro-list-listagem',
  templateUrl: './cadastro-list-listagem.component.html',
  styleUrls: ['./cadastro-list-listagem.component.scss']
})
export class CadastroListListagemComponent {
  displayedColumns: string[] = ['idPerfil', 'descricao'];
  dataSource = ELEMENT_DATA;
}
