import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private usuariosCollection: AngularFirestoreCollection<any>

  constructor(private database: AngularFirestore) {
    this.usuariosCollection = this.database.collection<any>('usuarios')
  }

  async createUser(data: any){
    await this.usuariosCollection.doc(data.id).set(data)
  }
}
