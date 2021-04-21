import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Carta } from 'src/app/clases/carta';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      state('matched', style({
        display:'none'
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => matched', [
        animate('400ms',style({transform: 'scale(-1)'}))
      ]),
      transition('flipped => default', [
        animate('200ms')
      ])
    ])
  ]
})
export class CartaComponent implements OnInit {

  sevolteo:boolean=false;

  @Input() data: Carta;

  @Output() cardClicked = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }

  /*cartaSeleccionada(){
    if (this.data.state === "default") {
      this.data.state = "flipped";
    } else {
      this.data.state = "default";
    }
    this.sevolteo=true
    this.cardClicked.emit(this.data)
    
  }*/
  
  

}
