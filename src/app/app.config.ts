import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  GoogleLoginProvider,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { provideHttpClient, withFetch } from '@angular/common/http';

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
    provideHttpClient(withFetch()),
  ],
};
