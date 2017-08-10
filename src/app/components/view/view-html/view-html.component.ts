import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TempService } from '../../../services';

@Component({
  selector: 'dg-view-html',
  templateUrl: './view-html.component.html',
  styleUrls: ['./view-html.component.css']
})
export class ViewHtmlComponent implements OnInit {
  @Input() title: string = this.tempService.tempText.title().wrapHtml("h1").pre("view-html: ").getValue();
  @Input() content: string = this.tempService.tempText.content().wrapHtml("p").addScript().getValue();

  constructor(private tempService: TempService, private sanitized: DomSanitizer) { }

  ngOnInit() {
  }

}
