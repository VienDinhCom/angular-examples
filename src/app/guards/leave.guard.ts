import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { Observable } from "rxjs";

export interface CanComponentDeactivate {
  canLeave: () => string;
}

@Injectable()
export class LeaveGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate) {
    if (component.canLeave) {
      const message = component.canLeave();
      return window.confirm(message);
    } else {
      return true;
    }
  }
}
