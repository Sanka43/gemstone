import type { Metadata } from "next";
import Link from "next/link";
import { whatsappNumber } from "@/lib/gems";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Sandaru Gemstone in Badulla for Sri Lankan gem inquiries, certification, and shipping.",
};

export default function ContactPage() {
  return (
    <div className="luxury-container py-10 sm:py-14">
      <h1 className="section-title">Contact Us</h1>
      <p className="section-subtitle">
        Questions about a stone, certification, or delivery? We reply quickly on WhatsApp and email.
      </p>

      <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6">
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[4.5rem] flex-col justify-center rounded-2xl border border-[#8f7744]/40 bg-[#c6a25b]/10 p-5 transition hover:border-[#8f7744] hover:bg-[#c6a25b]/20 active:scale-[0.99]"
        >
          <span className="text-sm font-semibold text-[#5c4a22]">WhatsApp</span>
          <span className="mt-1 text-base text-zinc-800">+94 77 123 4567</span>
          <span className="mt-2 text-xs text-zinc-600">Tap to open chat</span>
        </a>
        <a
          href="mailto:hello@sandarugemstone.com"
          className="flex min-h-[4.5rem] flex-col justify-center rounded-2xl border border-zinc-200 bg-zinc-50 p-5 transition hover:border-zinc-400 hover:bg-white active:scale-[0.99]"
        >
          <span className="text-sm font-semibold text-zinc-900">Email</span>
          <span className="mt-1 break-all text-base text-zinc-700">hello@sandarugemstone.com</span>
        </a>
      </div>

      <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-5 sm:p-8">
        <h2 className="font-serif text-xl text-zinc-950">Visit</h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          Badulla, Sri Lanka — appointments recommended for private viewings.
        </p>
        <Link
          href="/shop"
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#c6a25b] text-sm font-semibold text-zinc-950 sm:w-auto sm:px-8"
        >
          Browse the shop
        </Link>
      </div>
    </div>
  );
}
