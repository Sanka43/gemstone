import { Gemstone } from "@/types/gem";

/** Wikimedia Commons — Sri Lanka sapphire/corundum, Ratnapura gem gravels (CC BY 2.0, James St. John). */
export const ratnapuraBlueCorundum =
  "https://upload.wikimedia.org/wikipedia/commons/2/29/Sapphire_%28gem_gravel_mine%2C_Ratnapura_area%2C_Sri_Lanka%29_1_%2834857678855%29.jpg";
/** Kandy gemstone presentation (CC BY-SA 3.0, Ji-Elle). */
export const kandyLooseGems =
  "https://upload.wikimedia.org/wikipedia/commons/e/eb/Sri_Lanka-Pr%C3%A9sentation_de_pierres_pr%C3%A9cieuses.jpg";
/** Kandy gems in jewelry (CC BY-SA 3.0, Ji-Elle). */
export const kandyJewelryGems =
  "https://upload.wikimedia.org/wikipedia/commons/e/ee/Sri_Lanka-Pierres_pr%C3%A9cieuses_mont%C3%A9es_en_bijoux.jpg";
/** Star of Bombay star sapphire, Sri Lanka (CC0). */
export const starOfBombaySriLanka =
  "https://upload.wikimedia.org/wikipedia/commons/3/3e/Star_of_Bombay.jpg";
/** Logan Sapphire, faceted, from Sri Lanka (CC BY-SA 2.0, Andrew Bossi). */
export const loganSapphireSriLanka =
  "https://upload.wikimedia.org/wikipedia/commons/7/72/Natural_History_Museum_-_Logan_Sapphire_%282%29.jpg";
/** Natural ruby corundum crystal (CC BY-SA 4.0; Tamil Wikipedia context). */
export const rubyCorundumCrystal =
  "https://upload.wikimedia.org/wikipedia/commons/5/54/%E0%AE%B0%E0%AF%82%E0%AE%AA%E0%AF%80.jpg";

export const whatsappNumber = "94771234567";

export const gemstones: Gemstone[] = [
  {
    id: "gem-1",
    slug: "royal-blue-ceylon-sapphire-4-8ct",
    name: "Royal Blue Ceylon Sapphire",
    type: "Sapphire",
    color: "Royal Blue",
    price: 4850,
    saleType: "buy_now",
    carat: 4.8,
    cut: "Oval Mixed Cut",
    clarity: "Eye Clean",
    origin: "Sri Lanka",
    shortDescription: "Vivid royal blue sapphire with exceptional brilliance.",
    description:
      "A premium natural Ceylon sapphire selected for its deep royal blue tone, balanced saturation, and elegant oval faceting.",
    images: [ratnapuraBlueCorundum, loganSapphireSriLanka],
    featured: true,
  },
  {
    id: "gem-2",
    slug: "pigeon-blood-ruby-3-2ct",
    name: "Pigeon Blood Ruby",
    type: "Ruby",
    color: "Vivid Red",
    price: 5350,
    saleType: "auction",
    carat: 3.2,
    cut: "Cushion Cut",
    clarity: "VS",
    origin: "Sri Lanka",
    shortDescription: "Rare vivid red ruby with rich natural glow.",
    description:
      "An intense red natural ruby with premium cushion proportions and excellent life under direct and diffused light.",
    images: [rubyCorundumCrystal, kandyLooseGems],
    featured: true,
  },
  {
    id: "gem-3",
    slug: "cornflower-sapphire-2-9ct",
    name: "Cornflower Blue Sapphire",
    type: "Sapphire",
    color: "Cornflower Blue",
    price: 3580,
    saleType: "buy_now",
    carat: 2.9,
    cut: "Round Brilliant",
    clarity: "VVS",
    origin: "Sri Lanka",
    shortDescription: "Soft cornflower hue with bright scintillation.",
    description:
      "A graceful Ceylon sapphire with a classic cornflower blue appearance, ideal for bespoke high-jewelry designs.",
    images: [starOfBombaySriLanka, ratnapuraBlueCorundum],
    featured: true,
  },
  {
    id: "gem-4",
    slug: "ceylon-padparadscha-2-4ct",
    name: "Padparadscha Sapphire",
    type: "Sapphire",
    color: "Pink-Orange",
    price: 6120,
    saleType: "auction",
    carat: 2.4,
    cut: "Pear Cut",
    clarity: "VS",
    origin: "Sri Lanka",
    shortDescription: "Delicate pink-orange rarity from Ceylon mines.",
    description:
      "A collector-grade Padparadscha sapphire featuring the sought-after lotus blend of pastel pink and orange tones.",
    images: [kandyLooseGems, kandyJewelryGems],
    featured: true,
  },
  {
    id: "gem-5",
    slug: "vivid-green-emerald-3-6ct",
    name: "Vivid Green Emerald",
    type: "Emerald",
    color: "Deep Green",
    price: 4420,
    saleType: "buy_now",
    carat: 3.6,
    cut: "Emerald Cut",
    clarity: "SI",
    origin: "Sri Lanka",
    shortDescription: "Elegant emerald with lush green tone and depth.",
    description:
      "A natural emerald with a rich green body color and structured faceting that highlights its regal character.",
    images: [kandyJewelryGems, kandyLooseGems],
  },
  {
    id: "gem-6",
    slug: "golden-topaz-5-1ct",
    name: "Imperial Golden Topaz",
    type: "Topaz",
    color: "Golden Honey",
    price: 2150,
    saleType: "buy_now",
    carat: 5.1,
    cut: "Cushion Cut",
    clarity: "VVS",
    origin: "Sri Lanka",
    shortDescription: "Warm golden topaz with crisp faceting.",
    description:
      "A radiant topaz in imperial honey gold, offering a bold size profile and high clarity for statement jewelry.",
    images: [kandyLooseGems, kandyJewelryGems],
  },
  {
    id: "gem-7",
    slug: "color-change-alexandrite-2-1ct",
    name: "Color Change Alexandrite",
    type: "Alexandrite",
    color: "Teal to Purple",
    price: 7280,
    saleType: "auction",
    carat: 2.1,
    cut: "Oval Brilliant",
    clarity: "VS",
    origin: "Sri Lanka",
    shortDescription: "Distinctive color shift under changing light.",
    description:
      "A rare alexandrite prized for strong color change, moving from cool teal in daylight to rich purple under warm light.",
    images: [loganSapphireSriLanka, starOfBombaySriLanka],
  },
  {
    id: "gem-8",
    slug: "pastel-pink-spinel-2-7ct",
    name: "Pastel Pink Spinel",
    type: "Spinel",
    color: "Blush Pink",
    price: 2890,
    saleType: "buy_now",
    carat: 2.7,
    cut: "Oval Cut",
    clarity: "Eye Clean",
    origin: "Sri Lanka",
    shortDescription: "Subtle blush spinel with refined brilliance.",
    description:
      "An elegant spinel with soft pastel saturation and excellent transparency, ideal for modern luxury settings.",
    images: [kandyJewelryGems, kandyLooseGems],
  },
];

export const gemTypes = Array.from(new Set(gemstones.map((gem) => gem.type)));
export const gemColors = Array.from(new Set(gemstones.map((gem) => gem.color)));

export const featuredGems = gemstones.filter((gem) => gem.featured).slice(0, 4);

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function findGemBySlug(slug: string): Gemstone | undefined {
  return gemstones.find((gem) => gem.slug === slug);
}
