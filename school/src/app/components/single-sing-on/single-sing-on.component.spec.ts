import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSingOnComponent } from './single-sing-on.component';

describe('SingleSingOnComponent', () => {
  let component: SingleSingOnComponent;
  let fixture: ComponentFixture<SingleSingOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSingOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSingOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
