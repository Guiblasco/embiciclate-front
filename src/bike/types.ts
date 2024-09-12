export interface Bike {
  id: string;
  brand: string;
  model: string;
  wheelSize: number;
  material: string;
  specs: string;
  imageUrl: string;
  alternativeText: string;
  mode: string;
}

export interface BikeDto extends Bike {
  _id: string;
}
