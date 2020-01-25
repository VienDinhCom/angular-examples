import { Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { ProductsPageComponent } from "./pages/products-page/products-page.component";
import { ProductPageComponent } from "./pages/product-page/product-page.component";

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
  {
    path: "products",
    component: ProductsPageComponent
  },
  {
    path: "products/:id",
    component: ProductPageComponent
  },
  { path: "404", component: ErrorPageComponent },
  { path: "**", redirectTo: "/404" }
];
