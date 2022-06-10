import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPerfilComponent } from './modules/cadastro/components/cadastro-perfil.component';
import { IndexComponent } from './modules/index/components/index.component';
import { NavbarComponent } from './modules/navbar/components/navbar.component';

export const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'cadastro-perfil', component: CadastroPerfilComponent },
  { path: 'navbar', component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

// antes teste
