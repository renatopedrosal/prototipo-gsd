import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home/home.component';
import { IndexComponent } from './modules/index/components/index.component';
import { LoginComponent } from './modules/login/components/login/login.component';
import { NavbarComponent } from './modules/navbar/components/navbar.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  // { path: 'cadastro-perfil', component: CadastroPerfilComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
