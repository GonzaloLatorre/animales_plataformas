import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private animalesCollection: AngularFirestoreCollection<any>

  constructor(private database: AngularFirestore) {
    this.animalesCollection = this.database.collection<any>('animales')
  }

  async createAnimal(data: any){
    let id = this.database.createId()

    await this.animalesCollection.doc(id).set({id, ...data})
  }
}
