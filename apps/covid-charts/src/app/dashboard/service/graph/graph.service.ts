import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable, UnaryFunction, forkJoin, from, map, pipe, switchMap, take, tap, toArray } from 'rxjs';
import { CovidCaseService } from '../covid-case/covid-case.service';
import { LineChartData } from '../../models/LineChartData';
import { CovidCountryData } from '../../models/CovidCountryInfo';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(
    private datePipe: DatePipe,
    private covidService: CovidCaseService
    ) { }

  formatForLineGraph({ dataType = 'Deaths', takeValue = 190 } = {}):
  UnaryFunction<Observable<any>, Observable<LineChartData>> {
    return pipe(
      switchMap((data: CovidCountryData[]) => from(data)),
      take(takeValue),
      map((eachDay: CovidCountryData) => ({
        'name': this.datePipe.transform(eachDay.Date, 'MMM d YYYY'), // for our ngx graph
        'value': (eachDay as any)[dataType],
      })),
      toArray(),
      map((arr): LineChartData => ({
        'name': dataType,
        'series': arr
      })),
      tap(CovidCountryData => console.log({ CovidCountryData })),
    )
  }

  getFullGraph(takeValue?: number): Observable<{deaths: LineChartData; active: LineChartData; confirmed: LineChartData;recovered: LineChartData;}> {
    const deaths$ = this.covidService.COVID_DATA_SOURCE$.pipe(this.formatForLineGraph({ dataType: 'Deaths', takeValue }))
    const active$ = this.covidService.COVID_DATA_SOURCE$.pipe(this.formatForLineGraph({ dataType: 'Active', takeValue }))
    const confirmed$ = this.covidService.COVID_DATA_SOURCE$.pipe(this.formatForLineGraph({ dataType: 'Confirmed', takeValue }))
    const recovered$ = this.covidService.COVID_DATA_SOURCE$.pipe(this.formatForLineGraph({ dataType: 'Recovered', takeValue }))

    const fullChart$ = forkJoin({
      deaths: deaths$,
      active: active$,
      confirmed: confirmed$,
      recovered: recovered$
    });

    return fullChart$;
  }


}
