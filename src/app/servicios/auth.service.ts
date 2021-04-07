import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuario:string;

  private dbpath='/usuarios';
  mensajesRef:AngularFirestoreCollection<any>;
  users: Observable<Usuario[]>

  constructor(private db: AngularFirestore) { 
    this.mensajesRef=db.collection<Usuario>(this.dbpath)
    this.users = this.mensajesRef.valueChanges()
  }

  getAll(){

    return this.users;
  }
  
  create(mensaje:any):any{
    return this.mensajesRef.add({...mensaje});

  }
}
