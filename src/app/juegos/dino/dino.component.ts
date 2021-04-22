import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dino',
  templateUrl: './dino.component.html',
  styleUrls: ['./dino.component.css']
})
export class DinoComponent implements OnInit {

  saltar:boolean=false
  isAlive:any;
  dino:any=document.getElementById('dino')
  cactus:any=document.getElementById('cactus')
  dinoTop:number
  cactusLeft:number
  colision:boolean=false;

  constructor() { }

  ngOnInit(): void {
    this.inicioJuego()
  }

  inicioJuego(){
    this.isAlive = setInterval(function (){
      this.dinoTop= parseInt(window.getComputedStyle(this.dino).getPropertyValue("top"))
      this.cactusLeft= parseInt(window.getComputedStyle(this.cactus).getPropertyValue("left"))

      if(this.cactusLeft < 50 && this.cactusLeft > 0 && this.dinoTop >= 140) {
        this.colision=true
        this.cactus.classList.remove('cactusmove')
        clearInterval(this.isAlive);
      }else{
        this.colision=false
      }
      console.log(this.colision)
      
    },10)
    clearInterval(this.isAlive);
  }
  
  pausarJuego(){
    clearInterval(this.isAlive);

  }


  jump() {
    if(!this.saltar){
      this.saltar=true
      this.counter++

      setTimeout(() => {
        this.saltar=false
      },
      500);
    }
  }

  counter = 0;
  @HostListener('window:keydown.space', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.jump()
  }
  
}
