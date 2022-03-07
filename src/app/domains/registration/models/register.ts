import { PlanInterface, PlanName } from "./plans";

export interface UserRegistrationRequest {
  companyId: number;
  employee: PlanInterface;
  plans: PlanName[];
}
