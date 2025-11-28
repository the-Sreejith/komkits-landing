import {
  BrainCircuit,
  ShieldCheck,
  Zap,
  Settings2,
} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";

const features = [
  {
    Icon: BrainCircuit,
    name: "AI-Powered Automation",
    description: "Automatically categorize transactions, reconcile accounts, and detect anomalies with our advanced AI bookkeeping engine.",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute right-0 top-0 h-[300px] w-[600px] border-none transition-all duration-300 ease-out mask-[linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
         <div className="mx-auto mt-10 h-full w-full max-w-[90%] rounded-tl-xl border bg-background/50 p-4 shadow-2xl">
             <div className="flex w-full gap-2 mb-4">
               <div className="h-2 w-2 rounded-full bg-red-500" />
               <div className="h-2 w-2 rounded-full bg-yellow-500" />
               <div className="h-2 w-2 rounded-full bg-green-500" />
             </div>
             <div className="space-y-2">
               <div className="h-2 w-3/4 rounded-lg bg-muted" />
               <div className="h-2 w-full rounded-lg bg-muted" />
               <div className="h-2 w-5/6 rounded-lg bg-muted" />
               <div className="h-2 w-1/2 rounded-lg bg-muted" />
             </div>
             <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="h-20 rounded-lg bg-muted/50" />
                <div className="h-20 rounded-lg bg-muted/50" />
             </div>
         </div>
      </div>
    ),
    className: "lg:col-span-1",
  },
  {
    Icon: ShieldCheck,
    name: "Customer & Supplier Tracking",
    description: "Keep detailed records of all your customers and suppliers. Track payment history, manage contacts, and streamline communication.",
    href: "#",
    cta: "Learn more",
    background: (
        <div className="absolute right-0 top-0 h-[300px] w-[600px] border-none transition-all duration-300 ease-out mask-[linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
           <div className="mx-auto mt-10 h-full w-full max-w-[90%] rounded-tl-xl border bg-background/50 p-4 shadow-2xl">
               <div className="flex w-full gap-2 mb-4">
                 <div className="h-2 w-2 rounded-full bg-red-500" />
                 <div className="h-2 w-2 rounded-full bg-yellow-500" />
                 <div className="h-2 w-2 rounded-full bg-green-500" />
               </div>
               <div className="space-y-2">
                 <div className="h-2 w-2/3 rounded-lg bg-muted" />
                 <div className="h-2 w-full rounded-lg bg-muted" />
                 <div className="h-2 w-4/5 rounded-lg bg-muted" />
               </div>
               <div className="mt-4 h-24 rounded-lg bg-muted/30 border border-dashed border-muted-foreground/20 flex items-center justify-center">
                    <ShieldCheck className="h-8 w-8 text-muted-foreground/50" />
               </div>
           </div>
        </div>
    ),
    className: "lg:col-span-1 min-h-[380px]",
  },
  {
    Icon: Zap,
    name: "Multi-Channel Integration",
    description: "Seamlessly connect all your sales channels—Shopify, Amazon, WooCommerce, and more—into a single financial dashboard.",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute right-0 top-0 h-[300px] w-[600px] border-none transition-all duration-300 ease-out mask-[linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
        <div className="absolute right-0 top-10 h-full w-full rounded-tl-xl border bg-background/50 p-4 shadow-2xl">
            <div className="flex w-full gap-2 mb-4 border-b pb-2">
                 <div className="h-4 w-4 rounded-full bg-muted" />
                 <div className="h-4 w-24 rounded-full bg-muted/50" />
            </div>
            <div className="space-y-4">
                {["Inbox", "Drafts", "Sent", "Junk", "Trash", "Archive"].map((item, i) => (
                    <div key={item} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                             <div className="h-4 w-4 rounded bg-muted/50" />
                             <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{[128, 9, "", 23, "", ""][i]}</span>
                    </div>
                ))}
                 <div className="pt-2 border-t">
                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                             <div className="h-4 w-4 rounded bg-muted/50" />
                             <span className="text-sm text-muted-foreground">Social</span>
                        </div>
                        <span className="text-xs text-muted-foreground">972</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                             <div className="h-4 w-4 rounded bg-muted/50" />
                             <span className="text-sm text-muted-foreground">Updates</span>
                        </div>
                        <span className="text-xs text-muted-foreground">342</span>
                    </div>
                 </div>
            </div>
        </div>
      </div>
    ),
    className: "lg:col-span-1 lg:row-span-2",
  },
  {
    Icon: Settings2,
    name: "Smart Invoicing & Quotations",
    description: "Generate professional invoices and quotations in seconds. Customize templates, set up recurring billing, and track payment status automatically.",
    href: "#",
    cta: "Learn more",
    background: (
        <div className="absolute right-0 top-0 h-[300px] w-[600px] border-none transition-all duration-300 ease-out mask-[linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
             <div className="mx-auto mt-10 h-full w-full max-w-[80%] rounded-tl-xl border bg-background/50 p-4 shadow-2xl flex gap-4">
                 <div className="w-1/4 space-y-3 border-r pr-2">
                    <div className="h-2 w-full rounded-lg bg-muted" />
                    <div className="h-2 w-3/4 rounded-lg bg-muted" />
                    <div className="h-2 w-5/6 rounded-lg bg-muted" />
                    <div className="h-2 w-full rounded-lg bg-muted" />
                 </div>
                 <div className="flex-1 space-y-3">
                    <div className="h-8 w-full rounded-lg bg-muted/20" />
                    <div className="grid grid-cols-2 gap-2">
                        <div className="h-20 rounded-lg bg-muted/20" />
                        <div className="h-20 rounded-lg bg-muted/20" />
                    </div>
                     <div className="h-20 rounded-lg bg-muted/20" />
                 </div>
             </div>
        </div>
    ),
    className: "lg:col-span-2",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-4">
                Features
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Everything you need to run your <br /> E-commerce Finances
            </h3>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Komkits brings together bookkeeping, invoicing, and AI automation in one powerful platform designed for e-commerce businesses.
            </p>
        </div>
        <BentoGrid className="lg:grid-rows-2">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
