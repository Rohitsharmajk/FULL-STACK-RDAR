import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPayComponent } from './book-pay.component';

describe('BookPayComponent', () => {
  let component: BookPayComponent;
  let fixture: ComponentFixture<BookPayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookPayComponent]
    });
    fixture = TestBed.createComponent(BookPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
