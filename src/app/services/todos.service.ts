import { Injectable } from "@angular/core";
import { CoolStore } from "../libs/cool-store";
import { Todo } from "../interfaces/todo";

@Injectable({
  providedIn: "root"
})
export class TodosService {
  todos = new CoolStore<Todo[]>([]);

  constructor() {}
}
