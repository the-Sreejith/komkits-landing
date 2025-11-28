"use client";

import { Check, X, Home, MessageCircle, BarChart3, Search, MessageSquare, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const comparisonData = [
  {
    feature: "Time Spent",
    icon: Clock,
    typical: "Hours of manual data entry",
    us: "Fully automated in minutes",
  },
  {
    feature: "Accuracy",
    icon: BarChart3,
    typical: "Prone to human error",
    us: "99.9% AI-driven precision",
  },
  {
    feature: "Insights",
    icon: Search,
    typical: "Delayed monthly reports",
    us: "Real-time financial dashboard",
  },
  {
    feature: "Cost",
    icon: Home,
    typical: "Expensive hourly accountant rates",
    us: "Affordable monthly subscription",
  },
  {
    feature: "Integrations",
    icon: MessageSquare,
    typical: "Manual CSV exports & imports",
    us: "One-click sync with all channels",
  },
  {
    feature: "Support",
    icon: MessageCircle,
    typical: "Slow email responses",
    us: "Dedicated success manager",
  },
];

export function ComparisonSection() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-4">
                Why Choose Komkits
            </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-foreground">
            Old Way vs. The Komkits Way
          </h2>
          <p className="text-muted-foreground text-lg">
            Stop drowning in spreadsheets. See how Komkits compares to traditional bookkeeping methods.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm"
          >
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-12 bg-muted/30 divide-y md:divide-y-0 md:divide-x divide-border border-b border-border">
               <div className="p-6 md:col-span-4 font-semibold text-foreground">
                  
               </div>
               <div className="p-6 md:col-span-4 font-bold text-xl text-center text-foreground">
                  Traditional Bookkeeping
               </div>
               <div className="p-6 md:col-span-4 font-bold text-xl text-center text-foreground">
                  With Komkits
               </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-border">
              {comparisonData.map((item, index) => (
                <div 
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-border group hover:bg-muted/10 transition-colors"
                >
                  {/* Feature Name */}
                  <div className="py-2 px-6 md:col-span-4 flex items-center gap-3">
                    <div className="p-2 text-primary">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-foreground">{item.feature}</span>
                  </div>

                  {/* Typical Agency */}
                  <div className="p-6 md:col-span-4 flex items-center gap-3">
                    <div className="mt-1 min-w-[20px] shrink-0">
                      <X className="w-5 h-5 text-red-400" />
                    </div>
                    <span className="text-muted-foreground text-sm">{item.typical}</span>
                  </div>

                  {/* Us */}
                  <div className="p-6 md:col-span-4 flex items-center gap-3">
                    <div className="mt-1 min-w-[20px] shrink-0">
                      <Check className="w-5 h-5 text-green-300" />
                    </div>
                    <span className="text-foreground font-medium text-sm">{item.us}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
