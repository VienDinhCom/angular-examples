import { Injectable } from "@angular/core";
import { CoolStore } from "../libs/cool-store";
import { Todo } from "../interfaces/todo";

@Injectable({
  providedIn: "root"
})
export class TodosService {
  todosStore = new CoolStore<Todo[]>([]);

  constructor() {}

  get todos() {
    return this.todosStore.state;
  }

  get todosChanges() {
    return this.todosStore.stateChanges;
  }

  addTodo(todo: Todo) {
    this.todosStore.set(state => {
      state.push(todo);
    });
  }
}
