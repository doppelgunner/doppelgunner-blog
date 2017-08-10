import { Component, OnInit, Input } from '@angular/core';
import { TempService } from '../../../services';

@Component({
  selector: 'dg-view-text',
  templateUrl: './view-text.component.html',
  styleUrls: ['./view-text.component.css']
})
export class ViewTextComponent implements OnInit {
  @Input() title: string = this.tempService.tempText.title().pre("view-text: ").getValue();
  @Input() content: string = this.tempService.tempText.content().getValue();

  constructor(private tempService: TempService) { }

  ngOnInit() {
  }

}
