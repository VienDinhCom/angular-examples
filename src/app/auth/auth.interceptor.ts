import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from "@angular/common/http";
import { AuthService } from "./auth.service";

// https://angular-academy.com/angular-jwt/

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request);
  }
}
