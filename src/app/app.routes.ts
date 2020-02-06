import { Routes } from "@angular/router";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { PostsPageComponent } from "./pages/posts-page/posts-page.component";

export const appRoutes: Routes = [
  { path: "", component: PostsPageComponent },
  { path: "404", component: ErrorPageComponent },
  { path: "**", redirectTo: "/404" }
];
