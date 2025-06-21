import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgettoDetail } from './progetto-detail';

describe('ProgettoDetail', () => {
  let component: ProgettoDetail;
  let fixture: ComponentFixture<ProgettoDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgettoDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgettoDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
