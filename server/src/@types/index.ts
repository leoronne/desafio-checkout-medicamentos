export interface PharmacyData {
  links: {
    self: string;
  };
  data: {
    type: string;
    id: number;
    attributes: {
      nome: string;
      lat: number;
      lon: number;
      medicamentos: Array<{
        nome: string;
        preco: number;
      }>;
    };
  };
}

export interface GetPharmaciesResponse {
  links: {
    self: string;
  };
  data: Array<{
    type: string;
    id: number;
    attributes: {
      nome: string;
      lat: number;
      lon: number;
    };
    links: {
      self: string;
    };
  }>;
}

export interface GetPharmaciesInfo {
  pharmacies: Array<{
    type: string;
    id: number;
    name: string;
    lat: number;
    lng: number;
    medicines: Array<{
      name: string;
      price: number;
    }>;
  }>;
}
