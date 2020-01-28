import { Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { ProductListPageComponent } from "./pages/product-list-page/product-list-page.component";
import { aboutData } from "./data/about.data";
import { ProductsResolver } from "./resolvers/products.resolver";

export const appRoutes: Routes = [
  { path: "", component: HomePageComponent },
  {
    path: "products",
    component: ProductListPageComponent,
    resolve: { products: ProductsResolver }
  },
  { path: "about", component: AboutPageComponent, data: aboutData },
  { path: "404", component: ErrorPageComponent },
  { path: "**", redirectTo: "/404" }
];
