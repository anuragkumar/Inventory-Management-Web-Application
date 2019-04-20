import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarcodeReaderComponent } from './barcode-reader/barcode-reader.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    BarcodeReaderComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent
  ],
  imports: [
    routing,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
