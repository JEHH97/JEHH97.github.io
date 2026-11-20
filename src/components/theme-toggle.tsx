"use client";

import { useState } from "react";

type Props = { labels: { theme: string } };

export function ThemeToggle({ labels }: Props) {
  const [dark, setDark] = useState(false);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("portfolio-theme", next ? "dark" : "light");
    } catch {
      // The visual preference still applies when storage is unavailable.
    }
    setDark(next);
  }

  return (
    <button className="icon-button" type="button" onClick={toggle} aria-label={labels.theme} title={labels.theme}>
      {dark ? (
        <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
