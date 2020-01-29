import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-contact-page",
  templateUrl: "./contact-page.component.html",
  styleUrls: ["./contact-page.component.scss"]
})
export class ContactPageComponent implements OnInit {
  contactForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      info: new FormGroup({
        title: new FormControl(null, Validators.required),
        message: new FormControl(null, Validators.required)
      }),
      issues: new FormArray([])
    });
  }

  get issuesFormArray() {
    return this.contactForm.get("issues") as FormArray;
  }

  suggestTitle() {
    this.contactForm.patchValue({ info: { title: "Suggested Title" } });
  }

  addIssue(event: Event) {
    event.preventDefault();

    (<FormArray>this.contactForm.get("issues")).push(
      new FormControl(null, Validators.required)
    );
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
