import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { Subject  } from 'rxjs/Subject';
import { of} from 'rxjs/observable/of';

import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

import { Country} from '../shared/model/country.model'
import { CountryService} from '../shared/services/country.service'


@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.css']
})
export class CountrySearchComponent implements OnInit {

  countries$: Observable<Country[]>;     //Observable property convention ends with a $-sign.  

  private searchTerms = new Subject<string>();

  constructor(private countryService : CountryService) { }

  ngOnInit() {
    console.log('country-search.comp: ngOnInit()')
    this.countries$ = this.searchTerms.pipe(
      debounceTime(500),                // wait 500 ms  
      distinctUntilChanged(),           // request only when term has changed
      switchMap((term:string)=>this.countryService.searchCountry(term))  //start country service search when term is adjusted by the user
    )
  }

  search(term: string)
  {
    console.log('country-search.comp: search() : ',term);
    this.searchTerms.next(term);
  }

}
