import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { appRoutes } from "./app.routes";
import { RouterModule } from "@angular/router";
import { ProductListPageComponent } from "./pages/product-list-page/product-list-page.component";
import { ProductsResolver } from "./resolvers/products.resolver";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ErrorPageComponent,
    AboutPageComponent,
    ProductListPageComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [ProductsResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}
