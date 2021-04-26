import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncuestasService {

  data:AngularFirestoreCollection<any>;
  dbpath:string='/encuestas';
  encuestas:Observable<any[]>;

  constructor(private db: AngularFirestore,) {
    this.data=db.collection<any>(this.dbpath);
    this.encuestas=this.data.valueChanges(this.dbpath);
  }
  getAllEncuestas(){
    return this.encuestas;
  }
  guardarEncuesta(resultado:any):any{
    return this.data.add({...resultado});

  }
}
