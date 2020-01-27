import { Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { ProductListPageComponent } from "./pages/product-pages/product-list-page/product-list-page.component";
import { ProductDetailPageComponent } from "./pages/product-pages/product-detail-page/product-detail-page.component";

export const appRoutes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "about", component: AboutPageComponent },
  {
    path: "products",
    component: ProductListPageComponent,
    children: [{ path: ":productId", component: ProductDetailPageComponent }]
  },
  { path: "404", component: ErrorPageComponent },
  { path: "**", redirectTo: "/404" }
];
