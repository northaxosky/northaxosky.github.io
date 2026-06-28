"use client";

import { InstrumentGrid } from "./instrument-grid";
import { WebGLField } from "./webgl-field";
import { useBackground } from "./background-context";

/**
 * Renders the active animated background. The static CSS grid in the layout
 * stays as the SSR / no-JS fallback beneath.
 */
export function Background() {
  const { variant } = useBackground();
  return variant === "webgl" ? <WebGLField /> : <InstrumentGrid />;
}
