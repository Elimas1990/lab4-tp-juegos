import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Carta } from 'src/app/clases/carta';
import { JuegosService } from 'src/app/servicios/juegos.service';
import { ResultadosService } from 'src/app/servicios/resultados.service';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css'],
  
})



export class MemotestComponent implements OnInit {

  fondos:any=[]

  cardImages:any[]=[]
  cards: Carta[] = [];
  flippedCards:Carta[]=[];
  matchedCount:number=0;
  dialog:any;
  volteos=0;
  cantidadCartas:number=5;
  restartBtn:boolean=false;


  constructor(private apiPeli:JuegosService,
    private resultadosService:ResultadosService) { 
    apiPeli.obtenerPeliculas()
    .subscribe(peli=> {
      this.fondos=peli["results"]
      let indexCartas=0
      this.fondos.forEach(element => {
        if(indexCartas < this.cantidadCartas){
          this.cardImages.push('https://image.tmdb.org/t/p/w500'+element["poster_path"])
        }
        indexCartas++
      });
      this.setupCards();
    })    
  }

  ngOnInit(): void {
  }
  
  

  cardClicked(index: number): void {

    const cardInfo = this.cards[index];
    this.volteos++;

    if (cardInfo.state === 'default' && this.flippedCards.length < 2){
      cardInfo.state = 'flipped';
      this.flippedCards.push(cardInfo);

      if (this.flippedCards.length === 2) {
        this.checkForCardMatch();
      }
    }else if (cardInfo.state === 'flipped') {
      cardInfo.state = 'default';
      this.flippedCards.pop();
    }
  }

  checkForCardMatch(): void {
    setTimeout(() => {
      const cardOne = this.flippedCards[0];
      const cardTwo = this.flippedCards[1];
      const nextState = cardOne.imageId === cardTwo.imageId ? 'matched' : 'default';
      cardOne.state = cardTwo.state = nextState;
      
      this.flippedCards = [];

      if (nextState === 'matched') {
        this.matchedCount++;
        console.log(this.matchedCount)
        if (this.matchedCount === this.cantidadCartas) {
          this.restartBtn=true
          let resultado={
            usuario:localStorage.getItem('user'),
            fecha: new Date,
            juego:'Memotest',
            volteos:this.volteos
          }
          this.resultadosService.guardarResultadoPartida(resultado)
        }
      }

    }, 1000);
  }

  restart(): void {
    this.matchedCount = 0;
    this.volteos = 0;
    this.restartBtn=false
    this.setupCards();
}

  setupCards(): void {
      this.cards = [];
      this.cardImages.forEach((image) => {
        const cardData: Carta = {
          imageId: image,
          state: 'default'
        };

        this.cards.push({ ...cardData });
        this.cards.push({ ...cardData });

      });

      this.cards = this.shuffleArray(this.cards);
  }
  
  shuffleArray(anArray: any[]): any[] {
    return anArray.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

}
