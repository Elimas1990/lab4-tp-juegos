import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';


import { CuadradoComponent } from './tateti/cuadrado/cuadrado.component';
import { GeneralModule } from 'src/app/general/general.module';
import { TatetiComponent } from './tateti/tateti.component';
import { PptComponent } from './ppt/ppt.component';
import { JuegosComponent } from './juegos.component';
import { MemotestComponent } from './memotest/memotest.component';
import { CartaComponent } from './memotest/carta/carta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestartComponent } from './memotest/restart/restart.component';



@NgModule({
  declarations: [
    JuegosComponent, 
    TatetiComponent, 
    PptComponent, 
    CuadradoComponent, 
    MemotestComponent, CartaComponent, RestartComponent],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    GeneralModule
  ]

})
export class JuegosModule { }
