import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Juego } from "./../clases/juego";

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  data:AngularFirestoreCollection<any>;
  dbpath:string='/juegos';
  juegos:Observable<Juego[]>;

  constructor(private db: AngularFirestore,) {
    this.data=db.collection<any>(this.dbpath);
    this.juegos=this.data.valueChanges(this.dbpath);
  }
  getAllGames(){
    return this.juegos;
  }
}
