import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, from, map, pipe, switchMap, takeLast, toArray } from 'rxjs';
import { CovidCaseService } from '../covid-case/covid-case.service';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(
    private datePipe: DatePipe,
    private covidService: CovidCaseService
    ) { }

  formatForLineGraph({ dataType = 'Deaths', takeValue = 30 } = {}) {
    return pipe(
      switchMap((data: any) => from(data)),
      takeLast(takeValue),
      map((eachDay: any) => ({
        'name': this.datePipe.transform(eachDay.Date, 'MMM d'), // for our ngx graph
        'value': eachDay[dataType],
      })),
      toArray(),
      map(arr => ({
        'name': dataType,
        'series': arr
      })),
    )
  }

  getFullGraph(): Observable<any> {
    const deaths$ = this.covidService.COVID_DATA_SOURCE$.pipe(this.formatForLineGraph({ dataType: 'Deaths' }))
    const active$ = this.covidService.COVID_DATA_SOURCE$.pipe(this.formatForLineGraph({ dataType: 'Active' }))
    const confirmed$ = this.covidService.COVID_DATA_SOURCE$.pipe(this.formatForLineGraph({ dataType: 'Confirmed' }))
    const recovered$ = this.covidService.COVID_DATA_SOURCE$.pipe(this.formatForLineGraph({ dataType: 'Recovered' }))

    const fullChart$ = forkJoin({
      deaths: deaths$,
      active: active$,
      confirmed: confirmed$,
      recovered: recovered$
    });

    return fullChart$;
  }


}
