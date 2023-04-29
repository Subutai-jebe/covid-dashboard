import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'consitency-is-key-dashboard-region',
  templateUrl: './dashboard-region.component.html',
  styleUrls: ['./dashboard-region.component.scss'],
})
export class DashboardRegionComponent implements OnInit {
  region = '';

  constructor(private r: Router) {}

  ngOnInit(): void {
    this.region = this.r.url.split('/')[2];
  }
}
