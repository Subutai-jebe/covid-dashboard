import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@consitency-is-key/material';
import { CardComponent } from './card/card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { MainComponent } from './main/main.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BannerComponent } from './banner/banner.component';
import { TileComponent } from './tile/tile.component';
import { LineGraphComponent } from './line-graph/line-graph.component';

import { NgxGraphModule } from '@swimlane/ngx-graph';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NgxGraphModule,
    NgxChartsModule,
    FormsModule,
  ],
  declarations: [
    CardComponent,
    SidebarComponent,
    MainSidebarComponent,
    MainComponent,
    SidenavComponent,
    ToolbarComponent,
    BannerComponent,
    TileComponent,
    LineGraphComponent,
    PieChartComponent,
  ],
  exports: [
    SidebarComponent,
    MainSidebarComponent,
    MainComponent,
    SidenavComponent,
    ToolbarComponent,
    BannerComponent,
    TileComponent,
    LineGraphComponent,
    PieChartComponent,
  ],
})
export class UiModule {}
