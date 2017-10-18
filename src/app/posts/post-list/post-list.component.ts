import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from './../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [ PostsService ]
})
export class PostListComponent implements OnInit {
  posts: Post[];

  constructor(private postService:PostsService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService
      .getPosts()
      .subscribe( res => {
        this.posts = res;
        console.log(res);
      });
  }

}
