"use client";

import { ArrowRight } from "lucide-react"
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function Banner() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <div className="relative w-full bg-black py-2 text-white text-center text-sm">
      <button
        data-cal-namespace="15min"
        data-cal-link="the-sreejith/15min"
        data-cal-config='{"layout":"month_view"}'
        className="group inline-flex items-center justify-center gap-1 hover:opacity-90 transition-opacity"
      >
        <span className="font-medium">Komkits is launching soon!</span>
        <span className="hidden sm:inline text-white/60 mx-1">-</span>
        <span className="hidden sm:inline">Book a demo and Get early access</span>
        <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
      </button>
    </div>
  )
}

