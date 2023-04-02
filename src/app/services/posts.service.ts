import { EventEmitter, Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { PostsFirebaseService } from './firebase/postsFirebase.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  listPosts: Post[] = [];

  constructor(private postsFirebaseService: PostsFirebaseService) { }

  saveNewPost(post: Post) {
    this.postsFirebaseService.savePostInFirestoreCollectionPosts(post);
  }

  getPosts() {
    return this.postsFirebaseService.getPosts();
  }

  getPostById(id: string) {
    return this.postsFirebaseService.getPostById(id);
  }

}
