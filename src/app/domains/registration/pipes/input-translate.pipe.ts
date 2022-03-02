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
    weight: 'Peso (em kg)',
    height: 'Altura (em cm)',
    hours: 'Horas meditadas',
    address: 'Endereço'
  };

  transform(input: string) {
    return this.translation[input];
  }
}
