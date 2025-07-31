export interface Property {
  id: string;
  title: string;
  type: string;
  price: number;
  location: string;
  description: string;
  coordinates?: { lat: number; lng: number };
}
