import BookHero from "@/components/books/BookHero";
import BookAuroraBackground from "@/components/books/BookAuroraBackground";
import BookSynopsis from "@/components/books/BookSynopsis";
import BookQuotes from "@/components/books/BookQuotes";
import BookCTA from "@/components/books/BookCTA";
import BookTestimonials from "@/components/books/BookTestimonials";
import BookFooter from "@/components/books/BookFooter";

export default function MaisQueUmaAmizadePage() {
  return (
    <main className="min-h-screen relative">
      <BookAuroraBackground />
      <BookHero />
      <BookSynopsis />
      <BookQuotes />
      <BookCTA />
      <BookTestimonials />
      <BookFooter />
    </main>
  );
}
