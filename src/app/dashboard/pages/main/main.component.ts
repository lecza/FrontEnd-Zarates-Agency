import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor( 
    private authService: AuthService,
    private router: Router
  ) {}

  // Getters
  get user() {
    return this.authService.user;
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl( '/' );
  }
}
