import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { CovidResult} from '../models/covid-result.models';
import { CountryResult} from '../models/countryResult'

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private url = 'https://api.collectapi.com/corona/totalData';
  private countryUrl ='https://api.collectapi.com/corona/countriesData';

     httpOptions = {
        headers: new HttpHeaders({
            authorization: 'apikey 4B1V8BlhGMHZKHJkkpa8w6:03Na7u7DnHiSV7eqbW6Dfv',
            'Content-Type': 'application/json',

        }),
         search:"turkey"
    };
  constructor(private http: HttpClient) {}
    getData(){
        return this.http.get<{success: boolean; result : CovidResult}>(
            this.url,this.httpOptions
        ).pipe(map(({result}) => result));
  }
    getCountryData(){
        return this.http.get<{success: boolean; result : CountryResult}>(
            this.countryUrl,this.httpOptions
        ).pipe(map(({result}) => result));
    }

}
