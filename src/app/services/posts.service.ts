import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "../interfaces/post";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  constructor(private http: HttpClient) {}

  get posts() {
    return this.http.get<Post>("https://jsonplaceholder.typicode.com/posts");
  }
}
