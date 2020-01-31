import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-auth-page",
  templateUrl: "./auth-page.component.html",
  styleUrls: ["./auth-page.component.scss"]
})
export class AuthPageComponent implements OnInit {
  isLoginPage: boolean = true;
  authForm: FormGroup;

  constructor(private route: ActivatedRoute) {
    this.isLoginPage = this.route.snapshot.data.isLoginPage;
  }

  ngOnInit() {
    this.authForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.authForm.valid);
  }
}
