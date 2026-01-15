"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollTopOnLoad() {
  const pathname = usePathname();

  useEffect(() => {
    // Σε route change (πχ /projects -> /) κάνε reset.
    // Αν υπάρχει hash, άστο να γίνει scroll από το browser/anchor.
    if (typeof window === "undefined") return;

    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname]);

  return null;
}
