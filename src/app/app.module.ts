import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from "./material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from "./core/app.routing.module";
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SpinnerComponent } from './spinner/spinner.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    TableComponent,
    AppComponent,
    SidenavComponent,
    UserComponent,
    LoginComponent,
    ContactComponent,
    AboutComponent,
    SpinnerComponent,
    ExpansionComponent,
    SnackbarComponent
  ],
  imports: [
    MatSortModule,
    MatTabsModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatTableModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatNativeDateModule,
    MatIconModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatSnackBarModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }