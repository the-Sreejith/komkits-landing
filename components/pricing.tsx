"use client";

import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const plans = [
  {
    name: "STARTER",
    price: { monthly: 19, yearly: 199 },
    description: "For new e-commerce stores",
    features: [
      "Upto 2 Users",
      "Up to 1,000 orders/mo",
      "2 Integrations (Shopify, etc)",
      "Basic AI Categorization",
      "Monthly Reports",
      "Email Support",
    ],
    popular: false,
  },
  {
    name: "GROWTH",
    price: { monthly: 49, yearly: 399 },
    description: "For scaling businesses",
    features: [
      "Upto 10 Users",
      "Up to 10,000 orders/mo",
      "5 Integrations",
      "Advanced AI & Rules",
      "Real-time Dashboard",
      "Invoicing & Quotations",
    ],
    popular: true,
  },
  {
    name: "SCALE",
    price: { monthly: 99, yearly: 899 },
    description: "For high-volume sellers",
    features: [
      "Unlimited Users",
      "Unlimited orders",
      "Unlimited Integrations",
      "Multi-currency Support",
      "Advanced AI & Rules",
      "Priority Support",
      "Monthly Reports",
      "Email Support",
    ],
    popular: false,
  },
];

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "15min" });
      cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, []);

  return (
    <section id="pricing" className="py-24 bg-background" aria-label="Pricing plans">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase">Pricing</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Simple, transparent pricing
          </h3>

          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={cn("text-sm font-medium", billingCycle === "monthly" ? "text-foreground" : "text-muted-foreground")}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(prev => prev === "monthly" ? "yearly" : "monthly")}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-input transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <span
                className={cn(
                  "inline-block h-4 w-4 transform rounded-full bg-primary transition-transform",
                  billingCycle === "yearly" ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
            <span className={cn("text-sm font-medium", billingCycle === "yearly" ? "text-foreground" : "text-muted-foreground")}>
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col p-8 bg-card rounded-2xl border",
                plan.popular ? "border-primary shadow-lg scale-105 z-10" : "border-border"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  ★ Most Value
                </div>
              )}

              <div className="mb-8 text-center">
                <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                  {plan.name}
                </h4>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold">
                    ${billingCycle === "monthly" ? plan.price.monthly : Math.round(plan.price.yearly / 12)}
                  </span>
                  <span className="text-muted-foreground">/ month</span>
                </div>
                {billingCycle === "yearly" && (
                  <p className="text-sm text-muted-foreground mt-1">
                    Billed ${plan.price.yearly} yearly
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto space-y-4">
                <Button
                  className={cn("w-full", plan.popular ? "bg-black hover:bg-gray-900 text-white" : "")}
                  variant={plan.popular ? "default" : "outline"}
                  data-cal-namespace="15min"
                  data-cal-link="the-sreejith/15min"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Book a Demo
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  {plan.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

