import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermissionComponent } from './intermission.component';

describe('IntermissionComponent', () => {
  let component: IntermissionComponent;
  let fixture: ComponentFixture<IntermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntermissionComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
