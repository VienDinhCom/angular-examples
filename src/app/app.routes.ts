import { Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { ProductListPageComponent } from "./pages/product-list-page/product-list-page.component";

export const appRoutes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "products", component: ProductListPageComponent },
  { path: "about", component: AboutPageComponent },
  { path: "404", component: ErrorPageComponent },
  { path: "**", redirectTo: "/404" }
];
