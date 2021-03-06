import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { planInitializer, PlanName } from '../models/plans';
import { UserRegistrationRequest } from '../models/register';

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

  public registerUser(registration: UserRegistrationRequest) {
    return this.httpClient.post<UserRegistrationRequest>(`${this.putRegistrationUrl}`, registration, {
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
