import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Alex Chen",
    username: "E-com Founder",
    body: "Komkits saved me at least 15 hours a week. The automatic reconciliation with Shopify is a lifesaver.",
    img: "https://avatar.vercel.sh/alex",
  },
  {
    name: "Sarah Jones",
    username: "Finance Manager",
    body: "Finally a tool that understands multi-channel selling. I can see all our Amazon and WooCommerce sales in one place.",
    img: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "Mike Ross",
    username: "Dropshipper",
    body: "The AI categorization is spot on. It learned my suppliers instantly and now I don't have to touch a thing.",
    img: "https://avatar.vercel.sh/mike",
  },
  {
    name: "Emily White",
    username: "Agency Owner",
    body: "We manage multiple stores for clients and Komkits makes reporting a breeze. Highly recommended.",
    img: "https://avatar.vercel.sh/emily",
  },
  {
    name: "David Kim",
    username: "SaaS Founder",
    body: "Invoicing was a pain before. Now it's automated and I get paid faster. The dashboard is beautiful too.",
    img: "https://avatar.vercel.sh/david",
  },
  {
    name: "Lisa Park",
    username: "Retail Business",
    body: "The real-time sync across all our channels is incredible. No more manual data entry!",
    img: "https://avatar.vercel.sh/lisa",
  },
];

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-96 min-h-[260px] mx-5 cursor-pointer overflow-hidden rounded-xl border p-10",
        "border-gray-200 bg-white hover:bg-gray-50 shadow-sm",
        "dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700",
        "flex flex-col",
      )}
    >
      <div className="absolute -top-4 left-6 text-[8rem] leading-none font-serif text-gray-100/50 dark:text-gray-700/50 select-none pointer-events-none">
        &quot;
      </div>
      <blockquote className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 grow relative z-10">
        {body}
      </blockquote>
      <div className="mt-auto pt-2 flex flex-row items-center gap-3">
        <img className="rounded-full" width="40" height="40" alt={`${name} - ${username} review`} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-base font-semibold text-gray-900 dark:text-white">
            {name}
          </figcaption>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{username}</p>
        </div>
      </div>
    </figure>
  );
};

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-neutral-900" aria-label="Customer testimonials">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="mx-auto max-w-4xl text-3xl font-medium tracking-tight sm:text-5xl md:text-6xl mb-4 text-gray-900 dark:text-white">
          Trusted by E-commerce <br /> Businesses Worldwide
        </h2>
      </div>

      <div className="relative flex w-full items-center justify-center overflow-hidden py-10">
        <Marquee pauseOnHover className="[--duration:40s] [--gap:1rem]">
          {reviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r from-gray-50 dark:from-neutral-900"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l from-gray-50 dark:from-neutral-900"></div>
      </div>
    </section>
  );
}

