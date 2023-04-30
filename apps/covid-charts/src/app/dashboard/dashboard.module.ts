import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';

import { UiModule } from '@consitency-is-key/ui';
import { DashboardRegionComponent } from './dashboard-region/dashboard-region.component';
import { MaterialModule } from '@consitency-is-key/material';
import { DashboardGraphComponent } from './dashboard-graph/dashboard-graph.component';
import { CountryService } from './service/country/country.service';
import { CovidCaseService } from './service/covid-case/covid-case.service';
import { GraphService } from './service/graph/graph.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'dashboard/:regionName',
    component: DashboardRegionComponent,
  },
  {
    path: 'dashboard/:regionName/graph',
    component: DashboardGraphComponent
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardRegionComponent,
    DashboardGraphComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiModule,
    MaterialModule,
  ],
  providers: [CountryService, CovidCaseService, GraphService],
})
export class DashboardModule {}
