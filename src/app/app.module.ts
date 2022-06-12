import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceModule } from './core/services/service.module';
import { CadastroModule } from './modules/cadastro/cadastro.module';
import { DialogModule } from './modules/dialog/dialog.module';
import { NavbarModule } from './modules/navbar/navbar.module';




@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceModule,
    CadastroModule,
    DialogModule,
    NavbarModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
