import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { PlanName } from '../../models/plans';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when any plan it is selected it shows the form', () => {
    component.selectedPlans.push(PlanName.DentalSorriso)

    fixture.detectChanges();

    const formElement = fixture.debugElement.query(By.css('.form__collapse'))
    expect(formElement).toBeTruthy()
  })

  it('when no plan it is selected it hides the form', () => {
    component.selectedPlans = []

    fixture.detectChanges();

    const formElement = fixture.debugElement.query(By.css('.form__collapse'))
    expect(formElement).toBeNull()
  })
});
