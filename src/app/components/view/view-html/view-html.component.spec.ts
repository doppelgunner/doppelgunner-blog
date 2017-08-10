import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHtmlComponent } from './view-html.component';

describe('ViewHtmlComponent', () => {
  let component: ViewHtmlComponent;
  let fixture: ComponentFixture<ViewHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
