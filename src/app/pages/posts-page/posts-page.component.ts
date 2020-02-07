import { Component, OnInit } from "@angular/core";
import { PostsService } from "src/app/services/posts.service";
import { UniversalService } from "src/app/services/universal.service";

@Component({
  selector: "app-posts-page",
  templateUrl: "./posts-page.component.html",
  styleUrls: ["./posts-page.component.scss"]
})
export class PostsPageComponent implements OnInit {
  posts$ = this.postsService.posts;

  constructor(
    private postsService: PostsService,
    private universalService: UniversalService
  ) {}

  ngOnInit() {
    this.postsService.getPosts();

    console.log({
      isBrowser: this.universalService.isBrowser,
      isServer: this.universalService.isServer,
      cookie: this.universalService.cookie.get()
    });
  }
}
