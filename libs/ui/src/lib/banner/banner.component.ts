import { Component, Input } from '@angular/core';

@Component({
  selector: 'consitency-is-key-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() loading = false;
  @Input() buttons = false;
}
