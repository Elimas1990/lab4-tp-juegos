import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/clases/juego';
import { JuegosService } from 'src/app/servicios/juegos.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {
  listajuegos:any
  constructor(private juegosService:JuegosService) {
    this.juegosService.getAllGames().subscribe(juegos => {
      this.listajuegos=juegos
    })
  }

  ngOnInit(): void {
  }

}
