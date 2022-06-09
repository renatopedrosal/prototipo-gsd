import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroPerfilComponent } from './components/cadastro-perfil.component';



@NgModule({
  declarations: [CadastroPerfilComponent],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatTabsModule,
    MatIconModule,
    MatPaginatorModule,

  ]
})
export class CadastroModule { }
