import { Component, Input, OnInit } from '@angular/core';
import { Mensajechat } from 'src/app/clases/mensajechat';
import { ChatService } from 'src/app/servicios/chat.service';
import { faCommentAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  faComment=faCommentAlt
  @Input() chatActivo:boolean=true;
  title="Sala de Juegos"
  chat:any;
  usuarioInteractura=localStorage.getItem('user')
  mensajeGuardar= new Mensajechat;

  constructor(private chatService:ChatService) {
    this.chatService.getAllChat().subscribe(chat =>{
      
      this.chat=chat;
    })
  }
  
  ngOnInit(): void {
    
  }
  ngOnChange(){
    this.usuarioInteractura=localStorage.getItem('user')
  }

  enviarMensaje(){


    this.mensajeGuardar.hora= new Date
    this.mensajeGuardar.usuario=localStorage.getItem('user')

    this.chatService.guardarMensaje(this.mensajeGuardar )
    this.mensajeGuardar.comentario=null
  }

}
