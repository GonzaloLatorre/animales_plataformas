import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { UsuariosService } from '../shared/services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  data = {
    id: '',
    username: '',
    email: '',
    password: ''
  }
  msgContent!: string
  showMsg: boolean = false

  constructor(private authService: AuthService, private usuariosService: UsuariosService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authService.register(this.data.email, this.data.password)
    .then(user => {
      this.data.id = user.user!.uid
      this.usuariosService.createUser(this.data)
      this.msgContent = 'Se registro al usuario'
      this.showMsg = true
    })
    .catch(error => {
      this.msgContent = this.authService.firebaseErrors(error.code)
      this.showMsg = true
    })
  }
}
