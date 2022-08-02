import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { CadastroEventosModule } from '../cadastro-eventos/cadastro-eventos.module';
import { NavbarModule } from '../navbar/navbar.module';
import { CadastroPerfilRoutingModule } from './cadastro-routing.module';
import { CadastroPerfilComponent } from './components/cadastro-perfil.component';



@NgModule({
  declarations: [CadastroPerfilComponent],
  imports: [
    CommonModule,
    CadastroPerfilRoutingModule,
    CadastroEventosModule,
    NavbarModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatPaginatorModule,

  ]
})
export class CadastroModule { }
