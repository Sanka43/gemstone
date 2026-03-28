import Link from "next/link";
import { Gemstone } from "@/types/gem";
import { formatPrice } from "@/lib/gems";

type GemCardProps = {
  gem: Gemstone;
};

export function GemCard({ gem }: GemCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99] sm:hover:-translate-y-1 sm:hover:shadow-lg">
      <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[5/4]">
        <img
          src={gem.images[0]}
          alt={gem.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-3 p-4 sm:p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
          <div className="min-w-0">
            <h3 className="font-serif text-lg leading-snug text-zinc-950 sm:text-xl">{gem.name}</h3>
            <p className="mt-1 text-sm text-zinc-600">
              {gem.carat} ct • {gem.type}
            </p>
          </div>
          <span className="shrink-0 text-base font-semibold text-[#8f7744] sm:text-right sm:text-sm">
            {formatPrice(gem.price)}
          </span>
        </div>
        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-600">{gem.shortDescription}</p>
        <Link
          href={`/gems/${gem.slug}`}
          className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-zinc-300 text-sm font-medium hover:border-zinc-900 hover:bg-zinc-900 hover:text-white active:bg-zinc-800 sm:min-h-11 sm:w-auto sm:self-start sm:px-5"
        >
          View details
        </Link>
      </div>
    </article>
  );
}
