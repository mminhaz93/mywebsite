import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import { ICountry } from "../model/country.model";

@Injectable()
export class GeonameService {
  private URL: string = "assets/json/geonames.json";

  constructor(private _http: Http) {}

  getCountries(): Observable<ICountry[]> {
    return this._http
      .get(this.URL)
      .map((response: Response) => <ICountry[]>response.json().geonames)
      .catch(error => {
        console.error(error);
        return Observable.throw(error.json());
      });
  }
}
