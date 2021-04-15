import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  data:AngularFirestoreCollection<any>;
  dbpath:string='/chat';
  mensajes:Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.data=db.collection<any>(this.dbpath, ref => ref.orderBy('hora'));
    this.mensajes=this.data.valueChanges(this.dbpath);
  }
  getAllChat(){
    return this.mensajes;
  }
  guardarMensaje(mensajes:any):any{
    return this.data.add({...mensajes});

  }
}
