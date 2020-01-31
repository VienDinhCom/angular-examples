import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse
} from "@angular/common/http";
import { AuthService } from "../services/auth.service";
import { throwError } from "rxjs";
import { catchError, switchMap, retry } from "rxjs/operators";

// https://angular-academy.com/angular-jwt/

const API_KEY = "AIzaSyC_RmXfIE444YaggT8pHaIpVdqwiDKoDm4";

@Injectable()
export class ConfigInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    request = request.clone({
      setParams: {
        key: API_KEY
      }
    });

    return next.handle(request).pipe(
      retry(1),
      catchError(error => {
        if (error instanceof HttpErrorResponse && error.status === 400) {
          return this.refreshToken(request, next);
        } else {
          return throwError(error);
        }
      })
    );
  }

  refreshToken(request: HttpRequest<any>, next: HttpHandler) {
    return this.authService.refreshToken().pipe(
      switchMap(tokens => {
        console.log({ tokens });
        return next.handle(request);
      })
    );
  }
}
