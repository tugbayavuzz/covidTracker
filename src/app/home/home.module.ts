import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {IonicModule} from '@ionic/angular';



@NgModule({
  declarations: [HomeComponent],
    imports: [
        CommonModule,
        IonicModule
    ],
  exports: [HomeComponent],

})
export class HomeModule { }
