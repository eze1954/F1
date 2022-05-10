import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardpilotoComponent } from './cards/card.pilotos/card.pilotos.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    CardpilotoComponent
  ],
  exports:[
    CardpilotoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ComponentsModule { }