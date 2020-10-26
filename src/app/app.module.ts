import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidoComponent } from './components/protegido/protegido.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProtegidoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'lasi09-uwu.us.auth0.com',
      clientId: 'Os45sKAgPWPT9JmeYCFNefqnBXuU9YZm'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
