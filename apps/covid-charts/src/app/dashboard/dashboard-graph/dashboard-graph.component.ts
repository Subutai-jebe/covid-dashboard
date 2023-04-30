import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
import { CovidCaseService } from '../service/covid-case/covid-case.service';
import { GraphService } from '../service/graph/graph.service';


@Component({
  selector: 'consitency-is-key-dashboard-graph',
  templateUrl: './dashboard-graph.component.html',
  styleUrls: ['./dashboard-graph.component.scss'],
})
export class DashboardGraphComponent implements OnInit {
  countryName = '';
  covidLineChartData: any = [];

  constructor(private ar: ActivatedRoute,
    private covidService: CovidCaseService,
    private graphService: GraphService
    ) {}

  ngOnInit(): void {
      this.ar.url.pipe(
        map(url => {
          const country = url[1].path;
          this.covidService.setCovidSource(country);
          this.countryName = country;
        }),
        switchMap(() => this.graphService.getFullGraph())
      ).subscribe(({ deaths, active, confirmed, recovered }) => {
        this.covidLineChartData = [deaths, active, confirmed];
        console.log({covidData: this.covidLineChartData })
      });
  }

}
