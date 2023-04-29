import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CovidCaseService } from '../service/covid-case.service';

@Component({
  selector: 'consitency-is-key-dashboard-graph',
  templateUrl: './dashboard-graph.component.html',
  styleUrls: ['./dashboard-graph.component.scss'],
})
export class DashboardGraphComponent implements OnInit {

  constructor(private ar: ActivatedRoute,
    private covidService: CovidCaseService
    ) {}

  ngOnInit(): void {
      this.ar.url.pipe(
        map(url => url[1].path),
        // tap(country => )
      )
  }

}
