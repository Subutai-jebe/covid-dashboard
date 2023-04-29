import { Component, Input } from '@angular/core';

@Component({
  selector: 'consitency-is-key-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Input() sidenavBackground = '#151b27';
  @Input() mainBackground = 'white';
  @Input() title = 'Covid Dashboard';
  @Input() icon = 'menu';
  @Input() position = 'start'
}
