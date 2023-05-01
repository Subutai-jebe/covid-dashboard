import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from '../service/country/country.service';

@Component({
  selector: 'consitency-is-key-dashboard-region',
  templateUrl: './dashboard-region.component.html',
  styleUrls: ['./dashboard-region.component.scss'],
})
export class DashboardRegionComponent implements OnInit {
  region = '';
  countries: {
  flag: 'string',
  name: { common: string },
  population: number,
  region: string
  }[] = [];
  term = '';

  //TODO: this component should really be called dashboard region-detail
  // TODO as its showing the countries within the region ?
  // TODO: Add search bar at the top of page
  constructor(private r: Router, private countryService: CountryService) {}

  ngOnInit(): void {
    this.region = this.r.url.split('/')[2];
    this.countryService.getCountriesInRegion(this.region)
    .subscribe(countries => this.countries = countries)
  }

  toDetail(country: string) {
    this.r.navigate([`dashboard/${country}/graph`]);
  }
}
