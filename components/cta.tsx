"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function CTA() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "15min" });
      cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, []);

  return (
    <section id="cta" className="py-40 bg-muted/50" aria-label="Call to action">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Ready to automate your finances?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join the forward-thinking e-commerce businesses using Komkits to save time and grow faster. Book a demo to see it in action.
        </p>
        <div className="flex justify-center">
          <Button
            size="lg"
            className="gap-2"
            data-cal-namespace="15min"
            data-cal-link="the-sreejith/15min"
            data-cal-config='{"layout":"month_view"}'
          >
            Book a Demo <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

