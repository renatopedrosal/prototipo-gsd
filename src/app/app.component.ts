import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'prototipo-gsd';

  mostrarMenu: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      (mostrar) => (this.mostrarMenu = mostrar)
    );
  }

  fazerLogoff() {
    location.reload();
  }
}
