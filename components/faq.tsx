"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What platforms does Komkits integrate with?",
    answer:
      "Komkits integrates with major e-commerce platforms like Shopify, WooCommerce, Amazon, and Etsy. We also connect with payment gateways (Stripe, PayPal) and accounting software (Xero, QuickBooks).",
  },
  {
    question: "How accurate is the AI categorization?",
    answer:
      "Our AI is trained on millions of e-commerce transactions and achieves over 99% accuracy. It also learns from your specific business rules to get smarter over time.",
  },
  {
    question: "Can I generate invoices for my customers?",
    answer:
      "Yes! Komkits includes a full invoicing suite. You can create professional invoices, quotes, and receipts, and even set up recurring billing for subscription products.",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "Security is our top priority. We use bank-grade encryption (256-bit SSL) and strict access controls to ensure your financial data is always safe and private.",
  },
  {
    question: "What happens if I have multiple stores?",
    answer:
      "Komkits is built for multi-channel sellers. You can connect unlimited stores to a single dashboard and see your consolidated financial health in one place.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about KomKits and how it can help you.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

