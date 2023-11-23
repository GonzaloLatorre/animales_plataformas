import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router) {}

  cerrarSesion(){
    this.authService.logout()
    .then(() => {
      alert('Se cerro la sesión')
      this.router.navigate(['/login'])
    })
  }
}
