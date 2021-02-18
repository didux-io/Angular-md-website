import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spinner',
  templateUrl: 'spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {

  constructor(private router: Router) {
  }


  navigate(route: string) {
    this.router.navigate([route]);
  }
}