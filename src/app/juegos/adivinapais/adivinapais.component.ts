import { Component, OnInit } from '@angular/core';
import { JuegosService } from 'src/app/servicios/juegos.service';
import { ResultadosService } from 'src/app/servicios/resultados.service';

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
  ultimoPuntaje:number=0
  correcion:boolean=false;
  comienzaGame:boolean=false;
  mensaje:boolean=false;

  constructor(private servicioPaises:JuegosService,
    private resultadosService:ResultadosService) { 
    servicioPaises.obtenerPaises().subscribe(pais =>{
      this.listaPaises=pais
    })
  }

  ngOnInit(): void {
  }
  empezarGame(){
    this.comienzaGame=true
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
    console.log(this.banderaRandom)
    console.log(this.nombreBanderaRandom)
 
  }

  validarPais(nombre){
    this.opciones=[]
    this.mensaje=true;
    if(nombre == this.nombreBanderaRandom){
      this.puntosGanados++;
      this.correcion=true;
      
      setTimeout(() => {
        this.mensaje=false;
        this.empezarGame()
      }, 3000);
      this.correcion=true;
    }else{

     
      this.ultimoPuntaje=this.puntosGanados
      this.resultadosService.guardarResultadoPartida({
        puntos:this.ultimoPuntaje,
        juego:"Adivina el Pais",
        usuario:localStorage.getItem('user'),
        fecha: new Date()
      })
      this.puntosGanados=0
      this.opciones=[]
      this.banderaRandom=null
      this.nombreBanderaRandom=null
      this.correcion=false;
      setTimeout(() => {
        this.mensaje=false;
        this.comienzaGame=false;
      }, 5000);
    }
  }

  shuffleArray(anArray: any[]): any[] {
    return anArray.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

}
