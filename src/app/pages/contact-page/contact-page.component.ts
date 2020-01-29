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

    // Set Default Values
    this.contactForm.setValue({
      email: "test@me.com",
      info: {
        title: "Hello World!",
        message:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet maiores beatae dolores sunt natus quia numquam, omnis dignissimos, quos illo excepturi harum. Consequatur ratione quasi magnam, facilis cum veniam repellendus."
      },
      issues: []
    });

    // Get Form values
    this.contactForm.valueChanges.subscribe(console.log);

    // For Validation
    this.contactForm.statusChanges.subscribe(console.log);
  }

  get issuesFormArray() {
    return this.contactForm.get("issues") as FormArray;
  }

  suggestTitle() {
    // Patch Values
    this.contactForm.patchValue({ info: { title: "Suggested Title" } });
  }

  addIssue(event: Event) {
    event.preventDefault();

    (<FormArray>this.contactForm.get("issues")).push(
      new FormControl(null, Validators.required)
    );
  }

  onSubmit() {
    console.log({ submit: this.contactForm.value });
  }
}
