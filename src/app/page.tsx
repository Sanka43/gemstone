import Link from "next/link";
import { GemCard } from "@/components/GemCard";
import { featuredGems } from "@/lib/gems";

export default function Home() {
  return (
    <div>
      <section className="home-hero-gem relative isolate overflow-hidden">
        <div className="luxury-container flex min-h-[min(70vh,32rem)] flex-col justify-center py-14 sm:min-h-[min(75vh,36rem)] sm:py-20 md:py-28 lg:py-36">
          <p className="text-xs uppercase tracking-[0.22em] text-[#e7d4ab] sm:text-sm">Sandaru Gemstone · Badulla</p>
          <h1 className="mt-3 max-w-[18ch] font-serif text-[2rem] font-semibold leading-[1.12] text-white sm:mt-4 sm:max-w-2xl sm:text-4xl md:text-5xl lg:text-6xl">
            Sri Lankan Gems, Direct from the Hills
          </h1>
          <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-zinc-100 sm:mt-6 sm:text-base">
            We sell authentic Sri Lankan gemstones — natural stones, carefully selected and certified,
            with personal guidance and secure worldwide delivery.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/shop"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#c6a25b] px-6 text-sm font-semibold text-zinc-950 active:scale-[0.98] sm:w-auto sm:min-w-[11rem]"
            >
              Browse Gems
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 text-sm font-medium text-white backdrop-blur-sm active:bg-white/20 sm:w-auto"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section className="luxury-container py-12 sm:py-16">
        <h2 className="section-title">Featured Gems</h2>
        <p className="section-subtitle">
          A curated selection of fine gemstones from Sri Lanka.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {featuredGems.map((gem) => (
            <GemCard key={gem.id} gem={gem} />
          ))}
        </div>
      </section>

      <section className="bg-zinc-950 py-12 text-white sm:py-16">
        <div className="luxury-container">
          <h2 className="font-serif text-2xl font-semibold sm:text-3xl md:text-4xl">Why Choose Us</h2>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
            {[
              ["Certified Authenticity", "Every gemstone is supplied with trusted certification."],
              ["Natural Stones", "We offer only natural Sri Lankan stones with ethical, transparent sourcing."],
              ["Worldwide Shipping", "Secure international logistics with insured transit."],
            ].map(([title, text]) => (
              <article
                key={title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 sm:p-6"
              >
                <h3 className="font-serif text-lg text-[#e7d4ab] sm:text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300 sm:mt-3">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-container py-12 sm:py-16">
        <h2 className="section-title">Client Testimonials</h2>
        <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
          {[
            "The sapphire quality exceeded expectations. Professional and transparent service.",
            "Excellent certification process and fast delivery to Europe.",
            "A premium buying experience with clear gemstone guidance throughout.",
          ].map((quote) => (
            <blockquote
              key={quote}
              className="rounded-2xl border border-zinc-200 bg-white p-5 text-sm leading-relaxed text-zinc-700 sm:p-6 sm:text-base"
            >
              &ldquo;{quote}&rdquo;
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
}
