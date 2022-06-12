import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'index', pathMatch: 'full' },
  // { path: 'index', component: IndexComponent },
  // { path: 'cadastro-perfil', component: CadastroPerfilComponent },
  // { path: 'navbar', component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }
