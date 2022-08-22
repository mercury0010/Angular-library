import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { LibraryService } from 'src/app/services/library.service';




@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private auth: LibraryService,) { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    let authToken = localStorage.getItem("token");


    if (authToken) {
      /**headers: request.headers.set('X-CSRFToken', 'Bearer ' + authToken)**/
      request = request.clone({
        setHeaders: {
          Authorization: this.token(),
        }
      });
    }
    return next.handle(request);
  }
  token() {
    const t = _.get(this.auth.getToken(), ['token'], null);
    return `Token ${t}`;
  }

}