import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Post } from "../models/post.model";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  constructor(private http: HttpClient) {}

  fetch() {
    return this.http.get<Post[]>("http://localhost:3000/posts", {
      headers: new HttpHeaders({ authorization: "secret" }),
      params: new HttpParams().set("query", "hello")
    });
  }
}
