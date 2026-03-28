export function AdminSidebar() {
  return (
    <aside className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 sm:p-5">
      <h2 className="font-serif text-xl text-zinc-950 sm:text-2xl">Admin Panel</h2>
      <nav className="mt-4 flex flex-row gap-2 overflow-x-auto pb-1 sm:mt-5 sm:flex-col sm:gap-1 sm:overflow-visible sm:pb-0">
        {["Dashboard", "Gems", "Inquiries", "Messages"].map((label) => (
          <a
            key={label}
            href="#"
            className="shrink-0 rounded-xl px-4 py-3 text-sm text-zinc-700 hover:bg-zinc-200 sm:block sm:px-3 sm:py-2.5"
          >
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
