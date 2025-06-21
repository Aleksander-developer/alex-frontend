import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteBox } from './quote-box';

describe('QuoteBox', () => {
  let component: QuoteBox;
  let fixture: ComponentFixture<QuoteBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuoteBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
