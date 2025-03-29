import About from "@/components/home/about";
import LandingSection from "@/components/home/landing";
import Pricing from "@/components/home/pricing";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <>
      <Nav />
      <LandingSection />
      <About />
      <Pricing />
    </>
  );
}
