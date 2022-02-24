import { Component, Input, OnInit } from '@angular/core';
import { planInitializer, PlanName } from 'src/app/domains/registration/models/plans';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  @Input() availablePlans: PlanName[] = []

  public selectedPlans: PlanName[] = []
  public requestedInfos: any[] = []

  ngOnInit(): void {
  }

  public setSelectedPlan(currentSelectedPlan: PlanName, index: number) {
    this.selectedPlans.includes(currentSelectedPlan) ?
      this.selectedPlans.splice(index, 1) : this.selectedPlans.push(currentSelectedPlan);
    this.setFormInputs()
  }

  private setFormInputs() {
    this.requestedInfos = [];
    this.selectedPlans.forEach((plan) => {
      return this.requestedInfos.push({ ...planInitializer[plan].initializer() })
    })
    return this.requestedInfos = Object.assign({}, ...this.requestedInfos)
  }
}
