import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Side1Component } from './side1.component';

describe('Side1Component', () => {
  let component: Side1Component;
  let fixture: ComponentFixture<Side1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Side1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Side1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
