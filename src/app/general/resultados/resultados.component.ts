import { Component, OnInit } from '@angular/core';
import { ResultadosService } from 'src/app/servicios/resultados.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  dtOptions: DataTables.Settings = {
    paging: false,
    info: false,
    language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
    }
  }
  render:boolean=false
  listaResultados=[]
  constructor(private resultadosService:ResultadosService) {
    resultadosService.getAllResults().subscribe(resultados => {
      this.listaResultados=resultados
      this.render=true
    })
  }

  ngOnInit(): void {

  }

}
