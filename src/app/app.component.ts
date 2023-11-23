import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user: any

  constructor(private authService: AuthService, private router: Router) {
    this.authService.user.subscribe(user => this.user = user)
  }

  cerrarSesion(){
    this.authService.logout()
    .then(() => {
      alert('Se cerro la sesión')
      this.router.navigate(['/login'])
    })
  }
}
