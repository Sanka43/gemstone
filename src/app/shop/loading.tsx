export default function LoadingShop() {
  return (
    <div className="luxury-container py-8 sm:py-12">
      <div className="mb-8 h-24 animate-pulse rounded-2xl bg-zinc-200 sm:h-20" />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,280px),1fr]">
        <div className="hidden h-96 animate-pulse rounded-2xl bg-zinc-200 lg:block" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-[4/3] animate-pulse rounded-2xl bg-zinc-200 sm:aspect-auto sm:h-80" />
          ))}
        </div>
      </div>
    </div>
  );
}
