import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login-page';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { LoginService } from '../../services/login.service';

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginPage
      }
    ])
  ],
  providers: [LoginService]
})
export class LoginPageModule { }
