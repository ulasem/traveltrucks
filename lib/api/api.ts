import axios from 'axios';
import { Review } from '@/types/review';
import { Camper, VehicleForm, Transmission, Engine } from '@/types/camper';

export const api = axios.create({
  baseURL: `https://campers-api.goit.study`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface CampersResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
}

export const fetchCampers = async (params: {
  page?: number;
  perPage?: number;
  location?: string;
  form?: string;
  transmission?: string;
  engine?: string;
}): Promise<CampersResponse> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(([_, value]) => value !== '' && value !== undefined),
  );

  const { data } = await api.get<CampersResponse>('/campers', {
    params: filteredParams,
  });
  return data;
};

export interface FiltersResponse {
  forms: VehicleForm[];
  transmissions: Transmission[];
  engines: Engine[];
}

export const fetchFilters = async (): Promise<FiltersResponse> => {
  const { data } = await api.get<FiltersResponse>('/campers/filters');
  return data;
};

export const fetchCamperById = async (camperId: string): Promise<Camper> => {
  const { data } = await api.get<Camper>(`/campers/${camperId}`);
  return data;
};

export const fetchCamperReviews = async (id: string): Promise<Review[]> => {
  const { data } = await api.get<Review[]>(`/campers/${id}/reviews`);
  return data;
};

export interface BookingRequest {
  name: string;
  email: string;
  date?: string;
  comment?: string;
}

export interface BookingResponse {
  message: string;
}

export const postBookingRequest = async (
  camperId: string,
  bookingData: BookingRequest,
): Promise<BookingResponse> => {
  const { data } = await api.post<BookingResponse>(
    `/campers/${camperId}/booking-requests`,
    bookingData,
  );
  return data;
};
