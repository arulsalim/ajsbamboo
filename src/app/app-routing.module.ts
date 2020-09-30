import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ServicesComponent} from './services/services.component';
import {ContactusComponent} from './contactus/contactus.component';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' } },
{ path: 'services', component: ServicesComponent, data: { breadcrumb: 'Services' } },
{ path: 'contactus', component: ContactusComponent, data: { breadcrumb: 'Contactus' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
