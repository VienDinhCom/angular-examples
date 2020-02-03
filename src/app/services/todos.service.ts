import { generate } from "shortid";
import { Injectable } from "@angular/core";
import { CoolStore } from "cool-store";
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
    todo.id = generate();
    this.todosStore.set(state => {
      state.push(todo);
      return state;
    });
  }

  removeTodo(id: string) {
    this.todosStore.set(state => {
      state = state.filter(todo => todo.id !== id);
      return state;
    });
  }
}
