import { Injectable } from "@angular/core";
import { CoolStore } from "../libs/cool-store";
import { Todo } from "../interfaces/todo";

@Injectable({
  providedIn: "root"
})
export class TodosService extends CoolStore<Todo[]> {
  constructor() {
    super([]);
  }
}
