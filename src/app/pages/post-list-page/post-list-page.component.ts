import { Component, OnInit } from "@angular/core";
import { PostsService } from "src/app/services/posts.service";

@Component({
  selector: "app-post-list-page",
  templateUrl: "./post-list-page.component.html",
  styleUrls: ["./post-list-page.component.scss"]
})
export class PostListPageComponent implements OnInit {
  constructor(private postsService: PostsService) {}

  posts$ = this.postsService.fetch();

  ngOnInit() {}
}
