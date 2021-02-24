import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.css'],
})
export class SidenavComponent {


  constructor(private router: Router) {
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}