import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const { idToken, refreshToken } = this.authService.getToken();
    let nextReq = req.clone();

    if (idToken) {
      nextReq = req.clone({
        setParams: {
          idToken
        }
      });
    }

    return next.handle(nextReq);
  }
}
