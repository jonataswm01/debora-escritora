import ContactHero from "@/components/contato/ContactHero";
import ContactForm from "@/components/contato/ContactForm";
import ContactInfo from "@/components/contato/ContactInfo";
import ContactFAQ from "@/components/contato/ContactFAQ";
import ContactFooter from "@/components/contato/ContactFooter";

export default function ContatoPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactFAQ />
      <ContactFooter />
    </main>
  );
}
