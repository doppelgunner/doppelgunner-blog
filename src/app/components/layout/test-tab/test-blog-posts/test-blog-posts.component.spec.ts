import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBlogPostsComponent } from './test-blog-posts.component';

describe('TestBlogPostsComponent', () => {
  let component: TestBlogPostsComponent;
  let fixture: ComponentFixture<TestBlogPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBlogPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBlogPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
