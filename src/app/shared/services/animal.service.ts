import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, take } from 'rxjs';

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

  getAnimal(id: string){
    return this.animalesCollection.doc(id).snapshotChanges().pipe(
      take(1), // Se toma solamente el primer valor
      map(d => d.payload.data())
    )
  }

  getAnimalCollection(){
    return this.database.collection('animales').valueChanges()
  }
  
  updateAnimal(id: string, data: any){
    return this.animalesCollection.doc(id).update(data)
  }

  deleteAnimal(id:string){
    return this.database.doc(`animales/${id}`).delete()
  }
}
