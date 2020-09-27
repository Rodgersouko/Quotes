import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteAuthorComponent } from './quote-author.component';

describe('QuoteAuthorComponent', () => {
  let component: QuoteAuthorComponent;
  let fixture: ComponentFixture<QuoteAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
