export default function LoadingProduct() {
  return (
    <div className="luxury-container py-8 sm:py-12">
      <div className="h-5 w-32 animate-pulse rounded bg-zinc-200" />
      <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="aspect-square animate-pulse rounded-2xl bg-zinc-200 sm:aspect-[4/5] lg:aspect-square" />
        <div className="space-y-4">
          <div className="h-4 w-24 animate-pulse rounded bg-zinc-200" />
          <div className="h-10 w-full max-w-md animate-pulse rounded bg-zinc-200" />
          <div className="h-8 w-28 animate-pulse rounded bg-zinc-200" />
          <div className="h-24 w-full animate-pulse rounded bg-zinc-200" />
          <div className="h-36 w-full animate-pulse rounded-xl bg-zinc-200" />
        </div>
      </div>
    </div>
  );
}
