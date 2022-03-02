import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inputType'
})

export class InputTypePipe implements PipeTransform {
  public types = {
    cpf: 'string',
    name: 'string',
    admission_date: 'date',
    email: 'string',
    weight: 'number',
    height: 'number',
    hours: 'number',
    address: 'string'
  }

  transform(value: string): string {
    return this.types[value]
  }
}
