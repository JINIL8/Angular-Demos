import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestservicesComponent } from './testservices.component';

describe('TestservicesComponent', () => {
  let component: TestservicesComponent;
  let fixture: ComponentFixture<TestservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
