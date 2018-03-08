import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap} from 'rxjs/operators';
import { Country } from '../model/country.model';


import 'rxjs/add/operator/map'

@Injectable()
export class CountryService {

  private baseApiUrl = "https://restcountries.eu/rest/v2"; 

  constructor(
    private http: HttpClient
  )  { }

  getAllCountries():Observable<Country[]>
  {
     return this.http.get<Country[]>(this.baseApiUrl+'/all').map(res => this.myMap(res))    
  }
 
  searchCountry(term: string): Observable<Country[]> {
    if (!term) {
      // if not search term, return empty hero array.
      return of([]);
    }
    term = term.trim();
    return this.http.get<Country[]>(this.baseApiUrl+'/name/'+term+'?fields=name').pipe(
      tap(_=>this.log('found countries matching '+term)),
      catchError(this.handleError<Country[]>('searchCountry',[])),
      map(res => this.myMap(res))
      ); 
  }
  
  getCountry(name:string): Observable<Country>
  {
    const url = this.baseApiUrl+'/name/'+name+'?fullText=true';
    console.log(url);
    return this.http.get<Country>(url).map(res=>this.myMapCounty(res));
  }

  myMapCounty(input: any) : Country
  {
      var countries : Country[] = []

      input.forEach(element=>{countries.push(new Country(element.name,
                                                        element.capital,
                                                        element.region,
                                                        element.flag,
                                                        Number(element.population).toLocaleString('nl-NL'),
                                                        element ? element.translations["nl"] : '', 
                                                        element.timezones ? element.timezones[0] : '',                                                                                                             
                                                        element.latlng ? element.latlng[0] : 52.14180,
                                                        element.latlng ? element.latlng[1] : 6.50276,
                                                        element ));
                                                      }
                                                      );
      return countries[0];
  }

  myMap(input : any[]) : Country[]
  {
      var countries : Country[] = []
      input.forEach(element=>{countries.push( 
        new Country( 
         element.name,
         element.capital,
         element.region,
         element.flag, 
         Number(element.population).toLocaleString('nl-NL'),
         element.translations ? element.translations["nl"] : '',     
         element.timezones ? element.timezones[0] : '',
         element.latlng ? element.latlng[0] : 52.14180,
         element.latlng ? element.latlng[1] : 6.50276,
         element.capital ? element.capital : '' ));
        }
        );
      return countries;
  }

  private handleError<T> (operation = 'operation', result?:T )
  {
    return (error: any):Observable<T> => {
      console.error(error);
      this.log('${operation} failed: ${error.message}');
      return of(result as T);
    }
  }

  private log(message: string) : void {
    console.log(message);
  }
}
