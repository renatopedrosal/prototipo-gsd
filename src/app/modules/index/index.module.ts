import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from '../navbar/navbar.module';

import { IndexComponent } from './components/index.component';
import { IndexRoutingModule } from './index-routing.module';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    NavbarModule
    ],
})
export class IndexModule { }
