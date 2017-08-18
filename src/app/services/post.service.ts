import { Injectable, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';
import { Post } from '../models';
import { TempService } from '../services';
import 'rxjs/Rx';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class PostService {
  //private posts: FirebaseListObservable<Post[]>;
  deletedSomething = new EventEmitter();
  addedSomething = new EventEmitter();
  updatedSomething = new EventEmitter();

  constructor(private tempService: TempService, private firedb: AngularFireDatabase) {
  }

  public addPost(post: Post) {  
    firebase.database().ref('/posts').push(post).then((snap) => this.addedSomething.emit(snap.key));
  }

/**
  public getPosts(): FirebaseListObservable<Post[]> {
    return (<FirebaseListObservable<Post[]>> this.posts.map(posts => posts.reverse()));
  }
*/

  getPosts(batch, last?): FirebaseListObservable<Post[]> {
    let query = {
      //orderByKey: true,
      limitToLast: batch,
      orderByChild: 'createdAt',
    }
    
    if (last) query['endAt'] = last;
    //if (lastKey) query['endAt'] = lastKey
    //return (<FirebaseListObservable<Post[]>> this.firedb.list('/posts', {query}).map(posts => posts.reverse()));
    return this.firedb.list('/posts', {query});
  }

  public updatePost(key: string, post: Post) {
    firebase.database().ref('/posts/' + key).set(post).then(() => this.updatedSomething.emit(post));
  }

  public getPost(key: string): FirebaseObjectObservable<Post> {
    return this.firedb.object('/posts/' + key);
  }

  public getPostPromise(key: string) {
    return firebase.database().ref('/posts/' + key).once('value');
  }

  public removePost(key: any) {
    if (key == null || key == undefined) return;
    firebase.database().ref('/posts/' + key).remove().then(() => this.deletedSomething.emit(key));
  }

  /*
  private fetchPosts() {
    this.posts = this.firedb.list('/posts', {
      query: {
        orderByChild: 'createdAt'
      }
    });
  }
  */
}