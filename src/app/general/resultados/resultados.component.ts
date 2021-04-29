import { Component, OnInit } from '@angular/core';
import { ResultadosService } from 'src/app/servicios/resultados.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  listaResultados=[]
  constructor(private resultadosService:ResultadosService) {
    resultadosService.getAllResults().subscribe(resultados => {
      this.listaResultados=resultados
    })
  }

  ngOnInit(): void {
    
  }

}
