import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expansion',
  templateUrl: 'expansion.component.html',
  styleUrls: ['expansion.component.css'],
})
export class ExpansionComponent {
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;

  constructor(private router: Router) {
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}