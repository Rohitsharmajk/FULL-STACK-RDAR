import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrRemoveFlightComponent } from './update-or-remove-flight.component';

describe('UpdateOrRemoveFlightComponent', () => {
  let component: UpdateOrRemoveFlightComponent;
  let fixture: ComponentFixture<UpdateOrRemoveFlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateOrRemoveFlightComponent]
    });
    fixture = TestBed.createComponent(UpdateOrRemoveFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
