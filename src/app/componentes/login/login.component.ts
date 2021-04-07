import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser,faLock } from '@fortawesome/free-solid-svg-icons';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faUser = faUser;
  faLock = faLock;
  userLogueado= new Usuario
  errorUsuario=false;
  users:any
  constructor(private authService:AuthService,
    private route:Router) {
    this.authService.getAll().subscribe(user => {
      this.users=user
    });
   }

  ngOnInit(): void {
  }
  loginUsuario(){
    let buscado= this.users.find(user => {
      return user.id === this.userLogueado.id
    })
    if(buscado === null || buscado === undefined){
      this.errorUsuario=true
    }else{
      if(buscado.pass == this.userLogueado.pass){
        this.authService.usuario=this.userLogueado.id
        console.log(this.authService.usuario)
        this.errorUsuario=false
        this.route.navigate([''])
      }else{
        this.errorUsuario=true
      }
    }
  }

}
