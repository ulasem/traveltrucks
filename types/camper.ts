import { GalleryItem } from './galleryItem';

export type VehicleForm = 'alcove' | 'panel_van' | 'integrated' | 'semi_integrated';
export type Transmission = 'automatic' | 'manual';
export type Engine = 'diesel' | 'petrol' | 'hybrid' | 'electric';
export type Amenity =
  | 'ac'
  | 'bathroom'
  | 'kitchen'
  | 'tv'
  | 'radio'
  | 'refrigerator'
  | 'microwave'
  | 'gas'
  | 'water';

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  form: VehicleForm;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: Transmission;
  engine: Engine;
  amenities: Amenity[] | Amenity;
  coverImage?: string;
  description?: string;
  totalReviews: number;
  gallery?: GalleryItem[];
  createdAt?: string;
  updatedAt?: string;
}
