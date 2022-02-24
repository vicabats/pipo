export class Plan {
  private cpf: string | undefined;
  // private name: string | undefined;
  // private admission_date: Date | undefined;
  // private email: string | undefined;
  // private weight: number | undefined;
  // private height: number | undefined;
  // private hours: number | undefined;
  // private address: string | undefined;

  constructor(cpf: string | undefined) {
    this.cpf = cpf;
  }

  static Builder = class {
    private cpf: string | undefined;
    private name: string | undefined;
    private admission_date: Date | undefined;
    private email: string | undefined;
    private weight: number | undefined;
    private height: number | undefined;
    private hours: number | undefined;
    private address: string | undefined;

    constructor(cpf: string | undefined) {
      this.cpf = cpf;
    }

    setName(name: string | undefined) {
      this.name = name;
      return this;
    }

    setAdmissionDate(admission_date: Date | undefined) {
      this.admission_date = admission_date;
      return this;
    }

    setEmail(email: string | undefined) {
      this.email = email;
      return this;
    }

    setWeight(weight: number | undefined) {
      this.weight = weight;
      return this;
    }

    setHeight(height: number | undefined) {
      this.height = height;
      return this;
    }

    setHours(hours: number | undefined) {
      this.hours = hours;
      return this;
    }

    setAddress(address: string | undefined) {
      this.address = address;
      return this;
    }

    build() {
      return new Plan(this.cpf)
    }
  }
}
