import { Plan } from "./Plan";

export interface PlanInterface {
  cpf: string
  name?: string
  admission_date?: Date
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
      return new Plan.Builder(undefined).setName(undefined).setAdmissionDate(undefined).setEmail(undefined)
    }
  },
  [PlanName.DentalSorriso]: {
    initializer() {
      return new Plan.Builder(undefined).setName(undefined).setWeight(undefined).setHeight(undefined)
    }
  },
  [PlanName.MenteSaCorpoSao]: {
    initializer() {
      return new Plan.Builder(undefined).setHours(undefined)
    }
  },
  [PlanName.PampulhaIntermedica]: {
    initializer() {
      return new Plan.Builder(undefined).setName(undefined).setAdmissionDate(undefined).setAddress(undefined)
    }
  },
}
