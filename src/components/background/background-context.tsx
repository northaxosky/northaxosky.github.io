"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type BackgroundVariant = "grid" | "webgl";

type Ctx = {
  variant: BackgroundVariant;
  setVariant: (v: BackgroundVariant) => void;
};

const BackgroundContext = createContext<Ctx>({
  variant: "grid",
  setVariant: () => {},
});

export const useBackground = () => useContext(BackgroundContext);

const STORAGE_KEY = "bg";

export function BackgroundProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Deterministic on server + first client render to avoid hydration mismatch.
  const [variant, setVariantState] = useState<BackgroundVariant>("grid");

  const setVariant = useCallback((v: BackgroundVariant) => {
    setVariantState(v);
    try {
      window.localStorage.setItem(STORAGE_KEY, v);
    } catch {
      /* ignore */
    }
  }, []);

  // After mount, apply a ?bg= override (shareable preview) or the saved choice.
  useEffect(() => {
    let stored: string | null = null;
    try {
      const param = new URLSearchParams(window.location.search).get("bg");
      stored =
        param === "grid" || param === "webgl"
          ? param
          : window.localStorage.getItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    const id = requestAnimationFrame(() => {
      if (stored === "grid" || stored === "webgl") setVariantState(stored);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <BackgroundContext.Provider value={{ variant, setVariant }}>
      {children}
    </BackgroundContext.Provider>
  );
}
