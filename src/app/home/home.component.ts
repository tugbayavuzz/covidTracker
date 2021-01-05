import { Component, OnInit } from '@angular/core';
import {HomeService} from '../service/home.service';
import {CovidResult} from '../models/covid-result.models';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  covidResult: CovidResult;

  constructor(public homeService: HomeService) { }

  ngOnInit() {

    this.homeService.getData().subscribe((data) => {
      this.covidResult = data;
    })
  }

}
