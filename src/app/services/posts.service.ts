import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "../interfaces/post";
import { AsyncCoolStore } from "cool-store";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  postsStore = new AsyncCoolStore<Post[], Error>({
    loading: false,
    data: null,
    error: null
  });

  constructor(private http: HttpClient) {}

  get posts() {
    return this.postsStore.getChanges();
  }

  getPosts() {
    this.postsStore.setLoading();

    this.http
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .subscribe(
        posts => this.postsStore.setData(() => posts),
        error => this.postsStore.setError(error)
      );
  }
}
