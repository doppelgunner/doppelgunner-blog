import { Component, OnInit } from '@angular/core';
import { Post, PostSnap } from '../../../../models';
import { PostService } from '../../../../services';
import { FirebaseListObservable } from 'angularfire2/database';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import * as _ from 'lodash';

@Component({
  selector: 'dg-test-cards',
  templateUrl: './test-cards.component.html',
  styleUrls: ['./test-cards.component.css']
})
export class TestCardsComponent implements OnInit {

  posts = new BehaviorSubject([]);
  batch = 5;
  last = undefined;
  finished = false;

  private subs: Subscription[];

  constructor(private postService: PostService) {
    this.subs = [];
  }

  ngOnInit() {
    //add notification->confirmation to load new?
    this.subs.push(this.postService.addedSomething.subscribe(key => {
      this.postService.getPostPromise(key).then((snap) => {
        this.posts.next(_.concat([new PostSnap(snap)],this.posts.getValue()))
      });
    }));

    this.subs.push(this.postService.deletedSomething.debounceTime(1000).subscribe((key) => {
      this.posts.next(this.posts.getValue().filter(post => post.$key != key));
    }));

    this.getPosts();
  }

  onScroll() {
    this.getPosts();
  }

  getPosts(key?) {
    if (this.finished) return;
    this.postService.getPosts(this.batch, this.last)
      .do(posts => {

        posts = posts.reverse();
        this.last = _.last(posts).createdAt;
        const newPosts = _.slice(posts, 0, this.batch - 1);
        const currentPosts = this.posts.getValue();
        
        if (this.last == _.last(newPosts).createdAt) {
          this.finished = true;
        }
        

        this.posts.next(_.concat(currentPosts,newPosts));
      }).take(1).subscribe();
  }

  ngOnDestroy() {
    for(let sub of this.subs) {
      sub.unsubscribe();
    }
  }

}
