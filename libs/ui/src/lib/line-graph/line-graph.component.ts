import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'consitency-is-key-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss'],
})
export class LineGraphComponent {
  @Input() data: any = [];
  @Output() updateGraph = new EventEmitter();
  view: [number, number]= [800, 600];
  sliderValue = 0;

  // options
  legend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Dates';
  yAxisLabel = 'Confirmed Cases';
  timeline = true;
  autoScale = true;

  colorScheme: any = {
    domain: ['cyan', 'green', 'orange', 'purple']
  };

  constructor() {
    Object.assign(this, { multi: this.data });
  }

  onSliderChange(num: any) {
    console.log({ num: num.target.value })
    this.updateGraph.emit(num.target.value);

  }
}
