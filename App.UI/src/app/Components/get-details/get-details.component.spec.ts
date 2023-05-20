import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDetailsComponent } from './get-details.component';

describe('GetDetailsComponent', () => {
  let component: GetDetailsComponent;
  let fixture: ComponentFixture<GetDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetDetailsComponent]
    });
    fixture = TestBed.createComponent(GetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
