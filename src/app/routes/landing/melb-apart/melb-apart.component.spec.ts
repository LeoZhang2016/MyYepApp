import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelbApartComponent } from './melb-apart.component';

describe('MelbApartComponent', () => {
  let component: MelbApartComponent;
  let fixture: ComponentFixture<MelbApartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelbApartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MelbApartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
