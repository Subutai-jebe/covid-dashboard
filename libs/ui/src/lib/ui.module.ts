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

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [
    CardComponent,
    SidebarComponent,
    MainSidebarComponent,
    MainComponent,
    SidenavComponent,
    ToolbarComponent,
    BannerComponent,
    TileComponent,
  ],
  exports: [
    SidebarComponent,
    MainSidebarComponent,
    MainComponent,
    SidenavComponent,
    ToolbarComponent,
    BannerComponent,
    TileComponent,
  ],
})
export class UiModule {}
