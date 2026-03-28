import { Auction, Bid, MockUser } from "@/types/gem";

export function getCurrentHighestBid(auction: Auction): number {
  const highest = auction.bids.reduce((max, bid) => Math.max(max, bid.amount), 0);
  return Math.max(highest, auction.startingPrice);
}

export function getWinningBid(auction: Auction): Bid | null {
  if (!auction.bids.length) return null;
  return auction.bids.reduce((top, bid) => (bid.amount > top.amount ? bid : top));
}

export function isAuctionEnded(endTime: string, now = Date.now()): boolean {
  return new Date(endTime).getTime() <= now;
}

export function getTimeLeftMs(endTime: string, now = Date.now()): number {
  return Math.max(0, new Date(endTime).getTime() - now);
}

export function formatTimeLeft(totalMs: number): string {
  if (totalMs <= 0) return "00:00:00";
  const totalSeconds = Math.floor(totalMs / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds].map((part) => String(part).padStart(2, "0")).join(":");
}

export function validateBidAmount(
  inputAmount: number,
  auction: Auction,
  minimumIncrement: number,
): string | null {
  if (Number.isNaN(inputAmount) || inputAmount <= 0) {
    return "Enter a valid bid amount.";
  }

  const currentHighest = getCurrentHighestBid(auction);
  const minimumAllowed = currentHighest + minimumIncrement;
  if (inputAmount < minimumAllowed) {
    return `Bid must be at least $${minimumAllowed}.`;
  }
  return null;
}

export function applyAntiSniping(endTime: string, now = Date.now(), thresholdMs = 60_000): string {
  const currentEndMs = new Date(endTime).getTime();
  if (currentEndMs - now <= thresholdMs) {
    return new Date(currentEndMs + 60_000).toISOString();
  }
  return endTime;
}

export function createBid(
  user: MockUser,
  amount: number,
  now = new Date(),
  idSuffix = `${Date.now()}`,
): Bid {
  return {
    id: `bid-${idSuffix}`,
    userId: user.id,
    userName: user.name,
    verifiedBuyer: user.verifiedBuyer,
    amount,
    timestamp: now.toISOString(),
  };
}
