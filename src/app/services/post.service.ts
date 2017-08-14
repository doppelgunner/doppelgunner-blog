import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Post } from '../models';
import { TempService } from '../services';
import 'rxjs/Rx';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class PostService {
  private posts: FirebaseListObservable<Post[]>;

  constructor(private tempService: TempService, private firedb: AngularFireDatabase) {
    this.fetchPosts();
  }
  
  public addPost(post: Post) {  
    this.posts.push(post);
  }

  public getPosts(): FirebaseListObservable<Post[]> {
    return (<FirebaseListObservable<Post[]>> this.posts.map(posts => posts.reverse()));
  }

  public updatePost(key: string, post: Post) {
    this.posts.update(key, post)
  }

  public getPost(key: string): FirebaseObjectObservable<Post> {
    return this.firedb.object('/posts/' + key);
  }

  public removePost(key: any) {
    if (key == null || key == undefined) return;
    this.posts.remove(key);
  }

  private fetchPosts() {
    this.posts = this.firedb.list('/posts', {
      query: {
        orderByChild: 'createdAt'
      }
    });
  }
}