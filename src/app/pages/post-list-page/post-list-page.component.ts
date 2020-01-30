import { Component, OnInit } from "@angular/core";
import { PostsService } from "src/app/services/posts.service";
import { throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Post } from "../../models/post.model";

@Component({
  selector: "app-post-list-page",
  templateUrl: "./post-list-page.component.html",
  styleUrls: ["./post-list-page.component.scss"]
})
export class PostListPageComponent implements OnInit {
  posts: Post[] = [];
  error: Error = null;
  loading: boolean = true;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService
      .fetch()
      .pipe(
        catchError(error => {
          this.loading = false;
          this.error = error;
          return throwError(error);
        })
      )
      .subscribe(posts => {
        this.loading = false;
        this.posts = posts;
        this.error = null;
      });
  }
}
