import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Usuario } from '../../../../core/models/usuario';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  usuario: Usuario = new Usuario()

  constructor(private authService: AuthService) {
  }

  fazerLogin() {
    this.authService.fazerLogin(this.usuario);
  }
}
