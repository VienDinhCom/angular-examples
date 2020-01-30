import { Component, OnInit } from "@angular/core";
import { PostsService } from "src/app/services/posts.service";
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
    this.postsService.fetch().subscribe(
      posts => {
        this.loading = false;
        this.posts = posts;
        this.error = null;
      },
      error => {
        this.loading = false;
        this.error = error;
        throw error;
      }
    );
  }
}