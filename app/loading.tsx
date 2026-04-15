export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="relative h-24 w-24">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-cyan-400/20 border-t-cyan-400" />
        <div className="absolute inset-3 animate-pulse rounded-full bg-cyan-400/20" />
      </div>
    </div>
  );
}
