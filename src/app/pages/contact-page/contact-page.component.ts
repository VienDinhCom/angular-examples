import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

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
      })
    });
  }

  suggestTitle() {
    this.contactForm.patchValue({ info: { title: "Suggested Title" } });
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
