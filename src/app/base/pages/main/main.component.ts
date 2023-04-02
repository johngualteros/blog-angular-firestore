import { Component, OnInit, inject } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private postsService = inject(PostsService);
  posts: Post[] = [];
  lastPost: Post = {
    id: '',
    title: '',
    body: '',
    code: '',
  };

  constructor() { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts.slice(0, 5);
      this.lastPost = this.posts[this.posts.length - 1];
    });
  }

}
