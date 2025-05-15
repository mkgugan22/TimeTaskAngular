import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { TimeComponent } from './app/app.component';

bootstrapApplication(TimeComponent, appConfig)
  .catch((err) => console.error(err));
