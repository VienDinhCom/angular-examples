import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./home-page/home-page.component";
import { RouterModule } from "@angular/router";
import { rootPageRoutes } from "./root-pages.routes";
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  declarations: [HomePageComponent, AboutPageComponent],
  imports: [CommonModule, RouterModule.forChild(rootPageRoutes)]
})
export class RootPagesModule {}
