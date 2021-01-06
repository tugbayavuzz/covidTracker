import { Component, OnInit } from '@angular/core';
import {HomeService} from '../service/home.service';
import {CovidResult} from '../models/covid-result.models';
import {CountryResultModel} from '../models/country-result.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  covidResult: CovidResult;
  countryList;
  countryName;
  filter(a){
    console.log(a)
  }

  constructor(public homeService: HomeService) { }

  ngOnInit() {

    this.homeService.getData().subscribe((data) => {
      this.covidResult = data;
    })
    this.homeService.GetCountryData("").then(data => {
      this.countryList = data;
    })

  }

}
