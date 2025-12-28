"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";

export function Hero() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "15min" });
      cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, []);
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section id="hero" className="relative overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36" aria-label="Hero section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 p-1 pr-2 backdrop-blur-sm">
              <div className="flex -space-x-2 pl-2">
                {[
                  { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&dpr=2&q=80", alt: "E-commerce business owner testimonial" },
                  { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&dpr=2&q=80", alt: "Online store manager testimonial" },
                  { src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=64&h=64&dpr=2&q=80", alt: "Digital entrepreneur testimonial" },
                ].map((user, i) => (
                  <img
                    key={i}
                    src={user.src}
                    alt={user.alt}
                    className="h-6 w-6 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Join 3k+ members
              </span>
              <Button
                size="sm"
                className="ml-2 h-7 rounded-full bg-blue-600 px-3 text-xs font-semibold text-white hover:bg-blue-700"
                onClick={() => window.open("https://cal.com/the-sreejith/15min", "_blank")}
              >
                Join Waitlist
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl max-w-4xl"
          >
            Automate your <br className="hidden sm:block" /> Ecommerce Bookkeeping with AI
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            The all-in-one finance OS for e-commerce. Integrate your stores, track customers & suppliers, generate invoices, and let AI handle the rest.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="mt-8 flex gap-4"
          >
            <Button
              size="lg"
              className="bg-black hover:bg-gray-900 text-white"
              data-cal-namespace="15min"
              data-cal-link="the-sreejith/15min"
              data-cal-config='{"layout":"month_view"}'
            >
              Book a Demo
            </Button>
          </motion.div>

          <motion.p
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="mt-4 text-sm text-muted-foreground"
          >
            Platform under development. Secure early access today.
          </motion.p>

          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="relative mt-16 w-full max-w-5xl rounded-xl border border-border shadow-2xl"
          >
            <div className="aspect-video overflow-hidden rounded-xl bg-muted/50 flex items-center justify-center">
              {/* Placeholder for the dashboard image */}
              <div className="text-muted-foreground font-medium">Komkits Dashboard Preview</div>
            </div>
            <BorderBeam size={250} duration={12} delay={9} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

