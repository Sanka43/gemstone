export type GemType =
  | "Sapphire"
  | "Ruby"
  | "Emerald"
  | "Topaz"
  | "Alexandrite"
  | "Spinel";

export type Gemstone = {
  id: string;
  slug: string;
  name: string;
  type: GemType;
  color: string;
  price: number;
  carat: number;
  cut: string;
  clarity: string;
  origin: "Sri Lanka";
  shortDescription: string;
  description: string;
  images: string[];
  featured?: boolean;
};
