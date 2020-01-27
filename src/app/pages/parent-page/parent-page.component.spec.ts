import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentPageComponent } from './parent-page.component';

describe('ParentPageComponent', () => {
  let component: ParentPageComponent;
  let fixture: ComponentFixture<ParentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
