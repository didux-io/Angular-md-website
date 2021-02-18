import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { LoginComponent } from '../login/login.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { ExpansionComponent } from '../expansion/expansion.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { TableComponent } from '../table/table.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'snackbar', component: SnackbarComponent },
  { path: 'spinner', component: SpinnerComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'expansion', component: ExpansionComponent },
  { path: 'table', component: TableComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }