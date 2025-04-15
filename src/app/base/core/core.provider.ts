import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideZoneChangeDetection } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  Routes,
  withPreloading,
} from '@angular/router';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MockService } from '@shared/mock/mock.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { provideSvgIcons } from '@ngneat/svg-icon';
import { appIcons } from '@shared/ui/icon/icons';

function provideTranslation() {
  return (
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (httpClient: HttpClient) => {
          return new TranslateHttpLoader(httpClient);
        },
        deps: [HttpClient],
      },
    }).providers || []
  );
}

function provideMockDb() {
  return (
    HttpClientInMemoryWebApiModule.forRoot(MockService, { delay: 500 })
      .providers || []
  );
}

export interface CoreOptions {
  routes: Routes;
}

export function provideCore(options: CoreOptions) {
  return [
    provideRouter(options.routes, withPreloading(PreloadAllModules)),
    provideHttpClient(withInterceptorsFromDi()),
    ...provideTranslation(),
    ...provideMockDb(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideSvgIcons([...appIcons]),
  ];
}
