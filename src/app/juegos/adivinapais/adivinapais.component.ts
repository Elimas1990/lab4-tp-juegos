import { Component, OnInit } from '@angular/core';
import { JuegosService } from 'src/app/servicios/juegos.service';

@Component({
  selector: 'app-adivinapais',
  templateUrl: './adivinapais.component.html',
  styleUrls: ['./adivinapais.component.css']
})
export class AdivinapaisComponent implements OnInit {

  listaPaises:any=[]
  opciones:any=[]
  banderaRandom:string
  nombreBanderaRandom:string
  puntosGanados:number=0

  constructor(private servicioPaises:JuegosService) { 
    servicioPaises.obtenerPaises().subscribe(pais =>{
      this.listaPaises=pais
    })
  }

  ngOnInit(): void {
  }
  empezarGame(){
    let random = Math.floor(Math.random() * this.listaPaises.length);
    this.banderaRandom=this.listaPaises[random].flag
    this.nombreBanderaRandom=this.listaPaises[random].translations.es
    for(let i=0;i<4;i++){
      let numrandom = Math.floor(Math.random() * this.listaPaises.length)
      let nombrerandom=this.listaPaises[numrandom].translations.es
      if(nombrerandom== ''){
        nombrerandom=this.listaPaises[numrandom].translations.es
      }
      if(nombrerandom == this.nombreBanderaRandom || nombrerandom==''){
        i--
      }else{
        this.opciones.push(nombrerandom)
      }
    }
    this.opciones.push(this.nombreBanderaRandom)
    this.opciones=this.shuffleArray(this.opciones);
    console.log(this.opciones)
    //this.opciones=[]
  }

  validarPais(nombre){
    this.opciones=[]
    if(nombre == this.nombreBanderaRandom){
      this.puntosGanados++;
      this.empezarGame()
    }else{
      
      this.puntosGanados=0
      this.opciones=[]
      this.banderaRandom=null
      this.nombreBanderaRandom=null
    }
  }

  shuffleArray(anArray: any[]): any[] {
    return anArray.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

}
