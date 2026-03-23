"use client";

import { useMemo, useState } from "react";
import { GemCard } from "@/components/GemCard";
import { gemColors, gemstones, gemTypes } from "@/lib/gems";

export function GemsShopClient() {
  const [maxPrice, setMaxPrice] = useState(7500);
  const [minCarat, setMinCarat] = useState(0);
  const [selectedType, setSelectedType] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");

  const filtered = useMemo(() => {
    return gemstones.filter((gem) => {
      const matchesPrice = gem.price <= maxPrice;
      const matchesCarat = gem.carat >= minCarat;
      const matchesType = selectedType === "All" || gem.type === selectedType;
      const matchesColor = selectedColor === "All" || gem.color === selectedColor;
      return matchesPrice && matchesCarat && matchesType && matchesColor;
    });
  }, [maxPrice, minCarat, selectedType, selectedColor]);

  return (
    <div className="luxury-container py-12">
      <div className="grid gap-8 lg:grid-cols-[280px,1fr]">
        <aside className="h-fit rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <h2 className="font-serif text-2xl text-zinc-950">Filters</h2>
          <div className="mt-5 space-y-5 text-sm">
            <label className="block">
              <span className="mb-2 block text-zinc-700">Price up to ${maxPrice}</span>
              <input
                type="range"
                min={500}
                max={7500}
                step={100}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full"
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
                className="w-full"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-zinc-700">Gem type</span>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2"
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
                className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2"
              >
                <option>All</option>
                {gemColors.map((color) => (
                  <option key={color}>{color}</option>
                ))}
              </select>
            </label>
          </div>
        </aside>
        <section>
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h1 className="font-serif text-3xl text-zinc-950">Shop Gemstones</h1>
              <p className="mt-2 text-zinc-600">Certified natural stones from Sri Lanka.</p>
            </div>
            <p className="text-sm text-zinc-500">{filtered.length} results</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((gem) => (
              <GemCard key={gem.id} gem={gem} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
