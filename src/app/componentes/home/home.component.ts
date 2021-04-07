import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title:string="Sala de Juegos";
  mensaje:any;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  enviarMensaje(){
    console.log("entro a enviarmensaje")
    this.authService.create(this.mensaje)
  }

}
