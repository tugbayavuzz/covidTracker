import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {IonicModule} from '@ionic/angular';
import {CountryPipe} from '../pipes/country.pipe';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [HomeComponent, CountryPipe],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,


    ],
  exports: [HomeComponent,CountryPipe],

})
export class HomeModule { }
