import { Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { PostListPageComponent } from "./pages/post-list-page/post-list-page.component";

export const appRoutes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "about", component: AboutPageComponent },
  { path: "posts", component: PostListPageComponent },
  { path: "404", component: ErrorPageComponent },
  { path: "**", redirectTo: "/404" }
];
