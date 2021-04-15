import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { JuegosComponent } from './juegos.component';
import { TatetiComponent } from './tateti/tateti.component';
import { PptComponent } from './ppt/ppt.component';
import { CuadradoComponent } from './tateti/cuadrado/cuadrado.component';



@NgModule({
  declarations: [
    JuegosComponent, 
    TatetiComponent, 
    PptComponent, 
    CuadradoComponent],
  imports: [
    CommonModule,
    JuegosRoutingModule
    
  ]
})
export class JuegosModule { }
