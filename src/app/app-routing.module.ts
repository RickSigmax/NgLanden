import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDashboardComponent } from './country-dashboard/country-dashboard.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: CountryDashboardComponent },
  { path: 'list/:id', component: CountryListComponent },
  { path: 'detail/:name', component: CountryDetailComponent },
  {
    //catch all route
     path: '**', redirectTo: 'dashboard'
  }
]

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
