import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from "@angular/common/http";
import { AuthService } from "../services/auth.service";

// https://angular-academy.com/angular-jwt/

const API_KEY = "AIzaSyC_RmXfIE444YaggT8pHaIpVdqwiDKoDm4";

@Injectable()
export class ConfigInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const nextRequest = request.clone({
      setParams: {
        key: API_KEY
      }
    });

    return next.handle(nextRequest);
  }
}
