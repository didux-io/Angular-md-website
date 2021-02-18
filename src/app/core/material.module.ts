import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [MatTabsModule, CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule, MatSnackBarModule, MatExpansionModule, MatMenuModule, MatSidenavModule, DragDropModule, CdkTableModule],
  exports: [MatTabsModule, CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule, MatSnackBarModule, MatExpansionModule, MatMenuModule, MatSidenavModule, DragDropModule, CdkTableModule],
})
export class CustomMaterialModule { }