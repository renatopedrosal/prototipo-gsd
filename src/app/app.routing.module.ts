import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { CadastroEventosComponent } from './modules/cadastro-eventos/components/cadastro-eventos.component';
import { CadastroPerfilComponent } from './modules/cadastro/components/cadastro-perfil.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { IndexComponent } from './modules/index/components/index.component';
import { LoginComponent } from './modules/login/components/login/login.component';
import { NavbarComponent } from './modules/navbar/components/navbar.component';

const routes: Routes = [
  { path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  }, //redirectTo: 'home', pathMatch: 'full'
  { path: 'index',
    component: IndexComponent,
    canActivate: [AuthGuard]
  },
  { path: 'cadastro-perfil',
    component: CadastroPerfilComponent,
    canActivate: [AuthGuard]
  },
  { path: 'navbar',
    component: NavbarComponent,
    canActivate: [AuthGuard]
   },
   { path: 'eventos',
     component: CadastroEventosComponent,
     canActivate: [AuthGuard]
   },

  { path: 'login', component: LoginComponent},

  { path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
