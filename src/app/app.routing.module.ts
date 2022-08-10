import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroEventosComponent } from './modules/cadastro-eventos/components/cadastro-eventos.component';
import { CadastroPerfilComponent } from './modules/cadastro/components/cadastro-perfil.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { IndexComponent } from './modules/index/components/index.component';
import { LoginComponent } from './modules/login/components/login/login.component';
import { NavbarComponent } from './modules/navbar/components/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  }, //redirectTo: 'home', pathMatch: 'full'
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'cadastro-perfil',
    component: CadastroPerfilComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },
  {
    path: 'eventos',
    component: CadastroEventosComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
