"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import * as React from "react"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { getCalApi } from "@calcom/embed-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Features", href: "#features" },
  { name: "How it Works", href: "#pipeline" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false)

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "15min" });
      cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero section element
      const heroSection = document.querySelector('section[class*="py-20"]') ||
        document.querySelector('section:first-of-type')

      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom
        // Check if we've scrolled past the hero section
        setHasScrolledPastHero(window.scrollY > heroBottom)
      } else {
        // Fallback: show button after scrolling 100px
        setHasScrolledPastHero(window.scrollY > 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Check on mount in case page is already scrolled
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto max-w-7xl flex h-14 items-center px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center flex-1">
          <Link href="/" className="flex items-center space-x-2" aria-label="Komkits - Home">
            <Image
              src="/logo.png"
              alt="Komkits - AI-Powered E-commerce Bookkeeping"
              width={120}
              height={32}
              className="h-8 w-auto block dark:hidden"
              priority
            />
            <Image
              src="/logo-dark.png"
              alt="Komkits - AI-Powered E-commerce Bookkeeping"
              width={120}
              height={32}
              className="h-8 w-auto hidden dark:block"
              priority
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 flex-1 justify-end">
          <div className={cn(
            "hidden md:flex items-center gap-4 transition-opacity duration-300",
            hasScrolledPastHero ? "opacity-100" : "opacity-0 pointer-events-none"
          )}>
            <Button
              data-cal-namespace="15min"
              data-cal-link="the-sreejith/15min"
              data-cal-config='{"layout":"month_view"}'
            >
              Book a Demo
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 flex flex-col gap-2">
                  <Button
                    className="justify-start"
                    data-cal-namespace="15min"
                    data-cal-link="the-sreejith/15min"
                    data-cal-config='{"layout":"month_view"}'
                  >
                    Book a Demo
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

