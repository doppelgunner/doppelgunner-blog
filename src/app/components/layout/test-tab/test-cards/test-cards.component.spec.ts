import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCardsComponent } from './test-cards.component';

describe('TestCardsComponent', () => {
  let component: TestCardsComponent;
  let fixture: ComponentFixture<TestCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
