import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SydnApartComponent } from './sydn-apart.component';

describe('SydnApartComponent', () => {
  let component: SydnApartComponent;
  let fixture: ComponentFixture<SydnApartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SydnApartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SydnApartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
