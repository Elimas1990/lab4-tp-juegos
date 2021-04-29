import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { ResultadosComponent } from './resultados/resultados.component';




@NgModule({
  declarations: [ChatComponent, EncuestaComponent, ResultadosComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[ChatComponent],
  providers:[]
})
export class GeneralModule { }
