import { Component, OnInit } from '@angular/core';
import { ICountry } from '../../../model/country.model';
import { GeonameService } from '../../../services/geoname.service';
import _ = require('lodash');

@Component({
  selector: 'app-geonames',
  templateUrl: './geonames.component.html',
  styleUrls: ['./geonames.component.css']
})
export class GeonamesComponent{
  sortDirection = 'asc';

  countries: ICountry[];
  errorMessage: string;
  copyCountries: ICountry[] = [];
  sortBy: string;

  constructor(private _geonameService: GeonameService) { 
    this.loadCountries();
  }

  loadCountries() {
    this._geonameService.getCountries()
      .subscribe(
        countries => this.countries = countries,
        error => this.errorMessage = <any>error,
        () => this.copyCountries = this.countries
        );
  }
  
  

  sortType(sort: string, direction: string) {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    if(sort === 'name') {
      this.countries = _.sortBy(this.copyCountries, o => o.countryName);
      //console.log(this.countries);
    }
    if(sort === 'pop') {
      if(this.sortDirection === 'asc'){
        this.countries = _.sortBy(this.copyCountries, o => o.population);
      }else{
        this.sortDirection === 'desc'
        this.countries = _.sortBy(this.copyCountries, o => o.population).reverse();
      }
    }
  }

  filterBy(filter: string) {
    switch(filter) {
     case 'all':
        this.countries = this.copyCountries;
        //console.log('all countries clicked');
        break;
     case 'europe':
      this.countries = this.countries.filter(country => {
        return country.continentName.toLowerCase().includes('europe');
      });
        //console.log('show only european countries');
        break;
     case 'pop':
      this.countries = this.countries.filter(country => {
        return parseInt(country.population) > 1000000;
      });
        //console.log('show poulation > 1M');
        break;
    }
  }

}
