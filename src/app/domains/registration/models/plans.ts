import { Plan } from "./Plan";

export interface PlanInterface {
  cpf: string
  name?: string
  admission_date?: string
  email?: string
  weight?: number
  height?: number
  hours?: number
  address?: string
}

export enum PlanName {
  NorteEuropa = 'Norte Europa',
  DentalSorriso = 'Dental Sorriso',
  PampulhaIntermedica = 'Pampulha Intermédica',
  MenteSaCorpoSao = 'Mente Sã, Corpo São'
}

export const planInitializer = {
  [PlanName.NorteEuropa]: {
    initializer() {
      return new Plan.Builder('').setName('').setAdmissionDate('').setEmail('')
    }
  },
  [PlanName.DentalSorriso]: {
    initializer() {
      return new Plan.Builder('').setName('').setWeight(0).setHeight(0)
    }
  },
  [PlanName.MenteSaCorpoSao]: {
    initializer() {
      return new Plan.Builder('').setHours(0)
    }
  },
  [PlanName.PampulhaIntermedica]: {
    initializer() {
      return new Plan.Builder('').setName('').setAdmissionDate('').setAddress('')
    }
  },
}
