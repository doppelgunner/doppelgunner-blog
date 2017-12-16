import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLoginComponent } from './test-login.component';

describe('TestLoginComponent', () => {
  let component: TestLoginComponent;
  let fixture: ComponentFixture<TestLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
