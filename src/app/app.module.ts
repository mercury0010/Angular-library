import { DatePipe, DecimalPipe } from '@angular/common';
import { HttpClient, HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/library/dashboard/dashboard.component';
import { ProfileComponent } from './components/library/profile/profile.component';
import { TokenInterceptorService } from './interceptors/token-interceptor.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EdituserComponent } from './components/library/edituser/edituser.component';
import { AddbookComponent } from './components/library/addbook/addbook.component';
import { BorrowbookComponent } from './components/library/borrowbook/borrowbook.component';
import { OwnedbookComponent } from './components/library/ownedbook/ownedbook.component';
import { EditbookComponent } from './components/library/editbook/editbook.component';
import { DeletebookComponent } from './components/library/deletebook/deletebook.component';
import { UserborrowbookComponent } from './components/library/userborrowbook/userborrowbook.component';
import { ReturnbookComponent } from './components/library/returnbook/returnbook.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    NavbarComponent,
    EdituserComponent,
    AddbookComponent,
    BorrowbookComponent,
    OwnedbookComponent,
    EditbookComponent,
    DeletebookComponent,
    UserborrowbookComponent,
    ReturnbookComponent,
    SearchComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientXsrfModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent,]
})
export class AppModule { }
