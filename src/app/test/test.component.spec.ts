import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from "@angular/core/testing";

import { TestComponent } from "./test.component";
import { TestService } from "./test.service";

describe("TestComponent", () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it("[LOGIC] should create", () => {
    expect(component).toBeTruthy();
  });

  it('[LOGIC] should use the "name" form the service', () => {
    let testService = fixture.debugElement.injector.get(TestService);
    expect(testService.name).toEqual(component.name);
  });

  it('[DOM] should display the "name" in <p> tag', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("p").textContent).toContain(component.name);
  });

  it('[Async] should use the "age" form the service', async(async () => {
    let testService = fixture.debugElement.injector.get(TestService);

    // Chờ cho xong đã
    await fixture.whenStable();

    expect(testService.age).toEqual(component.age);
  }));

  it('[FakeAsync] should use the "age" form the service', fakeAsync(() => {
    let testService = fixture.debugElement.injector.get(TestService);

    component.ngOnInit();

    // Chờ 1 giây
    tick(1000);

    expect(testService.age).toEqual(component.age);
  }));
});
