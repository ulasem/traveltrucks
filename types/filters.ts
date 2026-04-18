import { Engine, Transmission, VehicleForm } from './camper';

export interface Filters {
  location: string;
  form: VehicleForm | '';
  transmission: Transmission | '';
  engine: Engine | '';
}
