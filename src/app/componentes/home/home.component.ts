import { Component, OnInit } from '@angular/core';
import { Mensajechat } from 'src/app/clases/mensajechat';
import { ChatService } from 'src/app/servicios/chat.service';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title="Sala de Juegos"
  
  
  constructor() {
   
    
  }
  
  ngOnInit(): void {
  }


}
