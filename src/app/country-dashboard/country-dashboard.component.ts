import { Component, OnInit } from '@angular/core';

import { Region} from '../shared/model/region.model';

import { RegionService } from '../shared/services/region.service';
import { FavoriteService } from '../shared/services/favorite.service';

@Component({
  selector: 'app-country-dashboard',
  templateUrl: './country-dashboard.component.html',
  styleUrls: ['./country-dashboard.component.css']
})

export class CountryDashboardComponent implements OnInit {

  regions: Region[];
  favorites: String[] = [];
  
  constructor(private regionService: RegionService,
              private favoriteService: FavoriteService) { }

  ngOnInit() {
    console.log('country-dashboard.comp: ngOnInit()')
    
    this.regionService.getRegions().subscribe(regionData => {
					this.regions = regionData;                                               // 1. success handler
				},
				err => console.log(err),						                                       // 2. error handler
				()=> console.log('Getting regions complete...')	                           // 3. complete handler
      );
      
      this.favoriteService.favorites.subscribe(f=>                                 // 1. success handler
          this.setToFavorites(f),
          err=>console.log(err),						                                       // 2. error handler
          ()=> console.log('Set favorite complete...')                             // 3. complete handler
        );
  }

  setToFavorites(favorite: string): void
  {
    console.log('country-dashboard.comp: setToFavorites():', favorite);
    this.favorites.push(favorite);
  }

}
