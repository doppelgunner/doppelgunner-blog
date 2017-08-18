import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../../models';

@Component({
  selector: 'dg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}
