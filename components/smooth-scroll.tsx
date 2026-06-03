"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

/**
 * Smooth scroll global via Lenis.
 * Respecte prefers-reduced-motion : si l'utilisateur préfère moins de mouvement,
 * Lenis est désactivé et le scroll natif (instantané) est conservé.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (reduced) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        anchors: { offset: -72 },
      }}
    >
      {children}
    </ReactLenis>
  );
}
