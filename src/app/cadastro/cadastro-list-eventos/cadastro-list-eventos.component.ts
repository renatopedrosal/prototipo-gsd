import { Component } from '@angular/core';

export interface Evento {
  descricao: string
}
const ELEMENT_DATA: Evento[] = [
  { descricao: 'Água' },
  { descricao: 'Aluguel' },
  { descricao: 'Auxílio Letra' },
  { descricao: 'Auxílio Moradia' },
  { descricao: 'Celular Corporativo' },
  { descricao: 'Climatização' },
  { descricao: 'Condomínio' },
  { descricao: 'Despesa Extra com Alimentação' },
  { descricao: 'Diárias' },
  { descricao: 'Escolares' },
  { descricao: 'Escolares Dependentes - Externato' },
  { descricao: 'Escolares Dependentes - Internato' },
  { descricao: 'Escolares Funcionários' },
  { descricao: 'Celular Corporativo' },
];

@Component({
  selector: 'app-cadastro-list-eventos',
  templateUrl: './cadastro-list-eventos.component.html',
  styleUrls: ['./cadastro-list-eventos.component.scss']
})

export class CadastroListEventosComponent{
  displayedColumns: string[] = ['descricao'];
  dataSource = ELEMENT_DATA;
}
