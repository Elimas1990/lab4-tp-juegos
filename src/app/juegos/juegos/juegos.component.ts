import { Component, OnInit } from '@angular/core';
import { faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import { JuegosService } from 'src/app/servicios/juegos.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {
  listajuegos:any
  faPlayCircle=faPlayCircle
  constructor(private juegosService:JuegosService) {
    this.juegosService.getAllGames().subscribe(juegos => {
      this.listajuegos=juegos
    })
  }

  ngOnInit(): void {
  }

}
