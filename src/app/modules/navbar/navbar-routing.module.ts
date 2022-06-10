import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPerfilComponent } from '../cadastro/components/cadastro-perfil.component';
import { IndexComponent } from '../index/components/index.component';
import { NavbarComponent } from './components/navbar.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'cadastro-perfil', component: CadastroPerfilComponent },
  { path: 'navbar', component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }
