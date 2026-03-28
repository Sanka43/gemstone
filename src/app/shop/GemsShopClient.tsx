"use client";

import { useMemo, useState } from "react";
import { GemCard } from "@/components/GemCard";
import { gemColors, gemstones, gemTypes } from "@/lib/gems";

type FilterProps = {
  maxPrice: number;
  setMaxPrice: (n: number) => void;
  minCarat: number;
  setMinCarat: (n: number) => void;
  selectedType: string;
  setSelectedType: (s: string) => void;
  selectedColor: string;
  setSelectedColor: (s: string) => void;
  onDone?: () => void;
};

function ShopFilters({
  maxPrice,
  setMaxPrice,
  minCarat,
  setMinCarat,
  selectedType,
  setSelectedType,
  selectedColor,
  setSelectedColor,
  onDone,
}: FilterProps) {
  return (
    <>
      <h2 className="font-serif text-xl text-zinc-950 sm:text-2xl">Filters</h2>
      <div className="mt-4 space-y-5 text-sm sm:mt-5">
        <label className="block">
          <span className="mb-2 block text-zinc-700">Price up to ${maxPrice}</span>
          <input
            type="range"
            min={500}
            max={7500}
            step={100}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="h-3 w-full cursor-pointer accent-[#8f7744]"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-zinc-700">Carat from {minCarat} ct</span>
          <input
            type="range"
            min={0}
            max={6}
            step={0.1}
            value={minCarat}
            onChange={(e) => setMinCarat(Number(e.target.value))}
            className="h-3 w-full cursor-pointer accent-[#8f7744]"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-zinc-700">Gem type</span>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="min-h-12 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-base sm:text-sm"
          >
            <option>All</option>
            {gemTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-zinc-700">Color</span>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="min-h-12 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-base sm:text-sm"
          >
            <option>All</option>
            {gemColors.map((color) => (
              <option key={color}>{color}</option>
            ))}
          </select>
        </label>
      </div>
      {onDone && (
        <button
          type="button"
          onClick={onDone}
          className="mt-6 flex min-h-12 w-full items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white active:bg-zinc-800"
        >
          Apply &amp; view results
        </button>
      )}
    </>
  );
}

export function GemsShopClient() {
  const [maxPrice, setMaxPrice] = useState(7500);
  const [minCarat, setMinCarat] = useState(0);
  const [selectedType, setSelectedType] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    return gemstones.filter((gem) => {
      const matchesPrice = gem.price <= maxPrice;
      const matchesCarat = gem.carat >= minCarat;
      const matchesType = selectedType === "All" || gem.type === selectedType;
      const matchesColor = selectedColor === "All" || gem.color === selectedColor;
      return matchesPrice && matchesCarat && matchesType && matchesColor;
    });
  }, [maxPrice, minCarat, selectedType, selectedColor]);

  const filterProps: FilterProps = {
    maxPrice,
    setMaxPrice,
    minCarat,
    setMinCarat,
    selectedType,
    setSelectedType,
    selectedColor,
    setSelectedColor,
  };

  return (
    <div className="luxury-container py-8 sm:py-12">
      <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-serif text-2xl font-semibold text-zinc-950 sm:text-3xl">Shop Gemstones</h1>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 sm:text-base">
            Certified natural stones from Sri Lanka.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 sm:justify-end">
          <p className="text-sm text-zinc-500">{filtered.length} results</p>
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-zinc-300 bg-white px-5 text-sm font-semibold text-zinc-900 shadow-sm lg:hidden"
          >
            Filters
          </button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,280px),1fr]">
        <aside className="hidden h-fit rounded-2xl border border-zinc-200 bg-zinc-50 p-5 lg:block">
          <ShopFilters {...filterProps} />
        </aside>
        <section>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
            {filtered.map((gem) => (
              <GemCard key={gem.id} gem={gem} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="mt-10 rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 p-8 text-center text-sm text-zinc-600">
              No gems match these filters. Try widening price or carat range.
            </p>
          )}
        </section>
      </div>

      {filtersOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Filter gemstones">
          <button
            type="button"
            className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
            aria-label="Close filters"
            onClick={() => setFiltersOpen(false)}
          />
          <div
            className="absolute inset-x-0 bottom-0 max-h-[88vh] overflow-hidden rounded-t-2xl border border-zinc-200 bg-white shadow-2xl"
            style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
          >
            <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-3">
              <span className="font-serif text-lg text-zinc-950">Refine collection</span>
              <button
                type="button"
                className="min-h-11 min-w-11 rounded-xl text-zinc-600"
                onClick={() => setFiltersOpen(false)}
                aria-label="Close"
              >
                <svg className="mx-auto h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="max-h-[calc(88vh-3.5rem)] overflow-y-auto overscroll-contain px-4 py-4">
              <ShopFilters {...filterProps} onDone={() => setFiltersOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
