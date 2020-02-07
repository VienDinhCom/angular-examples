import { Request } from "express";
import { cookieMaker, Cookie, CookieAttributes } from "cookie-maker";
import { isPlatformBrowser, isPlatformServer } from "@angular/common";
import { REQUEST, RESPONSE } from "@nguniversal/express-engine/tokens";
import { Injectable, PLATFORM_ID, Inject, Optional } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UniversalService {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Optional() @Inject(REQUEST) private request: Request,
    @Optional() @Inject(RESPONSE) private response: Request
  ) {}

  get isBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  get isServer() {
    return isPlatformServer(this.platformId);
  }

  get cookie() {
    return {
      set: (
        name: string,
        value: string | object,
        options?: CookieAttributes
      ) => {
        if (this.isBrowser) cookieMaker.set(name, value, options);
      },
      remove: (name: string, options?: CookieAttributes) => {
        if (this.isBrowser) cookieMaker.remove(name, options);
      },
      get: (name?: string) => {
        let cookie: Cookie;

        if (this.isBrowser) {
          cookie = cookieMaker.parse(document.cookie);
        }

        if (this.isServer) {
          cookie = cookieMaker.parse(<string>this.request.headers.cookie);
        }

        return name === undefined ? cookie : cookie[name];
      }
    };
  }
}
