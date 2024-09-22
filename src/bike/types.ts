export interface BikeBase {
  brand: string;
  model: string;
  material: string;
  specs: string;
  imageUrl: string;
  alternativeText: string;
  mode: string;
}

export interface BikeDto extends BikeBase {
  _id: string;
  wheelSize: number;
}

export interface Bike extends BikeBase {
  id: string;
  wheelSize: number;
}

export interface BikeFormData extends BikeBase {
  wheelSize: string;
}
