/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PopcorrectComponent } from './popcorrect.component';

describe('PopcorrectComponent', () => {
  let component: PopcorrectComponent;
  let fixture: ComponentFixture<PopcorrectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopcorrectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopcorrectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
