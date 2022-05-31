import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPerfilComponent } from '../cadastro/cadastro-perfil/cadastro-perfil.component';
import { IndexComponent } from '../index/index.component';


export const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'cadastro-perfil', component: CadastroPerfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingTesteModule { }

// antes teste
