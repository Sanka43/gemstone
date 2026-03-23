import Link from "next/link";
import { Gemstone } from "@/types/gem";
import { formatPrice } from "@/lib/gems";

type GemCardProps = {
  gem: Gemstone;
};

export function GemCard({ gem }: GemCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-64 overflow-hidden">
        <img
          src={gem.images[0]}
          alt={gem.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-serif text-xl text-zinc-950">{gem.name}</h3>
            <p className="text-sm text-zinc-600">
              {gem.carat} ct • {gem.type}
            </p>
          </div>
          <span className="text-sm font-semibold text-[#8f7744]">{formatPrice(gem.price)}</span>
        </div>
        <p className="text-sm text-zinc-600">{gem.shortDescription}</p>
        <Link
          href={`/gems/${gem.slug}`}
          className="inline-flex rounded-full border border-zinc-300 px-4 py-2 text-sm hover:border-zinc-900 hover:bg-zinc-900 hover:text-white"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
