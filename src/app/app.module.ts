import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthService } from './core/services/auth.service';
import { ServiceModule } from './core/services/service.module';
import { CadastroModule } from './modules/cadastro/cadastro.module';
import { DialogModule } from './modules/dialog/dialog.module';
import { HomeModule } from './modules/home/home.module';
import { LoginModule } from './modules/login/login.module';
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
    LoginModule,
    HomeModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
