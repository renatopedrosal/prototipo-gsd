import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPerfilComponent } from './components/cadastro-perfil.component';

const routes: Routes = [
  {
    path: '',
    component: CadastroPerfilComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
