import { Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";

export const appRoutes: Routes = [
  { path: "", component: HomePageComponent },
  {
    path: "about",
    component: AboutPageComponent
  },
  {
    path: "contact",
    component: ContactPageComponent
  },
  { path: "**", component: ErrorPageComponent }
];
