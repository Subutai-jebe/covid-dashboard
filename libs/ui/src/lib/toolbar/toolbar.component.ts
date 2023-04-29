import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'consitency-is-key-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input() title = '';
  @Input() color = '#673bb7';
  @Input() icon = 'menu';
  @Output() iconClicked = new EventEmitter();
}
