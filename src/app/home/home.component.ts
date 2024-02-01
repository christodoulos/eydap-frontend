import { Component, effect, inject } from '@angular/core';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { AuthService } from '../auth.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [GoogleSigninButtonModule, RouterLink, CommonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {
    title = 'eydap-frontend';
    authService = inject(AuthService);
    currentUser = this.authService.user;

    constructor() {
        effect(() => {
            console.log(this.currentUser());
        });
    }

    signOut() {
        this.authService.signOut();
    }
}
