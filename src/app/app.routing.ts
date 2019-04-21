import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {RegistrationComponent} from './registration/registration.component';
import {InventoryComponent} from './inventory/inventory.component';
import {BarcodeReaderComponent} from './barcode-reader/barcode-reader.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'scan', component: BarcodeReaderComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
