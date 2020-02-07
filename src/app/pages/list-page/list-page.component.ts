import { generate } from "shortid";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

interface Todo {
  id?: string;
  name: string;
}

@Component({
  selector: "app-list-page",
  templateUrl: "./list-page.component.html",
  styleUrls: ["./list-page.component.scss"],
  animations: [
    trigger("todoItem", [
      state(
        "normal",
        style({
          // Bình thường
          opacity: 1,
          transform: "translateX(0)"
        })
      ),
      transition(`void => *`, [
        // Trong khi
        style({
          opacity: 1,
          transform: "translateX(-50px)"
        }),
        animate(300)
      ]),
      transition(`* => void`, [
        animate(
          300,
          style({
            // Cuối cùng
            opacity: 0,
            transform: "translateX(50px)"
          })
        )
      ])
    ])
  ]
})
export class ListPageComponent implements OnInit {
  todoForm: FormGroup;
  todos: Todo[] = [];

  constructor() {}

  ngOnInit() {
    this.todoForm = new FormGroup({
      name: new FormControl(null, Validators.required)
    });
  }

  addTodo() {
    if (this.todoForm.valid) {
      const todo: Todo = this.todoForm.value;
      todo.id = generate();

      this.todos.push(todo);
      this.todoForm.reset();
    } else {
      alert("Please enter a todo name!");
    }
  }

  removeTodo(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
