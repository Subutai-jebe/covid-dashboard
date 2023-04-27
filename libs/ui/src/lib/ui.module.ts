import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@consitency-is-key/material';
import { CardComponent } from './card/card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [
    CardComponent,
    SidebarComponent,
    MainSidebarComponent,
    MainComponent
  ],
  exports: [SidebarComponent, MainSidebarComponent, MainComponent],
})
export class UiModule {}
