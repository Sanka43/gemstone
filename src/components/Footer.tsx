export function Footer() {
  return (
    <footer
      className="mt-auto border-t border-zinc-200 bg-zinc-50"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="luxury-container grid gap-8 py-10 sm:py-12 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-lg text-zinc-950 sm:text-xl">Sandaru Gemstone</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">
            Based in Badulla — we sell natural Sri Lankan gemstones with clear grading and trusted
            certification.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600">
            <li>
              <a href="tel:+94771234567" className="inline-flex min-h-11 items-center text-zinc-700 underline-offset-2 hover:text-zinc-950 hover:underline">
                +94 77 123 4567
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@sandarugemstone.com"
                className="inline-flex min-h-11 items-center break-all text-zinc-700 underline-offset-2 hover:text-zinc-950 hover:underline"
              >
                hello@sandarugemstone.com
              </a>
            </li>
            <li className="pt-1 text-zinc-600">Badulla, Sri Lanka</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">Social</h4>
          <div className="mt-3 flex flex-wrap gap-2 sm:gap-4">
            {["Instagram", "Facebook", "LinkedIn"].map((label) => (
              <a
                key={label}
                href="#"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg px-3 text-sm text-zinc-700 hover:bg-zinc-200/80 hover:text-zinc-950"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-200 py-4 text-center text-xs leading-relaxed text-zinc-500">
        Copyright {new Date().getFullYear()} Sandaru Gemstone. All rights reserved.
      </div>
    </footer>
  );
}
