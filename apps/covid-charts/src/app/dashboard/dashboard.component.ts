import { Component, OnInit } from '@angular/core';
import { CountryService } from './service/country.service';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'consitency-is-key-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(':enter',
          [style({ opacity: 0 }),
          stagger('15ms', animate('600ms ease-out', style({ opacity: 1 })))],
          { optional: true }
        ),
        query(':leave',
          animate('200ms', style({ opacity: 0 })),
          { optional: true }
        )
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit {
  allRegions: string[] = [];

  constructor(private countriesService: CountryService,
        private router: Router
    ) {}

  ngOnInit(): void {
      this.countriesService.getRegions().subscribe(regions => {
        this.allRegions = regions;
      });
  }

  toDetail(region: string) {
    this.router.navigate([`dashboard/${region}`]);
  }
}
