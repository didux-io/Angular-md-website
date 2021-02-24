import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'client';
  param = {value: 'world'};

  constructor(private router: Router, translate: TranslateService) {
    translate.setDefaultLang('nl');

    translate.use('nl');
   }

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}
