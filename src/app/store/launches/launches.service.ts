import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Launch } from "src/app/interfaces/launch";

@Injectable({
  providedIn: "root"
})
export class LaunchesService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Launch[]>("https://api.spacexdata.com/v3/launches");
  }
}
