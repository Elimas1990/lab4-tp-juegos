import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  registerForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    passUno:new FormControl('',[Validators.required,Validators.minLength(6)]),
    passDos:new FormControl('',[Validators.required,Validators.minLength(6)])
  })
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
          this.User={
            id:this.registerForm.value.email,
            pass:this.registerForm.value.passUno
          }
          this.errorUsuario=false;
          this.authService.register(this.User.id,this.User.pass)
          localStorage.setItem('user',this.User.id)
          this.route.navigate([''])
      }
    }
    catch(error){
      console.log(error)
    }

  }
}
