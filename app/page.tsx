import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsBanner from "@/components/StatsBanner";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
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
        <StatsBanner />
        <Services />
        <HowItWorks />
        <ServiceArea />
        <Booking />
        <QuoteForm />
        <QRCodeSection />
      </main>
      <ContactFooter />
    </>
  );
}
