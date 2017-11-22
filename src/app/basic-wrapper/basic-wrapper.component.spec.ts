import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicWrapperComponent } from './basic-wrapper.component';

describe('BasicWrapperComponent', () => {
  let component: BasicWrapperComponent;
  let fixture: ComponentFixture<BasicWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
