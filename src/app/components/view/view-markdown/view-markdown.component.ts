import { Component, OnInit, Input } from '@angular/core';
import { TempService, PostService, AuthService } from '../../../services';
import { Post } from '../../../models';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'dg-view-markdown',
  templateUrl: './view-markdown.component.html',
  styleUrls: ['./view-markdown.component.css']
})
export class ViewMarkdownComponent implements OnInit {
  @Input() editable = false;
  @Input() post: any = new Post(
    this.tempService.tempText.title().pre("view-markdown: ").getValue(),
    this.tempService.tempText.this()
        .post("# heading1").newLine()
        .post("## heading2").newLine()
        .post("### heading3").newLine()
        .content().newLine()
        .post("```css").newLine()
        .code().newLine()
        .post("```").newLine()
        .post("* list").newLine()
        .post("![ATOM](http://www.shreeharsha.me/img/icons/github.png 'Github logo')")
        .getValue(),
      null,null
  );
  @Input() key: any = null;
  private id: string = null;

  //https://www.npmjs.com/package/ng2-markdown-to-html
  constructor(private tempService: TempService, 
              private postService: PostService,
              private router: Router,
              private authService: AuthService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.id = params['id'];

          let post = this.postService.getPost(this.id);
          post.subscribe(
            (snapshot) => {

              //comment for production
              if (snapshot) {
                this.post = snapshot;
              }
              // this.post = snapshot; //uncomment for production
            }
          );
        }
      }
    );
  }

  edit() {
    this.router.navigate([this.key, "edit"]);
  }

  delete() {
    this.postService.removePost(this.key);
  }

  isAuth(): boolean {
    return this.authService.isAuthenticated();
  }
}
