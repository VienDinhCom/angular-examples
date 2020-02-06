import { Component, OnInit } from "@angular/core";
import { PostsService } from "src/app/services/posts.service";

@Component({
  selector: "app-posts-page",
  templateUrl: "./posts-page.component.html",
  styleUrls: ["./posts-page.component.scss"]
})
export class PostsPageComponent implements OnInit {
  post$ = this.postsService.posts;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts();
  }
}
