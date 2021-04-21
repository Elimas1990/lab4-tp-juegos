import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Carta } from 'src/app/clases/carta';
import { JuegosService } from 'src/app/servicios/juegos.service';
import { RestartComponent } from './restart/restart.component';
import { map,filter } from "rxjs/operators";

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css'],
  
})



export class MemotestComponent implements OnInit {

  fondos:any=[]

  /*cardImages = ['https://image.tmdb.org/t/p/w500/tsqcwBp1jYZdcceXXoVEby0dZkt.jpg',
  'https://image.tmdb.org/t/p/w500/279yOM4OQREL36B3SECnRxoB4MZ.jpg',
  'https://image.tmdb.org/t/p/w500/9kg73Mg8WJKlB9Y2SAJzeDKAnuB.jpg',
  'https://image.tmdb.org/t/p/w500/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg',
  'https://image.tmdb.org/t/p/w500/4VlXER3FImHeFuUjBShFamhIp9M.jpg'
  ];*/
  cardImages:any[]=[]
  cards: Carta[] = [];
  flippedCards:Carta[]=[];
  matchedCount:number;
  dialog:any;


  constructor(private apiPeli:JuegosService) { 
    apiPeli.obtenerPeliculas()
    .subscribe(peli=> {
      this.fondos=peli["results"]
      this.fondos.forEach(element => {
        this.cardImages.push('https://image.tmdb.org/t/p/w500'+element["poster_path"])

      });
      this.setupCards();
    })
    console.log(this.cardImages)
    
  }

  ngOnInit(): void {
  }
  
  

  cardClicked(index: number): void {
    const cardInfo = this.cards[index];

    if (cardInfo.state === 'default' && this.flippedCards.length < 2)      
    {
      cardInfo.state = 'flipped';
      this.flippedCards.push(cardInfo);

      if (this.flippedCards.length === 2) {
        this.checkForCardMatch();
     }

    } else if (cardInfo.state === 'flipped') {
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

        if (this.matchedCount === this.cardImages.length) {
          const dialogRef = this.dialog.open(RestartComponent, {
            disableClose: true
          });

          dialogRef.afterClosed().subscribe(() => {
            this.restart();
          });
        }
      }

    }, 1000);
  }

  restart(): void {
    this.matchedCount = 0;
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
