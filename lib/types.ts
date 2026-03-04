export type Project = {
  id: string;
  name: string;
  location: string;
  neighbourhood: string;
  type: string;
  units: string;
  year: string;
  priceFrom: string;
  status: string;
  statusColor: string;
  img: string;
  description: string;
  overview: string;
  features: string[];
  gallery: string[];
  address?: string;
  externalUrl?: string;
};

export type CommercialProperty = {
  id: string;
  name: string;
  location: string;
  type: string;
  size: string;
  year: string;
  status: string;
  statusColor: string;
  img?: string;
  description: string;
  anchor: string;
  overview: string;
  features: string[];
  gallery?: string[];
  address?: string;
  leaseContact?: string;
};

export type Rental = {
  id: string;
  name: string;
  location: string;
  neighbourhood: string;
  suites: string;
  available: string;
  img: string;
  features: string[];
  description: string;
  overview: string;
  gallery: string[];
  address?: string;
};

export type Hotel = {
  id: string;
  name: string;
  location: string;
  brand: string;
  rooms: string;
  year: string;
  img: string;
  description: string;
  bookingUrl: string;
  overview: string;
  features: string[];
  gallery: string[];
  address?: string;
};
