/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PoperrorComponent } from './poperror.component';

describe('PoperrorComponent', () => {
  let component: PoperrorComponent;
  let fixture: ComponentFixture<PoperrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoperrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoperrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
