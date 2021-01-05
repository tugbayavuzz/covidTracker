import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private url = 'https://api.collectapi.com/corona/totalData';

  constructor(private http: HttpClient) { }
     httpOptions = {
        headers: new HttpHeaders({
            authorization: 'apikey 4B1V8BlhGMHZKHJkkpa8w6:03Na7u7DnHiSV7eqbW6Dfv',
            'Content-Type': 'application/json',

        })
    };
    getData(){
        return new Promise((resolve, reject) => {
        const request =  this.http.get(this.url, this.httpOptions).subscribe(data => {
                if (data["success"]){
                    resolve(data['result']);
                }

        }, e => { reject(e); }, () => {
            request.unsubscribe(); // subsrcribe olduğunda sürekli yenilemesini durdurduk
        });
     });
  }

}
