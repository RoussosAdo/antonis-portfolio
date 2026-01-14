"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  y?: number; // πόσο “ανεβαίνει”
};

export default function Reveal({ children, className = "", delayMs = 0, y = 14 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

    return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${className}`}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0px)" : `translateY(${y}px)`,
        transitionDelay: `${delayMs}ms`,
      }}
    >
      {children}
    </div>
  );
}
