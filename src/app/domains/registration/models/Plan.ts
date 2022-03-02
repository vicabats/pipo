export class Plan {
  cpf: string;

  constructor(cpf: string) {
    this.cpf = cpf;
  }

  static Builder = class {
    private cpf: string;
    private name: string;
    private admission_date: Date;
    private email: string;
    private weight: number;
    private height: number;
    private hours: number;
    private address: string;

    constructor(cpf: string) {
      this.cpf = cpf;
    }

    setName(name: string) {
      this.name = name;
      return this;
    }

    setAdmissionDate(admission_date: Date) {
      this.admission_date = admission_date;
      return this;
    }

    setEmail(email: string) {
      this.email = email;
      return this;
    }

    setWeight(weight: number) {
      this.weight = weight;
      return this;
    }

    setHeight(height: number) {
      this.height = height;
      return this;
    }

    setHours(hours: number) {
      this.hours = hours;
      return this;
    }

    setAddress(address: string) {
      this.address = address;
      return this;
    }

    build() {
      return new Plan(this.cpf)
    }
  }
}
