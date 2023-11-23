import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  data = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async onSubmit(){
    await this.authService.login(this.data.email, this.data.password)
    this.router.navigate(['/animales'])
  }
}
