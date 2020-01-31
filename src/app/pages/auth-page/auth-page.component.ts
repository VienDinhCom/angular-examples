import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-auth-page",
  templateUrl: "./auth-page.component.html",
  styleUrls: ["./auth-page.component.scss"]
})
export class AuthPageComponent implements OnInit {
  isLoginPage: boolean = true;
  authForm: FormGroup;

  constructor(private route: ActivatedRoute, private authService: AuthService) {
    this.isLoginPage = this.route.snapshot.data.isLoginPage;
  }

  ngOnInit() {
    this.authForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const { email, password } = this.authForm.value;

    if (this.isLoginPage) {
      this.authService.login(email, password);
    } else {
      this.authService.register(email, password);
    }
  }
}
