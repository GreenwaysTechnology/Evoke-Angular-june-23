import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//platformBrowserDynamic() method returns "PlatformRef" object
//PlatformRefObject has method called "bootStrapModule"
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
