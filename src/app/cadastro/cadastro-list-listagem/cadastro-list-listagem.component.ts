import { Component } from '@angular/core';

export interface PeriodicElement {
  descricao: string;
  idPerfil: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { idPerfil: 1, descricao: '' },
  { idPerfil: 2, descricao: '' },
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
