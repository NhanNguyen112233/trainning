import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Route, Routes } from '@angular/router';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

function provideTranslation() {
  return (
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (httpClient: HttpClient) => {
          console.log('http', httpClient);

          return new TranslateHttpLoader(httpClient);
        },
        deps: [HttpClient],
      },
    })?.providers ?? []
  );
}

export interface CoreOptions {
  routes: Routes;
}
export function provideCore(options: CoreOptions) {
  return [
    provideRouter(options.routes),
    provideHttpClient(),
    ...provideTranslation(),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ];
}
