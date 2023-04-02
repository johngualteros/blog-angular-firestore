import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-card-posts',
  templateUrl: './card-posts.component.html',
  styleUrls: ['./card-posts.component.scss']
})
export class CardPostsComponent {

  private router = inject(Router);

  @Input() post: Post = {
    id: '',
    title: '',
    body: '',
    code: '',
  };

  navigateToPage(id: string){
    console.log(id);
    this.router.navigate(['/posts', id]);
  }
}
