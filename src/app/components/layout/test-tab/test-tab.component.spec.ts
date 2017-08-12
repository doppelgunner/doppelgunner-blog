import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTabComponent } from './test-tab.component';

describe('TestTabComponent', () => {
  let component: TestTabComponent;
  let fixture: ComponentFixture<TestTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
