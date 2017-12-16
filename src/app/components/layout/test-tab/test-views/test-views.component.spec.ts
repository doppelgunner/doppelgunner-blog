import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestViewsComponent } from './test-views.component';

describe('TestViewsComponent', () => {
  let component: TestViewsComponent;
  let fixture: ComponentFixture<TestViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
