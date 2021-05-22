import {RouterModule, Routes} from '@angular/router';

// Pages
import { AboutComponent } from './pages/about/about.component';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/user/user.component';

export const appRoutes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: UsersComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes);
