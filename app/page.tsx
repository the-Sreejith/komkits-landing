import { Banner } from "@/components/banner";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { PipelineSection } from "@/components/pipeline-section";
import { ComparisonSection } from "@/components/comparison";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { FAQ } from "@/components/faq";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Banner />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <PipelineSection />
        <ComparisonSection />
        <Testimonials />
        <Pricing />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
