import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  register(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email, password)
  }

  login(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  logout(){
    return this.auth.signOut()
  }

  get user(){
    return this.auth.authState
  }

  firebaseErrors(error: string): string{
    switch (error) {
      case 'auth/invalid-email':
        return 'Email invalido'
      case 'auth/user-not-found':
        return 'El usuario no existe'
      case 'auth/wrong-password':
        return 'Contraseña incorrecta'
      case 'auth/email-already-in-use':
        return 'El usuario ya existe'
      case 'auth/missing-password':
        return 'La contraseña es requerida'
      case 'auth/weak-password':
        return 'La contraseña es débil se requieren mínimo 6 carácteres'
      default:
        return 'Error desconocido';
    }
  }
}
