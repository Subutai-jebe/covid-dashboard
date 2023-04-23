import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  imports: [CommonModule, MatIconModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSliderModule,
    MatProgressBarModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatMenuModule,
    MatInputModule,
    MatRadioModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatSelectModule],
    exports: [
      MatIconModule,
      MatAutocompleteModule,
      MatProgressSpinnerModule,
      MatButtonModule,
      MatSliderModule,
      MatProgressBarModule,
      MatDialogModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatNativeDateModule,
      MatMenuModule,
      MatInputModule,
      MatRadioModule,
      MatToolbarModule,
      MatCardModule,
      MatSidenavModule,
      MatListModule,
      MatExpansionModule,
      MatTabsModule,
      MatSlideToggleModule,
      MatSelectModule
    ]
})
export class MaterialModule {}
