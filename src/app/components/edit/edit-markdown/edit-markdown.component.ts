import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { TempService, CheckerService, PostService } from '../../../services';
import { Post } from '../../../models';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'dg-edit-markdown',
  templateUrl: './edit-markdown.component.html',
  styleUrls: ['./edit-markdown.component.css']
})
export class EditMarkdownComponent implements OnInit {
  @Input() post = new Post("","",null,null);
  new: boolean = true;
  options: any = {
    autoScrollEditorIntoView: true,
    maxLines: 28,
    showLineNumbers: false
  };
  private id: string = null;
  
  constructor(private tempService: TempService, 
              private checkerService: CheckerService,
              private postService: PostService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) { }

  //markdown-editor - https://github.com/lon-yang/ngx-markdown-editor
  //ace - https://www.npmjs.com/package/ng2-ace-editor
  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.id = params['id'];
          this.new = false;

          let post = this.postService.getPost(this.id);
          post.subscribe(
            (snapshot) => {
              this.post = snapshot;
            }
          );
        }
      }
    );
  }

  //on post form
  onSubmit() {
    this.post.createdAt = firebase.database.ServerValue.TIMESTAMP;
    this.postService.addPost(this.post.clone());
  }

  onSave() {
    this.post.lastUpdate = firebase.database.ServerValue.TIMESTAMP;
    this.postService.updatePost(this.id, this.post);
    console.log(this.post);
    this.navigateBack();  
  }

  onCancel() {
    this.navigateBack();
  }

  private navigateBack() {
    // this.router.navigate(['../']);
    this.location.back();
  }

  isValid(value: string): boolean {
    return !this.checkerService.isEmpty(value);
  }
}
