import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEnvelope,faLock } from '@fortawesome/free-solid-svg-icons';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  faEnvelope = faEnvelope;
  faLock = faLock;
  iduser:string;
  pass:string;
  passr:string;
  errorUsuario=false;
  User= new Usuario
  users:any

  constructor(private authService:AuthService,
    private route:Router) { 
    this.authService.getAll().subscribe(user => {
      this.users=user
    });

  }
  
  ngOnInit(): void {
  }
  async guardarUsuario(){
    try{
      if(this.pass != this.passr){
        console.log("Contraseñas ingresadas no coinciden")
        this.errorUsuario=true;
      }else{
          this.errorUsuario=false;
          this.User={id:this.iduser,pass:this.pass}
          this.authService.register(this.User.id,this.User.pass)
          this.route.navigate([''])
      }
    }
    catch(error){
      console.log(error)
    }
    
    
    /*
    if(this.pass != this.passr){
      console.log("Contraseñas ingresadas no coinciden")
      this.errorUsuario=true;
    }else{
      let buscado= this.users.find(user => {
        return user.id === this.iduser
      })
      if(buscado === null || buscado === undefined){
        this.errorUsuario=false;
        this.User.id=this.iduser
        this.User.pass=this.pass
        this.authService.create(this.User)
        this.authService.usuario=this.iduser
        this.route.navigate([''])
        this.errorUsuario=true
      }else{
        this.errorUsuario=true
      }
    }*/

  }
}
