import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Post } from "../models/post.model";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  constructor(private http: HttpClient) {}

  fetch() {
    return this.http
      .get<Post[]>("http://localhost:3000/posts")
      .pipe(catchError(error => throwError(error)));
  }
}
