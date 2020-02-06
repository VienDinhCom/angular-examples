import { Request } from "express";
import { REQUEST } from "@nguniversal/express-engine/tokens";
import { isPlatformBrowser, isPlatformServer } from "@angular/common";
import { Injectable, PLATFORM_ID, Inject, Optional } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UniversalService {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Optional() @Inject(REQUEST) private request: Request
  ) {}

  isBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  isServer() {
    return isPlatformServer(this.platformId);
  }

  getRequest() {
    return this.request;
  }
}
