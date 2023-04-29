import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { CountryService } from './service/country.service';
import { UiModule } from '@consitency-is-key/ui';
import { DashboardRegionComponent } from './dashboard-region/dashboard-region.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard/:regionName',
    component: DashboardRegionComponent
  },
]

@NgModule({
  declarations: [DashboardComponent, DashboardRegionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiModule
  ],
  providers: [CountryService]

})
export class DashboardModule { }
