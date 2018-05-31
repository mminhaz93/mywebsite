import { Component, OnInit } from "@angular/core";
import { ICountry } from "../../../model/country.model";
import { GeonameService } from "../../../services/geoname.service";

@Component({
  selector: "app-geonames",
  templateUrl: "./geonames.component.html",
  styleUrls: ["./geonames.component.css"]
})
export class GeonamesComponent implements OnInit {
  isDesc: boolean = false;
  column: string;
  countries: ICountry[];
  errorMessage: string;
  copyCountries: ICountry[] = [];

  constructor(private _geonameService: GeonameService) {

  }

  ngOnInit() {
    this.loadCountries();
  }

  loadCountries() {
    this._geonameService
      .getCountries()
      .subscribe(
        countries => (this.countries = countries),
        error => (this.errorMessage = <any>error),
        () => (this.copyCountries = this.countries)
      );
  }

  filterBy(filter: string) {
    switch (filter) {
      case "all":
        this.countries = this.copyCountries;
        //console.log('all countries clicked');
        break;
      case "europe":
        this.countries = this.copyCountries.filter(country => {
          return country.continentName.toLowerCase().includes("europe");
        });
        //console.log('show only european countries');
        break;
      case "asia":
        this.countries = this.copyCountries.filter(country => {
          return country.continentName.toLowerCase().includes("asia");
        });
        //console.log('show only european countries');
        break;
      case "pop":
        this.countries = this.copyCountries.filter(country => {
          return parseInt(country.population) > 1000000;
        });
        //console.log('show poulation > 1M');
        break;
    }
  }

  sort(property) {
    this.isDesc = !this.isDesc; //change the direction
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.countries.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1 * direction;
      } else if (a[property] > b[property]) {
        return 1 * direction;
      } else {
        return 0;
      }
    });
  }
}
