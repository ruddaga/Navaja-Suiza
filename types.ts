
export type Category = 'morphology' | 'clothing' | 'materials' | 'accessories' | 'fragrances';

export interface Collars {
  name: string;
  description: string;
  context: string;
  imageUrl: string;
}

export interface GarmentDetail {
  name: string;
  types: string[];
  avoid?: string[];
  colors: { name: string; hex: string }[];
  description: string;
  image?: string;
}

export interface GarmentSection {
  title: string;
  items: string[];
  tips?: string[];
}

export interface StylingData {
  name: string;
  morphology: {
    type: string;
    objectives: string[];
    details: Record<string, string>;
  };
  clothing: {
    formal: GarmentSection;
    semiFormal: GarmentSection;
    casual: GarmentSection;
    informal: GarmentSection;
    collars: Collars[];
  };
  accessories: GarmentSection[];
  fragrances: {
    season: string;
    types: { type: string; brands: string[] }[];
  }[];
}
