import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';

import { routes } from './app.routes';
import {
  GoogleLoginProvider,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { environment } from '../environments/environment';

export function tokenGetter() {
  return localStorage.getItem('accessToken');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '503881624899-7335rgpn7abu249ocar66cda3q5i97nn.apps.googleusercontent.com'
            ),
          },
        ],
        onError: (err: any) => {
          console.log(err);
        },
      } as SocialAuthServiceConfig,
    },
    importProvidersFrom(
      JwtModule.forRoot({
        config: {
          tokenGetter,
          allowedDomains: [environment.apiUrl],
          //   disallowedRoutes: [`${environment.apiUrl}/auth`],
        },
      })
    ),
    provideHttpClient(withInterceptorsFromDi()),
  ],
};
