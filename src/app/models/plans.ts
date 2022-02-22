export enum AvailablePlans {
  NorteEuropa = 'Norte Europa',
  DentalSorriso = 'Dental Sorriso',
  PampulhaIntermedica = 'Pampulha Intermédica',
  MenteSaCorpoSao = 'Mente Sã, Corpo São'
}

export interface NorteEuropaPlan {
  name: string;
  cpf: number;
  admission_date: string;
  email: string;
}

export interface DentalSorrisoPlan {
  name: string;
  cpf: number;
  weight: number;
  height: number;
}

export interface MenteSaCorpoSaoInterface {
  name: string;
  hours: number;
}

export interface PampulhaIntermedicaPlan {
  name: string;
  cpf: number;
  admission_date: string;
  address: string;
}
