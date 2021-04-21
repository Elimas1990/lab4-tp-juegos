import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private juegosService:JuegosService,
    private route:Router) {
    if(!localStorage.getItem('user')){
      console.log(localStorage.getItem('user'))
      this.route.navigate['']
    }
    
    this.juegosService.getAllGames().subscribe(juegos => {
      this.listajuegos=juegos
    })
  }

  ngOnInit(): void {
  }

}
