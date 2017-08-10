import { Component, OnInit, Input } from '@angular/core';
import { TempService } from '../../../services';

@Component({
  selector: 'dg-view-markdown',
  templateUrl: './view-markdown.component.html',
  styleUrls: ['./view-markdown.component.css']
})
export class ViewMarkdownComponent implements OnInit {
  @Input() title: string = this.tempService.tempText.title().pre("view-markdown: ").getValue();
  @Input() content: string = this.tempService.tempText.this()
        .post("# heading1").newLine()
        .post("## heading2").newLine()
        .post("### heading3").newLine()
        .content().newLine()
        .post("```css").newLine()
        .code().newLine()
        .post("```").newLine()
        .post("* list").newLine()
        .post("![ATOM](http://www.shreeharsha.me/img/icons/github.png 'Github logo')")
        .getValue();

  //https://www.npmjs.com/package/ng2-markdown-to-html
  constructor(private tempService: TempService) {}

  ngOnInit() {
  }

}
