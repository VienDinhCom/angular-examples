import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { routes } from './app.routes';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
