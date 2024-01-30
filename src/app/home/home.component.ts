import { Component, effect, inject } from '@angular/core';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { AuthService } from '../auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GoogleSigninButtonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'eydap-frontend';
  authService = inject(AuthService);
  isLoggedIn = this.authService.isLoggedIn;
  user = this.authService.user;

  constructor() {
    effect(() => {
      console.log(this.isLoggedIn(), this.user());
    });
  }

  signOut() {
    this.authService.signOut();
  }
}
