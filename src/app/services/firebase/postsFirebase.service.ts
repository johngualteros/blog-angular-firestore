import { Injectable, inject } from '@angular/core';
import { CollectionReference, Firestore, collection, addDoc, orderBy, collectionData, getDocs, query, where, limit } from '@angular/fire/firestore';
import { Post } from 'src/app/interfaces/post';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsFirebaseService {

    private firestore: Firestore = inject(Firestore);
    postsCollection: CollectionReference = collection(this.firestore, 'posts');
    private posts$: Observable<any> | null = null;

    async savePostInFirestoreCollectionPosts(post: Post) {
        await addDoc(this.postsCollection, post);
    }

    getPosts() {
        const postCollection = collection(this.firestore, 'posts');
        this.posts$ = collectionData(postCollection);
        return this.posts$;
    }

    async getPostById(id: string) {
        const postCollection = collection(this.firestore, 'posts');
        const queryFirebase = query(postCollection, where('id', '==', id), limit(1));
        const postSnapshot = await getDocs(queryFirebase);
        return postSnapshot.docs[0].data();
    }
    
}
