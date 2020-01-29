import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { homeRoutes } from './home.routes';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';

@NgModule({
  declarations: [HomePageComponent, AboutPageComponent, HomeLayoutComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(homeRoutes)]
})
export class HomeModule {}
