import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './components/library/addbook/addbook.component';
import { BorrowbookComponent } from './components/library/borrowbook/borrowbook.component';
import { DashboardComponent } from './components/library/dashboard/dashboard.component';
import { DeletebookComponent } from './components/library/deletebook/deletebook.component';
import { EditbookComponent } from './components/library/editbook/editbook.component';
import { EdituserComponent } from './components/library/edituser/edituser.component';
import { OwnedbookComponent } from './components/library/ownedbook/ownedbook.component';
import { ProfileComponent } from './components/library/profile/profile.component';
import { ReturnbookComponent } from './components/library/returnbook/returnbook.component';
import { UserborrowbookComponent } from './components/library/userborrowbook/userborrowbook.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: 'login', component: RegisterComponent },
  { path: '', component: LoginComponent },

  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'edit', component: EdituserComponent },

  { path: 'AddBook', component: AddbookComponent },
  { path: 'OwnBook', component: OwnedbookComponent },
  { path: 'profile/EditBook/:id', component: EditbookComponent },
  { path: 'profile/DeleteBook/:id', component: DeletebookComponent },
  { path: 'dashboard/BorrowBook/:id/:ids', component: BorrowbookComponent },
  { path: 'dashboard/BorrowBook/:id/:ids', component: BorrowbookComponent },
  { path: 'userBorrowed', component: UserborrowbookComponent },
  { path: 'profile/returnBorrowed/:id/:ids', component: ReturnbookComponent },
  { path: 'search/:id', component: SearchComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
