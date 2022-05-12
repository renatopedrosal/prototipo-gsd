import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EVENTOS } from '../mock-eventos';
import { Evento } from '../models/eventos.model';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor() { }

  getEventos(): Observable<Evento[]> {
    const eventos = of(EVENTOS)
    return eventos;
  }
}
