import { Component, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SessionService } from 'src/app/core/services/session.service';
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
    private sessionService: SessionService,
  ) { }

  public loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });
  public errorFeedback: boolean = false;
  private subscriptions: Subscription[] = [];

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe())
  }

  public onSubmit(): void {
    const userInfos: User = this.loginForm?.value
    this.subscriptions.push(
      this.loginService.login(userInfos).subscribe(
        (loggedUser: User) => this.handleLoginSuccess(loggedUser),
        () => this.handleLoginFailed()
      )
    )
  }

  private handleLoginSuccess(loggedUser: User): void {
    this.sessionService.setUserSession(loggedUser);
    this.router.navigate(['register']);
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
