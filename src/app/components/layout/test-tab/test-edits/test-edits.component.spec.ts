import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEditsComponent } from './test-edits.component';

describe('TestEditsComponent', () => {
  let component: TestEditsComponent;
  let fixture: ComponentFixture<TestEditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
