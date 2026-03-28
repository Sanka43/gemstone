import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Sandaru Gemstone — Sri Lankan gems from Badulla and the island's gemstone heritage.",
};

export default function AboutPage() {
  return (
    <div className="luxury-container py-10 sm:py-14">
      <h1 className="section-title">Sandaru Gemstone</h1>
      <p className="section-subtitle">
        Sri Lanka has been known as Ratna-Dweepa, the island of gems, for centuries. Its unique
        geology yields sapphires, rubies, spinels, and other precious stones admired worldwide.
      </p>

      <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6">
        <article className="rounded-2xl border border-zinc-200 p-5 sm:p-6">
          <h2 className="font-serif text-xl text-zinc-950 sm:text-2xl">Our Brand Story</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:mt-4 sm:text-base">
            Sandaru Gemstone is based in Badulla, at the heart of Sri Lanka&apos;s gem country. We
            connect collectors and jewelers with authentic Sri Lankan gemstones through transparent
            sourcing and personal guidance.
          </p>
        </article>
        <article className="rounded-2xl border border-zinc-200 p-5 sm:p-6">
          <h2 className="font-serif text-xl text-zinc-950 sm:text-2xl">Built on Trust</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:mt-4 sm:text-base">
            Every gemstone in our collection is natural, carefully graded, and accompanied by
            trusted certification details. We prioritize long-term relationships over quick sales.
          </p>
        </article>
      </div>
    </div>
  );
}
