import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPageComponent } from './child-page.component';

describe('ChildPageComponent', () => {
  let component: ChildPageComponent;
  let fixture: ComponentFixture<ChildPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
