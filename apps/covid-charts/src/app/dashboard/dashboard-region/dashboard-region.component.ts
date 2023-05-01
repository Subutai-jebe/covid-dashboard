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
  page = 1;
  pageSize = 10;


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

  refreshCountries() {
    this.countries = this.countries.map((country, i) => ({ id: i + 1, ...country })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
  }
}
