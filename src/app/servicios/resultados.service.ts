import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  data:AngularFirestoreCollection<any>;
  dbpath:string='/resultados';
  resultados:Observable<any[]>;

  constructor(private db: AngularFirestore,) {
    this.data=db.collection<any>(this.dbpath);
    this.resultados=this.data.valueChanges(this.dbpath);
  }
  getAllResults(){
    return this.resultados;
  }
  guardarResultadoPartida(resultado:any):any{
    return this.data.add({...resultado});

  }
}
