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

import { CadastroEventosRoutingModule } from './cadastro-eventos-routing.module';
import { CadastroEventosComponent } from './components/cadastro-eventos.component';


@NgModule({
  declarations: [
    CadastroEventosComponent
  ],
  imports: [
    CommonModule,
    CadastroEventosRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatPaginatorModule,
  ]
})
export class CadastroEventosModule { }
