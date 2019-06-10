import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, 
         MatListModule, 
         MatProgressSpinnerModule,
         MatCardModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  exports: [
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ]
})
export class NgmaterialModule { }
