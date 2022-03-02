import { PlanName } from "../../registration/models/plans";

export interface User {
  id: number;
  name?: string;
  email: string;
  password: string;
  plans?: PlanName[] | undefined;
}
