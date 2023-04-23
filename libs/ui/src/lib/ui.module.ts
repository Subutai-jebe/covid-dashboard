import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@consitency-is-key/material';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [CardComponent],
})
export class UiModule {}
