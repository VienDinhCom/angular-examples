import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

enum Shape {
  Square = "square",
  Circle = "circle"
}

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
  animations: [
    trigger("shape", [
      state(
        Shape.Square,
        style({
          "border-radius": 0
        })
      ),
      state(
        Shape.Circle,
        style({
          "border-radius": "50%"
        })
      ),
      // transition(`${Shape.Square} => ${Shape.Circle}`, animate(300)),
      // transition(`${Shape.Circle} => ${Shape.Square}`, animate(300))
      // transition(`${Shape.Square} <=> *`, animate(300))
      transition(`* <=> *`, animate(300))
    ])
  ]
})
export class HomePageComponent implements OnInit {
  shape: Shape = Shape.Square;

  constructor() {}

  ngOnInit() {}

  changeShape() {
    if (this.shape === Shape.Circle) {
      this.shape = Shape.Square;
    } else {
      this.shape = Shape.Circle;
    }
  }
}