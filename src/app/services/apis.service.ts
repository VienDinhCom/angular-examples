import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from "@angular/common/http";

export class ApisService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const nextReq = req.clone({
      url: "http://localhost:3000" + req.url
    });

    return next.handle(nextReq);
  }
}
