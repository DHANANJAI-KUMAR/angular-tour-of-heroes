import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptor, GlobalHttpErrorInterceptor, LoadingInterceptor, LoggingInterceptor } from './interceptor/all-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()), 
    provideHttpClient(withInterceptorsFromDi()),
     { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, 
     { provide: HTTP_INTERCEPTORS, useClass: GlobalHttpErrorInterceptor, multi: true }, 
     { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
     { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
  ]
};


