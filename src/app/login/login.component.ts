import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private router: Router) {
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }

  login() {
    this.username == 'admin' && this.password == 'admin' ? alert("Valid credentials") : alert("Invalid credentials");
  }
}
