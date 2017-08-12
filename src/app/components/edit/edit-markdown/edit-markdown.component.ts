import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { TempService, CheckerService } from '../../../services';
import { Post } from '../../../models';

@Component({
  selector: 'dg-edit-markdown',
  templateUrl: './edit-markdown.component.html',
  styleUrls: ['./edit-markdown.component.css']
})
export class EditMarkdownComponent implements OnInit {
  @Input() post = new Post("","");

  constructor(private tempService: TempService, private checkerService: CheckerService) { }

  //markdown-editor - https://github.com/lon-yang/ngx-markdown-editor
  //ace - https://www.npmjs.com/package/ng2-ace-editor
  ngOnInit() {
  }

  onSubmit() {
    console.log(this.post);
  }

  isValid(value: string): boolean {
    return !this.checkerService.isEmpty(value);
  }
}
