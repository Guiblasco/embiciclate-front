export interface Bike {
  id: string;
  brand: string;
  model: string;
  wheelsize: number;
  material: string;
  specs: string;
  imageUrl: string;
  alternativeText: string;
  mode: string;
}

export interface BikeDto extends Bike {
  _id: string;
}
