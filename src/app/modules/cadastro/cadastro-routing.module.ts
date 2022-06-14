import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPerfilComponent } from './components/cadastro-perfil.component';

const cadastroPerfilRoutes: Routes = [
  { path: 'cadastro-perfil', component: CadastroPerfilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(cadastroPerfilRoutes)],
  exports: [RouterModule]
})
export class CadastroPerfilRoutingModule { }
