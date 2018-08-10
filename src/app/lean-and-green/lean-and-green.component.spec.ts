import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeanAndGreenComponent } from './lean-and-green.component';

describe('LeanAndGreenComponent', () => {
  let component: LeanAndGreenComponent;
  let fixture: ComponentFixture<LeanAndGreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeanAndGreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeanAndGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
