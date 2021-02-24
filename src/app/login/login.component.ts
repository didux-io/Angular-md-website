import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username!: string;
  password!: string;

  login(): void {
    this.username === 'test' && this.password === 'test' ? alert('Valid credentials') : alert('Invalid credentials');
  }
}
