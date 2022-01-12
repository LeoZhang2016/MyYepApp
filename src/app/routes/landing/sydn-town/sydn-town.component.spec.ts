import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SydnTownComponent } from './sydn-town.component';

describe('SydnTownComponent', () => {
  let component: SydnTownComponent;
  let fixture: ComponentFixture<SydnTownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SydnTownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SydnTownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
