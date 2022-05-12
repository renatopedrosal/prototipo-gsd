import { Component, OnInit } from '@angular/core';
import { EVENTOS } from '../../mock-eventos';
import { Evento } from '../../models/eventos.model';
import { EventoService } from '../../services/evento.service';

@Component({
  selector: 'app-cadastro-list-eventos',
  templateUrl: './cadastro-list-eventos.component.html',
  styleUrls: ['./cadastro-list-eventos.component.scss']
})

export class CadastroListEventosComponent implements OnInit{
  eventos?: Evento[] = [];

  constructor(private eventoService: EventoService) {}

  ngOnInit(): void {
    // this.getEventos();
  }

  // getEventos(): void {
  //   this.eventoService.getEventos().subscribe((evento) => (this.eventos = evento))
  // }
  displayedColumns: string[] = ['descricao'];
  dataSource = EVENTOS;
}
