"use client";

import { useMemo } from "react";
import { formatTimeLeft, getTimeLeftMs, isAuctionEnded } from "@/lib/auction";
import { useNow } from "./useNow";

type AuctionCountdownProps = {
  endTime: string;
  className?: string;
  showEndedLabel?: boolean;
};

export function AuctionCountdown({
  endTime,
  className,
  showEndedLabel = true,
}: AuctionCountdownProps) {
  const now = useNow();
  const ended = now === 0 ? false : isAuctionEnded(endTime, now);
  const countdownLabel = useMemo(() => {
    if (now === 0) return "";
    return formatTimeLeft(getTimeLeftMs(endTime, now));
  }, [endTime, now]);

  if (now === 0) {
    return <span className={className}>--:--:--</span>;
  }

  if (ended && showEndedLabel) {
    return <span className={className}>Auction Ended</span>;
  }

  return <span className={className}>{countdownLabel}</span>;
}
