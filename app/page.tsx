import Nav from "@/components/nav";

export default function Home() {
  return (
    <div className="grid grid-flow-row items-start min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <div className="w-full bg-background text-foreground text-center py-4 h-screen">
        <h1 className="text-2xl font-bold">Welcome to Our Website!</h1>
        <p className="text-sm">Your one-stop solution for all your needs.</p>
      </div>
    </div>
  );
}
