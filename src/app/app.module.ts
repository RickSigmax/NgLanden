//MODULE IMPORTS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {HttpModule} from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { AgmCoreModule } from '@agm/core';     //Angular Google Maps

//COMPONENT IMPORTS
import { AppComponent } from './app.component';
import { CountryDashboardComponent } from './country-dashboard/country-dashboard.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountrySearchComponent } from './country-search/country-search.component';

//SERVICE IMPORTS
import { ClockService } from './shared/services/clock.service';
import { FavoriteService } from './shared/services/favorite.service';
import { CountryService } from './shared/services/country.service';
import { RegionService } from './shared/services/region.service';

@NgModule({
  //Declarations om alle componenten in te declareren;
  declarations: [
    AppComponent,
    CountryDashboardComponent,
    CountryDetailComponent,
    CountryListComponent,
    CountrySearchComponent,
  ],
  //Import om alle modules in te laden Dependency Injection;
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, AgmCoreModule.forRoot({
      apiKey:'AIzaSyD23cc2r8zHIAISUvlWjp7_CDFQaX5X3IQ'
    })
  ],
  providers: [CountryService,RegionService,ClockService,FavoriteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
