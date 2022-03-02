import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTranslatePipe } from '../../pipes/input-translate.pipe';
import { InputTypePipe } from '../../pipes/input-type.pipe';

@NgModule({
  declarations: [
    FormComponent,
    InputTranslatePipe,
    InputTypePipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [FormComponent],
})
export class FormModule { }
