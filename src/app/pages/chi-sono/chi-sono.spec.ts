import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiSono } from './chi-sono';

describe('ChiSono', () => {
  let component: ChiSono;
  let fixture: ComponentFixture<ChiSono>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChiSono]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChiSono);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
