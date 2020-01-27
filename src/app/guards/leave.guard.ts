import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";

export interface CanComponentDeactivate {
  canLeave: () => string;
}

@Injectable()
export class LeaveGuard implements CanDeactivate<CanComponentDeactivate> {
  //  Có cho ra hay không?
  canDeactivate(component: CanComponentDeactivate) {
    if (component.canLeave) {
      const message = component.canLeave();
      return window.confirm(message);
    } else {
      return true;
    }
  }
}
