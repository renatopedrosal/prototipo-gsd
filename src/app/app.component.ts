import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'prototipo-gsd';

  mostrarMenu: boolean = true;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      (mostrar) => (this.mostrarMenu = mostrar)
    );
  }

  fazerLogoff() {
    this.router.navigate(['/login'])
    this.mostrarMenu = false;
    // location.reload();
  }
}
