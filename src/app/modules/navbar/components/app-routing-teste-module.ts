import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPerfilComponent } from '../../cadastro/components/cadastro-perfil.component';
import { IndexComponent } from '../../index/components/index.component';


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
