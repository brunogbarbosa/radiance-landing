// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Vercel deploy: force Nitro on with the `vercel` preset and redirect Nitro's
// output to the Vercel Build Output API v3 layout (.vercel/output/...).
// The wrapper defaults output to `dist/*` which is what breaks Vercel detection
// (NOT_FOUND / "No Output Directory named 'static'"). Vercel auto-detects
// `.vercel/output/` and ignores the Output Directory setting when present.
export default defineConfig({
  nitro: {
    preset: "vercel",
    output: {
      dir: ".vercel/output",
      publicDir: ".vercel/output/static",
      serverDir: ".vercel/output/functions/__nitro.func",
    },
  },
});
