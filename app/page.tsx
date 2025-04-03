import Footer from "@/components/footer";
import About from "@/components/home/about";
import ContactUs from "@/components/home/contact";
import LandingSection from "@/components/home/landing";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <>
      <Nav />
      <LandingSection />
      <About />
      <ContactUs />
      <Footer />
    </>
  );
}
