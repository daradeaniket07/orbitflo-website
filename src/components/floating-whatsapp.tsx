"use client";

import { useEffect, useState } from "react";
import { site } from "@/config/site";

export function FloatingWhatsapp() {
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting), { threshold: 0.01 });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      aria-label="Chat on WhatsApp"
      className={`floating-whatsapp${footerVisible ? " is-hidden" : ""}`}
      href={site.contact.whatsapp}
      rel="noopener noreferrer"
      target="_blank"
    >
      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
        <path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.46 0 .1 5.35.1 11.94c0 2.1.55 4.15 1.6 5.96L0 24l6.26-1.64a11.9 11.9 0 0 0 5.78 1.47h.01C18.64 23.83 24 18.48 24 11.89a11.84 11.84 0 0 0-3.48-8.41ZM12.05 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.88 9.88 0 0 1-1.52-5.25c0-5.47 4.45-9.92 9.91-9.92a9.86 9.86 0 0 1 7.02 2.91 9.85 9.85 0 0 1 2.9 7.01c0 5.47-4.45 9.92-9.94 9.92Zm5.45-7.43c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.38-.27.3-1.04 1.01-1.04 2.46s1.07 2.85 1.22 3.05c.15.2 2.1 3.2 5.1 4.49.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.75-.72 2-1.42.25-.7.25-1.3.17-1.43-.08-.13-.27-.2-.57-.35Z" fill="currentColor" />
      </svg>
    </a>
  );
}
