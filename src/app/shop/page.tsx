import type { Metadata } from "next";
import { GemsShopClient } from "./GemsShopClient";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse certified Sri Lankan gemstones by type, carat, color, and price at Sandaru Gemstone.",
};

export default function ShopPage() {
  return <GemsShopClient />;
}
