import { Component, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../models/User';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.scss']
})
export class LoginPage implements OnDestroy {

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
  ) { }

  public loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });
  public user: any;
  public errorFeedback: boolean = false;
  private subscriptions: Subscription[] = [];

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe())
  }

  public onSubmit(): void {
    const userInfos: User = this.loginForm?.value
    this.subscriptions.push(
      this.loginService.login(userInfos).subscribe(
        (authenticUser: User) => {
          this.user = authenticUser;
          this.handleLoginSuccess();
        },
        () => {
          this.handleLoginFailed()
        }
      )
    )
  }

  private handleLoginSuccess(): void {
    this.router.navigate(['register'], { queryParams: { currentUser: this.user } });
  }

  private handleLoginFailed(): void {
    this.loginForm.reset()
    this.handleErrorFeedback()
  }

  private handleErrorFeedback(): void {
    this.errorFeedback = true;
    setTimeout(() => { this.errorFeedback = false }, 3000)
  }
}
