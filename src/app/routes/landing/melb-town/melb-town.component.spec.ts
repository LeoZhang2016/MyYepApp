import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelbTownComponent } from './melb-town.component';

describe('MelbTownComponent', () => {
  let component: MelbTownComponent;
  let fixture: ComponentFixture<MelbTownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelbTownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MelbTownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
