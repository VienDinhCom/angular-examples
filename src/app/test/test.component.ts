import { Component, OnInit } from "@angular/core";
import { TestService } from "./test.service";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"]
})
export class TestComponent implements OnInit {
  name: string;
  age: number;

  constructor(private testService: TestService) {}

  async ngOnInit() {
    this.name = this.testService.setName("Test");
    this.age = await this.testService.setAge(11);
  }
}
