export type GemType =
  | "Sapphire"
  | "Ruby"
  | "Emerald"
  | "Topaz"
  | "Alexandrite"
  | "Spinel";

export type SaleType = "buy_now" | "auction";

export type Bid = {
  id: string;
  userId: string;
  userName: string;
  verifiedBuyer: boolean;
  amount: number;
  timestamp: string;
};

export type Auction = {
  gemId: string;
  startingPrice: number;
  minimumIncrement: number;
  endTime: string;
  bids: Bid[];
};

export type MockUser = {
  id: string;
  name: string;
  verifiedBuyer: boolean;
};

export type UpcomingAuctionItem = {
  id: string;
  name: string;
  carat: number;
  startingBid: number;
  image: string;
  auctionStartTime: Date;
  slug?: string;
  rare?: boolean;
};

export type Gemstone = {
  id: string;
  slug: string;
  name: string;
  type: GemType;
  color: string;
  price: number;
  saleType: SaleType;
  carat: number;
  cut: string;
  clarity: string;
  origin: "Sri Lanka";
  shortDescription: string;
  description: string;
  images: string[];
  featured?: boolean;
};
