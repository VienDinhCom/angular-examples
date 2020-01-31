import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Tokens } from "../models/tokens.model";

const API_KEY = "AIzaSyC_RmXfIE444YaggT8pHaIpVdqwiDKoDm4";

const ID_TOKEN = "ID_TOKEN";
const REFRESH_TOKEN = "REFRESH_TOKEN";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(email: string, password: string) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

    this.http
      .post<Tokens>(url, { email, password, returnSecureToken: true })
      .subscribe(this.setTokens);
  }

  login(email: string, password: string) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

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

  refreshToken(refreshToken) {
    const url = `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`;

    this.http
      .post<Tokens>(url, {
        grant_type: "refresh_token",
        refresh_token: refreshToken
      })
      .subscribe(this.setTokens);
  }

  getUser() {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`;
    const { idToken } = this.getTokens();

    return this.http.post<any>(url, { idToken });
  }
}
