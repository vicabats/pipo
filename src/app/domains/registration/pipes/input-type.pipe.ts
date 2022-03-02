import { Pipe, PipeTransform } from '@angular/core';
import { PlanInterface } from '../models/plans';

@Pipe({
  name: 'inputType'
})

export class InputTypePipe implements PipeTransform {


  transform(value: string) {
    const a: PlanInterface = {} as PlanInterface
    const temp = a[value as keyof typeof a]
  }

}
