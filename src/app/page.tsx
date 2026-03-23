import Link from "next/link";
import { GemCard } from "@/components/GemCard";
import { featuredGems } from "@/lib/gems";

export default function Home() {
  return (
    <div>
      <section
        className="relative isolate overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.55)), url(https://images.unsplash.com/photo-1542834369-f10ebf06d3e0?auto=format&fit=crop&w=1800&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="luxury-container py-28 text-white md:py-36">
          <p className="text-sm uppercase tracking-[0.22em] text-[#e7d4ab]">Sri Lanka Since 1989</p>
          <h1 className="mt-4 max-w-2xl font-serif text-5xl leading-tight md:text-6xl">
            Authentic Ceylon Gemstones
          </h1>
          <p className="mt-6 max-w-xl text-zinc-100">
            Hand-selected natural gems, independently certified and prepared for secure worldwide
            delivery with private concierge support.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-flex rounded-full bg-[#c6a25b] px-6 py-3 text-sm font-medium text-black hover:bg-[#e7d4ab]"
          >
            Browse Gems
          </Link>
        </div>
      </section>

      <section className="luxury-container py-16">
        <h2 className="section-title">Featured Gems</h2>
        <p className="section-subtitle">A curated collection of highly desirable Ceylon gemstones.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredGems.map((gem) => (
            <GemCard key={gem.id} gem={gem} />
          ))}
        </div>
      </section>

      <section className="bg-zinc-950 py-16 text-white">
        <div className="luxury-container">
          <h2 className="font-serif text-3xl md:text-4xl">Why Choose Us</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Certified Authenticity", "Every gemstone is supplied with trusted certification."],
              ["Natural Stones", "We source only natural Ceylon stones with ethical handling."],
              ["Worldwide Shipping", "Secure international logistics with insured transit."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                <h3 className="font-serif text-xl text-[#e7d4ab]">{title}</h3>
                <p className="mt-3 text-sm text-zinc-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-container py-16">
        <h2 className="section-title">Client Testimonials</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            "The sapphire quality exceeded expectations. Professional and transparent service.",
            "Excellent certification process and fast delivery to Europe.",
            "A premium buying experience with clear gemstone guidance throughout.",
          ].map((quote) => (
            <blockquote key={quote} className="rounded-2xl border border-zinc-200 p-6 text-zinc-700">
              "{quote}"
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
}
