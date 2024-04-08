import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { FooterComponent } from './footer/footer.component';
import { HorizontalTopbarComponent } from './horizontal-topbar/horizontal-topbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutsComponent,
    FooterComponent,
    HorizontalTopbarComponent,
    HorizontalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LayoutsModule {
  constructor() {

  }
}