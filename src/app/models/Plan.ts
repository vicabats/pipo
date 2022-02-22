// export class Plan {
//   private cpf: string;

import { AvailablePlans, MenteSaCorpoSaoInterface } from "./plans";

//   constructor(cpf: string) {
//     this.cpf = cpf
//   }
// }

// export class NorteEuropaPlan extends Plan {
//   private name: string;
//   private admission_date: Date;
//   private email: string;

//   constructor(name: string, cpf: string, admission_date: Date, email: string) {
//     super(cpf);
//     this.name = name;
//     this.admission_date = admission_date;
//     this.email = email;
//   }
// }

// export class PampulhaIntermedicaPlan extends Plan {
//   private name: string;
//   private admission_date: Date;
//   private address: string;

//   constructor(name: string, cpf: string, admission_date: Date, address: string) {
//     super(cpf);
//     this.name = name;
//     this.admission_date = admission_date;
//     this.address = address;
//   }
// }

// export class DentalSorrisoPlan extends Plan {
//   private name: string;
//   private weight: number;
//   private height: number;

//   constructor(name: string, cpf: string, weight: number, height: number) {
//     super(cpf);
//     this.name = name;
//     this.weight = weight;
//     this.height = height;
//   }
// }

// export class MenteSaCorpoSaoPlan extends Plan {
//   private hours: number;

//   constructor(cpf: string, hours: number) {
//     super(cpf);
//     this.hours = hours;
//   }
// }

export class MenteSaCorpoSaoPlan implements MenteSaCorpoSaoInterface {
  name: string;
  hours: number;

  constructor(name: string, hours: number) {
    this.name = name;
    this.hours = hours;
  }

  public isValid() {
    return true;
  }
}

export interface Que {
  name: AvailablePlans
}
