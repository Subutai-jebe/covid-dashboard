import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@consitency-is-key/material';
import { CardComponent } from './card/card.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [CardComponent, SidebarComponent],
  exports: [
    SidebarComponent
  ]
})
export class UiModule {}
