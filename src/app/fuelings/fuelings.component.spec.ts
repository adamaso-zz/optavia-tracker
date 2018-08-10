import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelingsComponent } from './fuelings.component';

describe('FuelingsComponent', () => {
  let component: FuelingsComponent;
  let fixture: ComponentFixture<FuelingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
