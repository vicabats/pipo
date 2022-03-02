import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/domains/login/models/User';
import { PlanName } from 'src/app/domains/registration/models/plans';
import { UserRegistrationRequest } from '../../models/Registration';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService,
  ) { }

  @Input() availablePlans: PlanName[] | undefined = []
  @Input() loggedUser: User;

  public selectedPlans: PlanName[] = []
  public registerForm: FormGroup = new FormGroup({});

  public submitFeedback: string = '';

  private setFormInputs() {
    const registrationData = this.formService.setRegistrationDataObject(this.selectedPlans)
    this.registerForm = new FormGroup({})

    for (const key of Object.keys(registrationData)) {
      this.registerForm.addControl(key, this.formBuilder.control(registrationData[key], Validators.required))
    }
  }

  public setSelectedPlan(currentSelectedPlan: PlanName, index: number) {
    this.selectedPlans.includes(currentSelectedPlan) ?
      this.selectedPlans.splice(index, 1) : this.selectedPlans.push(currentSelectedPlan);
    this.setFormInputs();
  }

  public onSubmit() {
    this.submitFeedback = '';
    const loggedUserId = this.loggedUser?.id.toString()
    this.formService.registerUser(loggedUserId, this.setRegistrationObject()).subscribe(
      () => this.handleSubmitSuccess(),
      () => this.handleSubmitFailed()
    )
  }

  private setRegistrationObject(): UserRegistrationRequest {
    return {
      companyId: this.loggedUser.id,
      employee: this.registerForm.value,
      plans: this.selectedPlans
    }
  }

  private handleSubmitSuccess() {
    this.submitFeedback = 'O cadastro foi efetuado com sucesso :)'
    this.registerForm.reset();
    setTimeout(() => { this.submitFeedback = '' }, 3000)
  }

  private handleSubmitFailed() {
    this.submitFeedback = 'Ops, alguma coisa deu errado :('
    setTimeout(() => { this.submitFeedback = '' }, 3000)
  }
}
