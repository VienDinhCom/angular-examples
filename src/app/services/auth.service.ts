import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Tokens } from "../models/tokens.model";

const ID_TOKEN = "ID_TOKEN";
const REFRESH_TOKEN = "REFRESH_TOKEN";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(email: string, password: string) {
    const url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp";

    this.http
      .post<Tokens>(url, { email, password, returnSecureToken: true })
      .subscribe(this.setTokens);
  }

  login(email: string, password: string) {
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword";

    this.http
      .post<Tokens>(url, { email, password, returnSecureToken: true })
      .subscribe(this.setTokens);
  }

  setTokens({ idToken, refreshToken }: Tokens) {
    localStorage.setItem(ID_TOKEN, idToken);
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
  }

  getTokens(): Tokens {
    return {
      idToken: localStorage.getItem(ID_TOKEN),
      refreshToken: localStorage.getItem(REFRESH_TOKEN)
    };
  }

  refreshToken() {
    const url = "https://securetoken.googleapis.com/v1/token";
    const { refreshToken } = this.getTokens();

    return this.http
      .post<Tokens>(url, {
        grant_type: "refresh_token",
        refresh_token: refreshToken
      })
      .pipe(
        map(({ id_token, refresh_token }: any) => {
          const tokens = {
            idToken: id_token,
            refreshToken: refresh_token
          };

          this.setTokens(tokens);

          return tokens;
        })
      );
  }
}
