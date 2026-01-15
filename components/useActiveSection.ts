"use client";

import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds: string[], offsetPx = 120) {
  const [active, setActive] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + offsetPx;

      let current = sectionIds[0] ?? "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        if (el.offsetTop <= y) current = id;
      }

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionIds, offsetPx]);

  return active;
}
