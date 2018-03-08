import { Injectable} from '@angular/core';
//import {Http} from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Region } from '../model/region.model';

import "rxjs/Rx";

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/find'

@Injectable()
export class RegionService {

	constructor(private http:HttpClient) {

	}

	// retourneer alle regions
	getRegions(): Observable<Region[]> {
		return this.http.get<Region[]>('assets/data/regions.json');
    }
    
   // retourneer alle regions
	getRegion(id : number): Observable<Region> {
		return this.http.get<Region[]>('assets/data/regions.json').map(rs => { return rs.find(r=>r.id === id)});
		// return this.http.get<Region[]>('assets/data/regions.json').map((regions: Region[]) => {
		// 	return regions.find(r=>r.name === 'World')});
    }
}