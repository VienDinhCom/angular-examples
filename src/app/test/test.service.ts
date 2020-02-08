import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TestService {
  name: string = "";
  age: number = 0;

  constructor() {}

  setName(name: string) {
    this.name = name;
    return this.name;
  }

  setAge(age: number) {
    return new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        this.age = age;
        resolve(this.age);
      }, 1000);
    });
  }
}
