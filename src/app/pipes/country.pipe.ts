import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'country' })
export class CountryPipe implements PipeTransform {
  transform(country: any, searchText: any): any {
    if(searchText == null) return country;

    return country.filter(function(category){
      return category.countryName.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  } 
}

