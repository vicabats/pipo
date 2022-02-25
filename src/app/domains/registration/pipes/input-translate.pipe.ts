import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inputTranslate'
})
export class InputTranslatePipe implements PipeTransform {

  public translation = {
    cpf: 'CPF',
    name: 'Nome',
    admission_date: 'Data de admissão',
    email: 'E-mail',
    weight: 'Peso',
    height: 'Altura',
    hours: 'Horas meditadas',
    address: 'Endereço'
  };

  transform(input: any) {
    const inputType: keyof typeof this.translation = input;
    return this.translation[inputType];
  }
}
