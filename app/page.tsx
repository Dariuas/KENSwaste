import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ServiceArea from "@/components/ServiceArea";
import Booking from "@/components/Booking";
import QuoteForm from "@/components/QuoteForm";
import QRCodeSection from "@/components/QRCodeSection";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <ServiceArea />
        <Booking />
        <QuoteForm />
        <QRCodeSection />
      </main>
      <ContactFooter />
    </>
  );
}
