import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { planInitializer, PlanName } from '../models/plans';
import { UserRegistrationRequest } from '../models/Registration';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private httpClient: HttpClient) { }

  private putRegistrationUrl = `http://localhost:3000/registers/`

  public setRegistrationDataObject(selectedPlans: PlanName[]) {
    const neededInputs: any[] = [];
    selectedPlans.forEach((plan: PlanName) => {
      return neededInputs.push({ ...planInitializer[plan].initializer() });
    })
    return Object.assign({}, ...neededInputs)
  }

  public registerUser(userId: string, registration: UserRegistrationRequest) {
    return this.httpClient.post<UserRegistrationRequest>(`${this.putRegistrationUrl}`, registration, {
      headers: { 'Content-Type': 'application/json' }
    })
  }

  public setInputValidation(value: any): ValidatorFn {
    console.log(typeof value)

    return (control: AbstractControl): ValidationErrors | null => {
      return value ? { forbiddenName: { value: control.value } } : null;
    };
  }
}
