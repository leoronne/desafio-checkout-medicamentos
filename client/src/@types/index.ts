export interface PharmaciesInfo {
  type: string;
  id: number;
  name: string;
  lat: number;
  lng: number;
  medicines: Array<{
    name: string;
    price: number;
  }>;
  total: number;
  distance: number;
}

export interface GetPharmaciesInfo {
  pharmacies: PharmaciesInfo[];
}
