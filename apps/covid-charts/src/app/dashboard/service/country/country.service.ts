import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { distinctUntilChanged, filter, from, map, mergeMap, switchMap, tap, toArray } from 'rxjs';

@Injectable()
export class CountryService {

  countriesEndpoint = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) {

   }

   // TODO: Make types out of data coming from backend
   // TODO: Make everything an observable and feed to front end
   getRegions() {
    return this.http.get(this.countriesEndpoint).pipe(
      mergeMap((result) => from(result as any[])),
      map(x => x['region']),
      filter((value) => (value as any).trim().length),
      toArray(),
      map((val: Array<string>) => [...new Set(val)]),
    )
   }


   getAllCountries() {
      return this.http.get(this.countriesEndpoint).pipe(
        distinctUntilChanged(),
        switchMap((result) => from(result as any).pipe(
          map((backendData: any) => ({
            name: backendData['name'],
            population: backendData['population'],
            flag: backendData['flag'],
            region: backendData['region']
          }))
        )),
        toArray()
      )
   }

   getCountriesInRegion(region: string) {
      return this.getAllCountries().pipe(
        distinctUntilChanged(),
        switchMap((val: Array<any>) => from(val)),
        filter((countryInfo: any) => countryInfo.region === region),
        toArray(),
        tap(result => console.log({ countriesInRegion: result }))
      )
   }

  sanitize(country: string): string {

    //* Change to switch statement

    if (country.includes('United Kingdom')) {
      country = 'United-Kingdom';
    } else if (country.includes(`Côte d'Ivoire`)) {
      country = 'Ivory-Coast';
    } else if (country.includes('Democratic Republic of the')) {
      country = 'Democratic Republic of the Congo';
    }
    else if (country.includes('Moldova (Republic of)')) {
      country = 'Moldova';
    } else if (country.includes('Macedonia (the former Yugoslav Republic of)')) {
      country = 'Macedonia';
    } else if (country.includes('Iran (Islamic Republic of)')) {
      country = 'Iran';
    }
    else if (country.includes('Lao People')) {
      country = 'Laos';
    }
    else if (country.includes('Korea (Democratic')) {
      country = 'south-korea';
    }
    else if (country.includes('Syrian Arab Republic')) {
      country = 'syria';
    }


    return country;

  }




}
