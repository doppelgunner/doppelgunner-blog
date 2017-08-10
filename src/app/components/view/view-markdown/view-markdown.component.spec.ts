import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMarkdownComponent } from './view-markdown.component';

describe('ViewMarkdownComponent', () => {
  let component: ViewMarkdownComponent;
  let fixture: ComponentFixture<ViewMarkdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMarkdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
