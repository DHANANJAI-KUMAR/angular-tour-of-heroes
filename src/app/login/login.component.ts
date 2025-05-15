import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../share-service/auth.service';
import { UserService } from '../share-service/user.service';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthService, 
    private userService: UserService, 
    private router: Router) {

  }


  login() {
    

    this.userService.isLoggedIn('user1', 'password1').subscribe({
       next: (response : boolean) => { 
        console.log('Login successful:', response);
       },
       error: (error: any) => {
        console.error('Login failed:', error);
      }
    });

    this.authService.login();
    this.router.navigate(['/dashboard']);
  }
}
