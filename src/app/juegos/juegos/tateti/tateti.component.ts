import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { JuegosService } from 'src/app/servicios/juegos.service';
import { ResultadosService } from 'src/app/servicios/resultados.service';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  
  cuadrados:any[];
  siguiente:boolean;
  ganador:string;
  juegoterminado:boolean=false;
  constructor(private authService:AuthService,
    private resultadosService:ResultadosService) { }

  ngOnInit(): void {
    this.newGame();
  }
  newGame(){
    this.cuadrados = Array(9).fill(null);
    this.ganador = null;
    this.siguiente = true;
    this.juegoterminado=false;
  }
  get player(){
    return this.siguiente ? 'X' : 'O';
  }
  hacerMovimiento(idx:number){

    if(!this.juegoterminado){
      if(!this.cuadrados[idx]){
        this.cuadrados.splice(idx,1,this.player);
        this.siguiente = !this.siguiente;
      }
      this.ganador = this.chequeaGanador();
      if(this.ganador != null){
        this.juegoterminado=true;
      }
    }
    
  }

  chequeaGanador(){
    const lineas = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i = 0;i< lineas.length;i++){
      const [a,b,c]= lineas[i];
      if(this.cuadrados[a] &&
        this.cuadrados[a] === this.cuadrados[b] &&
        this.cuadrados[a] === this.cuadrados[c]){

        this.authService.getCurrentUser().then(user => {
          //console.log(user.email)
        }) 
        console.log(localStorage.getItem('user'))
        this.resultadosService.guardarResultadoPartida(
          {juegador:this.cuadrados[a],
            juego:"TaTeTi",
            usuario:localStorage.getItem('user'),
            fecha: new Date()
          }
        )
        return this.cuadrados[a];
      }
    }
    return null;
  }

}
