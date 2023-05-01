import { CountryService } from './../country/country.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, shareReplay, tap } from 'rxjs';
import { CovidCountryData } from '../../models/CovidCountryInfo';

@Injectable({
  providedIn: 'root'
})
export class CovidCaseService {

  public COVID_DATA_SOURCE$: Observable<CovidCountryData[]> = of([]);

  constructor(private http: HttpClient, private countryService:CountryService) { }

  setCovidSource(country: string): void {
    const sanitizedCountries = this.countryService.sanitize(country);
    this.COVID_DATA_SOURCE$ = this.http.get<CovidCountryData[]>(`https://api.covid19api.com/total/country/${sanitizedCountries}`).pipe(shareReplay());
  }

}
