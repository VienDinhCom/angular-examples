import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { appPageRoutes } from "./app-pages.routes";

import { MePageComponent } from "./me-page/me-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { RegisterPageComponent } from "./register-page/register-page.component";
import { AppPageComponent } from "./app-page/app-page.component";

@NgModule({
  declarations: [
    MePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    AppPageComponent
  ],
  imports: [CommonModule, RouterModule.forChild(appPageRoutes)]
})
export class AppPagesModule {}
