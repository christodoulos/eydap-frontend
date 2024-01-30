import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { Component, effect, inject } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GoogleSigninButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
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
