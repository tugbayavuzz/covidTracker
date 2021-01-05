import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { CovidResult} from '../models/covid-result.models';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private url = 'https://api.collectapi.com/corona/totalData';

     httpOptions = {
        headers: new HttpHeaders({
            authorization: 'apikey 4B1V8BlhGMHZKHJkkpa8w6:03Na7u7DnHiSV7eqbW6Dfv',
            'Content-Type': 'application/json',

        })
    };
  constructor(private http: HttpClient) {}
    getData(){
        return this.http.get<{success: boolean; result : CovidResult}>(
            this.url,this.httpOptions
        ).pipe(map(({result}) => result));
  }

}
