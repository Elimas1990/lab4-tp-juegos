import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinapaisComponent } from './adivinapais.component';

describe('AdivinapaisComponent', () => {
  let component: AdivinapaisComponent;
  let fixture: ComponentFixture<AdivinapaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdivinapaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdivinapaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
