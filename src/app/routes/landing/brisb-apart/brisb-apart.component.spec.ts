import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrisbApartComponent } from './brisb-apart.component';

describe('BrisbApartComponent', () => {
  let component: BrisbApartComponent;
  let fixture: ComponentFixture<BrisbApartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrisbApartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrisbApartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
