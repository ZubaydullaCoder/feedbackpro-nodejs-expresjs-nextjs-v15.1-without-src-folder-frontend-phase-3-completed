export default function MarketingLayout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <main className="py-10 space-y-8">{children}</main>
      </div>
    </div>
  );
}
