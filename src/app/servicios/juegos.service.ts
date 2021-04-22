import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Juego } from "./../clases/juego";

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  urlPeliculas=environment.urlPeliculas
  urlPaises=environment.urlPaises
  data:AngularFirestoreCollection<any>;
  dbpath:string='/juegos';
  juegos:Observable<Juego[]>;

  constructor(private db: AngularFirestore,
    private apiPeli:HttpClient,
    private apiPaises:HttpClient) {
    this.data=db.collection<any>(this.dbpath);
    this.juegos=this.data.valueChanges(this.dbpath);
  }
  getAllGames(){
    return this.juegos;
  }

  public obtenerPeliculas(){
    return this.apiPeli.get(this.urlPeliculas);
  }
  public obtenerPaises(){
    return this.apiPaises.get(this.urlPaises);
  }


}
