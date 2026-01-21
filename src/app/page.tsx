import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BiographySection from "@/components/BiographySection";
import BooksSection from "@/components/BooksSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BiographySection />
      <BooksSection />
      <BlogSection />
      <CTASection />
      <FooterSection />
      </main>
  );
}
