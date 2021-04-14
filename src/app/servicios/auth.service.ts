import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection} from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';
import { first } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuario:string;

  private dbpath='/usuarios';
  mensajesRef:AngularFirestoreCollection<any>;
  users: Observable<Usuario[]>

  constructor(private db: AngularFirestore,
    public auth: AngularFireAuth) { 
    this.mensajesRef=db.collection<any>(this.dbpath)
    this.users = this.mensajesRef.valueChanges()
  }

  async login(email:string,pass:string){
    try{
      const result= await this.auth.signInWithEmailAndPassword(email,pass);
      return result;
    }
    catch (error){
      console.log(console.error()
      )
    }

  }
  async register(email:string,pass:string){
    try{
      const result= await this.auth.createUserWithEmailAndPassword(email,pass);
      return result;
    }
    catch (error){
      console.log(console.error()
      )
    }
    
  }
  async logout(){
    try{
      await this.auth.signOut();
    }
    catch (error){
      console.log(console.error()
      )
    }
    
  }
  async getCurrentUser(){
    return this.auth.authState.pipe(first()).toPromise();
  }
  getAll(){
    return this.users;
  }
  
  create(mensaje:any):any{
    return this.mensajesRef.add({...mensaje});

  }
}
