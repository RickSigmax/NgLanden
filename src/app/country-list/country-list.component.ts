import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../shared/model/country.model';
import { CountryService } from '../shared/services/country.service';
import { Region } from '../shared/model/region.model';
import { RegionService } from '../shared/services/region.service';
import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import { FavoriteService } from '../shared/services/favorite.service';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  selectedCountry: Country;
  myHeight: string = "myHeight-large";
  
  @Input()   region : Region;
  countries: Country[]
  doFilter: Boolean;

  constructor(
    private countryService : CountryService,
    private regionService: RegionService,
    private route: ActivatedRoute,
    private location: Location,
    private favoriteService: FavoriteService
  ) { }

  ngOnInit() {
    console.log('country-list.comp: ngOnInit()')
    this.getRegion();
    this.favoriteService.favorites.subscribe(f=> this.setFavorite(f));
  }

  setFavorite(name: string){
      console.log('Country-List.comp: set favorite(): ',name )
      this.countries.forEach(c =>{ 
          if(c.name === name){ 
            console.log('Country-List.comp: country found');
            c.favorite = true;
        }
      });
  }
  
 
  setSelected(country: Country)
  {
    console.log('country-list.comp: setSelected()')
    this.selectedCountry =country;
    this.myHeight = "myHeight-small";
  }

  getRegion()
  {
    console.log('country-list.comp: getRegion()')
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('region.id = '+id);
    //var regions : Region[];
    this.doFilter = true;
    if(id === 1)
    {
      console.log('id is 1');
      this.doFilter = false;      
    }
   
          this.regionService.getRegion(id).subscribe(x=> {this.region = x;
            this.getCountries();                       // 1. success handler
          }, err=> console.log(err),                   // 2. error handler
          ()=>console.log('Getting the region'));      // 3. complete handler
   
  }

  goBack() :void{
    console.log('country-list.comp: goBack()')
    this.location.back();
  } 

  getCountries()
  {
    console.log('country-list.comp: getCountries()')
    this.countryService.getAllCountries().subscribe(x=> {
      this.countries = x;
      if(this.doFilter)
      {
          console.log('filter countries');
          this.countries = this.countries.filter(c=>c.region === this.region.name);
      }
    },                                                        // 1. success handler
    err=>console.log(err),						                        // 2. error handler
    ()=> console.log('get countries complete...')             // 3. complete handler
  );
  }

  updateRating(rating: number): void {
    console.log('country-list.comp: updateRating()')
    this.selectedCountry.rating += rating;
  }

}
