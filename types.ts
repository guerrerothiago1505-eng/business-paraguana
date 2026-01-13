
export enum RequestStatus {
  PENDING = 'Pendiente',
  IN_PROGRESS = 'En proceso',
  REQUIRE_DOCS = 'Requiere documentos',
  IN_REVIEW = 'En revisión',
  FINISHED = 'Finalizado'
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  identityVerified: boolean;
  membership: 'Basic' | 'Premium';
  documents: string[];
}

export interface BusinessRequest {
  id: string;
  title: string;
  category: string;
  status: RequestStatus;
  date: string;
  description: string;
  timeline: {
    status: RequestStatus;
    date: string;
    label: string;
    isCompleted: boolean;
  }[];
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'advisor';
  timestamp: Date;
}

export type ListingCategory = 'Propiedad' | 'Vehículo';

export interface Listing {
  id: string;
  title: string;
  price: number;
  location: string;
  category: ListingCategory;
  type: 'Venta' | 'Alquiler';
  imageUrl: string;
  description: string;
  details: any;
}
