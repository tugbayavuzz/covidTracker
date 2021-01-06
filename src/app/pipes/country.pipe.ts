import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'country'
})
export class CountryPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(args[0]){
      return value.filter((n) => n.country.trim().toLowerCase().includes(args[0].trim()))
    }
    else{
      return value;
    }

  }

}
