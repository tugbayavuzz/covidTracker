import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private url = 'https://covidtracking.com/api/states/daily';

  constructor(private http: HttpClient) { }

  getData(): void {
     this.http.get(this.url, httpOptions).subscribe(data => {console.log(data);
     });
  }

}
