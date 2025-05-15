import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  data: any; // Define the type of data if known
  constructor(private http: HttpClient) {

  }

  isLoggedIn(user1: string, password1: string ): Observable<boolean> {
    return this.http.get<boolean>('https://api.example.com/isLoggedIn') as Observable<boolean>;
  }


  getData(): void {
    this.http.get('https://api.example.com/data').subscribe(response => {
      this.data = response;
    });
  }

}
