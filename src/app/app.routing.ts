import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {RegistrationComponent} from './registration/registration.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'profile', component: ProfileComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
