import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/index/index.module').then((m) => m.IndexModule),
  },
  {
    path: 'index',
    children: [
      {
        path: 'index',
        loadChildren: () =>
          import('./modules/index/index.module').then((m) => m.IndexModule),
      },
      {
        path: 'cadastro-perfil',
        loadChildren: () =>
          import('./modules/cadastro/cadastro.module').then((m) => m.CadastroModule),
      },
    ],
  },

  // { path: '', redirectTo: 'index', pathMatch: 'full' },
  // { path: 'index', component: IndexComponent },
  // { path: 'cadastro-perfil', component: CadastroPerfilComponent },
  // { path: 'navbar', component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

// {
//   path: 'home',
//   canActivate: [AuthGuard],
//   children: [
//     {
//       path: 'listagem',
//       loadChildren: () =>
//         import('./modules/list/list.module').then((m) => m.ListModule),
//     },
//     {
//       path: 'create',
//       loadChildren: () =>
//         import('./modules/create/create.module').then((m) => m.CreateModule),
//     },
//   ],
// }
