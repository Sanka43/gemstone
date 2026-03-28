import {
  kandyLooseGems,
  loganSapphireSriLanka,
  rubyCorundumCrystal,
  starOfBombaySriLanka,
} from "@/lib/gems";
import { Auction, MockUser, UpcomingAuctionItem } from "@/types/gem";

const now = Date.now();
const inMinutes = (minutes: number) => new Date(now + minutes * 60 * 1000).toISOString();

export const mockCurrentUser: MockUser = {
  id: "user-1",
  name: "You",
  verifiedBuyer: true,
};

export const mockAuctions: Record<string, Auction> = {
  "gem-2": {
    gemId: "gem-2",
    startingPrice: 4900,
    minimumIncrement: 10,
    endTime: inMinutes(18),
    bids: [
      {
        id: "bid-1",
        userId: "user-4",
        userName: "Nadish",
        verifiedBuyer: true,
        amount: 4920,
        timestamp: inMinutes(-28),
      },
      {
        id: "bid-2",
        userId: "user-5",
        userName: "Mila",
        verifiedBuyer: false,
        amount: 4970,
        timestamp: inMinutes(-16),
      },
      {
        id: "bid-3",
        userId: "user-8",
        userName: "Ahmed",
        verifiedBuyer: true,
        amount: 5030,
        timestamp: inMinutes(-6),
      },
    ],
  },
  "gem-4": {
    gemId: "gem-4",
    startingPrice: 5800,
    minimumIncrement: 10,
    endTime: inMinutes(9),
    bids: [
      {
        id: "bid-4",
        userId: "user-6",
        userName: "Sofia",
        verifiedBuyer: true,
        amount: 5850,
        timestamp: inMinutes(-23),
      },
      {
        id: "bid-5",
        userId: "user-2",
        userName: "Kenji",
        verifiedBuyer: false,
        amount: 5920,
        timestamp: inMinutes(-3),
      },
    ],
  },
  "gem-7": {
    gemId: "gem-7",
    startingPrice: 7000,
    minimumIncrement: 10,
    endTime: inMinutes(3),
    bids: [
      {
        id: "bid-6",
        userId: "user-3",
        userName: "Lena",
        verifiedBuyer: true,
        amount: 7030,
        timestamp: inMinutes(-18),
      },
      {
        id: "bid-7",
        userId: "user-9",
        userName: "Ravi",
        verifiedBuyer: false,
        amount: 7100,
        timestamp: inMinutes(-2),
      },
    ],
  },
};

export function findAuctionByGemId(gemId: string): Auction | undefined {
  return mockAuctions[gemId];
}

const inHoursFromNow = (hours: number) => new Date(now + hours * 60 * 60 * 1000);

export const upcomingAuctions: UpcomingAuctionItem[] = [
  {
    id: "upcoming-1",
    name: "Velvet Blue Sapphire",
    carat: 3.4,
    startingBid: 4200,
    image: loganSapphireSriLanka,
    auctionStartTime: inHoursFromNow(2.5),
    slug: "royal-blue-ceylon-sapphire-4-8ct",
    rare: true,
  },
  {
    id: "upcoming-2",
    name: "Sunset Padparadscha",
    carat: 2.8,
    startingBid: 5600,
    image: kandyLooseGems,
    auctionStartTime: inHoursFromNow(5),
    slug: "ceylon-padparadscha-2-4ct",
    rare: true,
  },
  {
    id: "upcoming-3",
    name: "Imperial Crimson Ruby",
    carat: 3.1,
    startingBid: 6100,
    image: rubyCorundumCrystal,
    auctionStartTime: inHoursFromNow(8.25),
    slug: "pigeon-blood-ruby-3-2ct",
  },
  {
    id: "upcoming-4",
    name: "Electric Alexandrite",
    carat: 2.2,
    startingBid: 6800,
    image: starOfBombaySriLanka,
    auctionStartTime: inHoursFromNow(12.5),
    slug: "color-change-alexandrite-2-1ct",
    rare: true,
  },
];
