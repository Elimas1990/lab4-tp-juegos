import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faEnvelope,faLock } from '@fortawesome/free-solid-svg-icons';
import { EncuestasService } from 'src/app/servicios/encuestas.service';
import { JuegosService } from 'src/app/servicios/juegos.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  faEnvelope = faEnvelope;
  faLock = faLock;

  errorUsuario=false;
  listaJuegos:any[]=[]


  formEncuesta:FormGroup= new FormGroup({
    nombre:new FormControl('',[Validators.required]),
    apellido:new FormControl('',[Validators.required]),
    edad:new FormControl('',[Validators.required,Validators.min(18),Validators.max(99)]),
    telefono:new FormControl('',[Validators.required,Validators.max(9999999999)]),
    favorito:new FormControl('',[Validators.required]),
    comodo:new FormControl('',[Validators.required]),
    agregarias:new FormControl('',[Validators.required,Validators.minLength(8)]),
  })
  constructor(private juegoService:JuegosService,
    private encuestaService:EncuestasService) { 
    juegoService.getAllGames().subscribe(juegos =>{
      this.listaJuegos=juegos
      this.listaJuegos.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1)
    })
  }

  ngOnInit(): void {
  }

  guardarEncuesta(){
    const encuesta=this.formEncuesta.getRawValue()
    encuesta.usuario=localStorage.getItem('user')
    this.encuestaService.guardarEncuesta(encuesta)
    this.formEncuesta.reset()
    /*try{
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
    }*/

  }
}
