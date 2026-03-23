export function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200 bg-zinc-50">
      <div className="luxury-container grid gap-8 py-12 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-xl text-zinc-950">Ceylon Gem Gallery</h3>
          <p className="mt-3 text-sm text-zinc-600">
            Private gemstone sourcing and premium certified natural stones from Sri Lanka.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-zinc-900">Contact</h4>
          <p className="mt-3 text-sm text-zinc-600">+94 77 123 4567</p>
          <p className="text-sm text-zinc-600">hello@ceylongemgallery.com</p>
          <p className="text-sm text-zinc-600">Colombo, Sri Lanka</p>
        </div>
        <div>
          <h4 className="font-semibold text-zinc-900">Social</h4>
          <div className="mt-3 flex gap-4 text-sm text-zinc-600">
            <a href="#" className="hover:text-zinc-900">
              Instagram
            </a>
            <a href="#" className="hover:text-zinc-900">
              Facebook
            </a>
            <a href="#" className="hover:text-zinc-900">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-200 py-4 text-center text-xs text-zinc-500">
        Copyright {new Date().getFullYear()} Ceylon Gem Gallery. All rights reserved.
      </div>
    </footer>
  );
}
