import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Country } from '../shared/model/country.model';
import { CountryService } from '../shared/services/country.service';
import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import { ClockService } from '../shared/services/clock.service';
import { DatePipe} from '@angular/common';
import { FavoriteService } from '../shared/services/favorite.service';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  
  clockServiceSubscription: ISubscription;
  hourOffset: number = 0;
  showBack: boolean = false;
  transNL : string;
  time: Date;
  staticDateTime: Date = new Date();

  @Input()
  country : Country //= new Country('test1','test2','test3');

  @Output()
  rating: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  fav: EventEmitter<string> =new EventEmitter<string>(); 

  isFavorite: boolean = false;

  constructor(
    private countryService : CountryService,
    private route: ActivatedRoute,
    private location: Location,
    private clockService: ClockService,
    private favoriteService: FavoriteService
  ) { }

  ngOnInit() {
    console.log('country-detail.comp: ngOnInit()')
    this.getCountry();
    this.getTime();
  }

  ngOnChanges(change) {
    console.log('country-detail.comp: ngOnChanges(change): ', change);
    if (this.country) {
      this.calcHourOffset();
      this.isFavorite = this.country.favorite;
		}
	}

  ngOnDestroy() {
    console.log('country-detail.comp: ngOnDestroy()');    
    this.clockServiceSubscription.unsubscribe();
  }

  getCountry(){
    console.log('country-detail.comp: getCountry()');    
    var name = this.route.snapshot.paramMap.get('name');
    if(!name)
    {
      this.showBack = false;  
      name = this.country.name;
    }
    else
    {
      this.showBack = true;
    }
    
    this.countryService.getCountry(name).subscribe(x=>{
      this.country = x;             
      this.calcHourOffset(); },                           // 1. success handler
      err=>console.log(err),						                  // 2. error handler
      ()=> console.log('Get country complete...') );      // 3. complete handler
  }
  
  calcHourOffset()
  {
    console.log('country-detail.comp: calcHourOffset()')
    //calculate new UTC hour      
    var timeHour = (new Date()).getHours();  
    var houre : number =  +this.country.timeZone.slice(3,6);
    this.hourOffset = timeHour-2 + houre;
  }

  getTime()
  {
    console.log('country-detail.comp: getTime()')
    //calculate new UTC houre      
    
    this.clockServiceSubscription = this.clockService.getClock().subscribe(t =>
    {
      //console.log('time changed');
      t.setUTCHours(this.hourOffset);
      this.time =t; 
    });   
  }

  
  goBack() :void{
    console.log('country-detail.comp: goBack()')
    this.location.back();
  }

  rate(num: number): void 
  {
    console.log('country-detail.comp: rate()', this.country.name, ': ', num );
    this.rating.emit(num);
  }
  
  favorite() {
		console.log('country-detail.comp:favorite()', this.country.name );
    this.isFavorite = !this.isFavorite;
    //this.fav.emit(this.isFavorite);
    console.log('set favorite country:', this.country.name);
    this.favoriteService.favorites.next(this.country.name);    
	}

}
