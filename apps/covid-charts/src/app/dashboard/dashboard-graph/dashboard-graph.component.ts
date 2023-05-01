import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { switchMap } from 'rxjs';
import { GraphService } from '../service/graph/graph.service';
import { LineChartData } from '../models/LineChartData';
import { CovidCaseService } from '../service/covid-case/covid-case.service';

@Component({
  selector: 'consitency-is-key-dashboard-graph',
  templateUrl: './dashboard-graph.component.html',
  styleUrls: ['./dashboard-graph.component.scss'],
})
export class DashboardGraphComponent implements OnInit {
  countryName = '';
  covidLineChartData: LineChartData[] = [];
  pieChartData: any; // TODO Stronly type this

  constructor(private ar: ActivatedRoute,
    private graphService: GraphService,
    private covidService: CovidCaseService
    ) {}

  ngOnInit(): void {
      this.ar.url.pipe(
        switchMap((url: UrlSegment[]) => {
          this.countryName = url[1].path;
          this.covidService.setCovidSource(this.countryName);
          this.getPieChartData();
          return this.graphService.getFullGraph()
        })
      ).subscribe(({ deaths, active, confirmed, recovered }) => {
        this.covidLineChartData = [deaths, active, confirmed, recovered];
        console.log({covidData: this.covidLineChartData })
      });
  }

  updateGraph(daysFrom2020: any) {
    this.graphService.getFullGraph(daysFrom2020).subscribe(({ deaths, active, confirmed, recovered }) => {
      this.covidLineChartData = [deaths, active, confirmed, recovered];
      console.log({ covidData: this.covidLineChartData })
    })
  }

  getPieChartData(){
    this.graphService.getPieChartData().subscribe(
      ({ deaths, active, confirmed, recovered }) => {
        this.pieChartData = [deaths, active, confirmed, recovered];
      })
  }

}
