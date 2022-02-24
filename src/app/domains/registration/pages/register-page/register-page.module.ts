import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterPage } from './register-page';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormModule } from 'src/app/domains/registration/components/form/form.module';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    MatExpansionModule,
    CommonModule,
    FormModule,
    RouterModule.forChild([
      {
        path: '',
        component: RegisterPage
      }
    ])
  ],
  exports: [RegisterPage]
})
export class RegisterPageModule { }
