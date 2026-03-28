import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InquiryButtons } from "@/components/InquiryButtons";
import { findGemBySlug, formatPrice, gemstones } from "@/lib/gems";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return gemstones.map((gem) => ({ slug: gem.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const gem = findGemBySlug(slug);
  if (!gem) return { title: "Gem not found" };
  return {
    title: gem.name,
    description: gem.shortDescription,
  };
}

export default async function GemDetailPage({ params }: Props) {
  const { slug } = await params;
  const gem = findGemBySlug(slug);
  if (!gem) notFound();

  return (
    <div className="luxury-container py-8 sm:py-12">
      <Link
        href="/shop"
        className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#8f7744] hover:text-[#5c4a22]"
      >
        <span aria-hidden>←</span> Back to shop
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-3">
          <div className="aspect-square overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 sm:aspect-[4/5] lg:aspect-square">
            <img
              src={gem.images[0]}
              alt={gem.name}
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {gem.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {gem.images.slice(1).map((src, i) => (
                <div
                  key={src}
                  className="aspect-square overflow-hidden rounded-xl border border-zinc-200"
                >
                  <img
                    src={src}
                    alt={`${gem.name} view ${i + 2}`}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 640px) 22vw, 120px"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="text-sm text-zinc-500">
            {gem.type} • {gem.color} • {gem.carat} ct
          </p>
          <h1 className="mt-2 font-serif text-2xl font-semibold leading-tight text-zinc-950 sm:text-3xl lg:text-4xl">
            {gem.name}
          </h1>
          <p className="mt-4 text-2xl font-semibold text-[#8f7744] sm:text-3xl">{formatPrice(gem.price)}</p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">{gem.description}</p>

          <dl className="mt-6 grid grid-cols-2 gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm sm:gap-4 sm:p-5">
            <div>
              <dt className="text-zinc-500">Cut</dt>
              <dd className="mt-0.5 font-medium text-zinc-900">{gem.cut}</dd>
            </div>
            <div>
              <dt className="text-zinc-500">Clarity</dt>
              <dd className="mt-0.5 font-medium text-zinc-900">{gem.clarity}</dd>
            </div>
            <div>
              <dt className="text-zinc-500">Origin</dt>
              <dd className="mt-0.5 font-medium text-zinc-900">{gem.origin}</dd>
            </div>
            <div>
              <dt className="text-zinc-500">Sale</dt>
              <dd className="mt-0.5 font-medium capitalize text-zinc-900">
                {gem.saleType.replace("_", " ")}
              </dd>
            </div>
          </dl>

          <div className="mt-8">
            <InquiryButtons gemName={gem.name} />
          </div>
        </div>
      </div>
    </div>
  );
}
