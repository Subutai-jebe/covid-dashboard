import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, from, map, mergeMap, toArray } from 'rxjs';

@Injectable()
export class CountryService {

  countriesEndpoint = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) {

   }

   getRegions() {
    return this.http.get(this.countriesEndpoint).pipe(
      mergeMap((result) => from(result as any[])),
      map(x => x['region']),
      filter((value) => (value as any).trim().length),
      toArray(),
      map((val: Array<string>) => [...new Set(val)]),
    )
   }



}
