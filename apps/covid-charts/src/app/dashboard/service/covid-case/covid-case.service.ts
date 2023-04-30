import { CountryService } from './../country/country.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidCaseService {

  public COVID_DATA_SOURCE$: any;

  constructor(private http: HttpClient,
    private countryService: CountryService,
  ) { }

  getWorldSummary(): Observable<any> {
    return this.http.get(
      `https://api.covid19api.com/world/total`
    );
  }

  setCovidSource(country: string): void {
    // const sanitisedCountry = this.countryService.sanitize(country);
    this.COVID_DATA_SOURCE$ = this.http.get(`https://api.covid19api.com/total/country/${country}`).pipe(shareReplay());
  }

}
