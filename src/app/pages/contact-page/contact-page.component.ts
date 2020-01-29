import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-contact-page",
  templateUrl: "./contact-page.component.html",
  styleUrls: ["./contact-page.component.scss"]
})
export class ContactPageComponent implements OnInit {
  @ViewChild("formRef", { static: false }) formRef: NgForm;

  // Có thể dùng ([ngModel]) để vừa điền form vừa hiển thị
  formDefaultValue = {
    title: "",
    email: "test@me.com",
    messsage:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat harum dolorum, totam ex ducimus laudantium minus perspiciatis necessitatibus illum enim! Vel quidem tenetur, enim suscipit beatae velit sit rerum impedit!"
  };

  constructor() {}

  ngOnInit() {}

  suggestTitle() {
    this.formRef.form.patchValue({ title: "Suggested Title" });
  }

  onSubmit(formRef: NgForm) {
    // console.log(formRef.value);

    console.log(this.formRef.value);

    this.formRef.reset();
  }
}
