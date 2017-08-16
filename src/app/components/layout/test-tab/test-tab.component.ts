import { Component, OnInit } from '@angular/core';
import { Post } from '../../../models';
import { PostService } from '../../../services';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'dg-test-tab',
  templateUrl: './test-tab.component.html',
  styleUrls: ['./test-tab.component.css']
})
export class TestTabComponent implements OnInit {
  posts: FirebaseListObservable<Post[]>;
  showSpinner: boolean = true;

  constructor(private postService: PostService) {
    this.posts = this.postService.getPosts();
    this.posts.subscribe(() => this.showSpinner = false);
  }

  ngOnInit() {
  }

}
