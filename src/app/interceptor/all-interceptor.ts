import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, finalize, Observable, tap, throwError } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = 'Bearer YOUR_TOKEN_HERE'; // Replace with token logic
    const authReq = req.clone({
      setHeaders: {
        Authorization: authToken
      }
    });
    return next.handle(authReq);
  }
}


@Injectable()
export class GlobalHttpErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle error globally
        console.error('HTTP error occurred:', error.message);

        // Optional: show user message, redirect, etc.

        return throwError(() => error); // rethrow the error
      })
    );
  }
}


@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('HTTP Request:', req);
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          console.log('HTTP Response:', event);
        }
      })
    );
  }
}


@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Show spinner
    console.log('Loading started...');
    return next.handle(req).pipe(
      finalize(() => {
        // Hide spinner
        console.log('Loading finished.');
      })
    );
  }
}