import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarcodeReaderComponent } from './barcode-reader/barcode-reader.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import {routing} from './app.routing';
import {HashLocationStrategy, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductComponent } from './product/product.component';
import { AddFieldComponent } from './add-field/add-field.component';
import { ViewAuditComponent } from './view-audit/view-audit.component';
import {UserServiceClient} from './services/user.service.client';
import {ProductServiceClient} from './services/product.service.client';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BarcodeReaderComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    InventoryComponent,
    ProductComponent,
    AddFieldComponent,
    ViewAuditComponent
  ],
  imports: [
    FormsModule,
    routing,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserServiceClient,
    ProductServiceClient,
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
