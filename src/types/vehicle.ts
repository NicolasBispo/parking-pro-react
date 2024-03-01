import { User, VehicleType } from ".";

export type Vehicle = {
  id: number;
  plate: string;
  created_at: Date;
  updated_at: Date;
  type: string;
  user: User;
  vehicle_type: VehicleType;
};
