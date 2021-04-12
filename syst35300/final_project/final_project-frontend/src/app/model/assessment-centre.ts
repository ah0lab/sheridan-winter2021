import {Appointment} from './appointment';

export interface AssessmentCentre {
  location_id?: number;
  location_name?: string;
  active?: string;
  operated_by?: string;
  city?: string;
  address?: string;
  postal_code?: string;
  province?: string;
  phone?: string;
  appointments?: Appointment[];
}
