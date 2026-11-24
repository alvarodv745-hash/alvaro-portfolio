// Exporta cv-source/cv.html a PDF con Chrome/Edge en modo headless (sin dependencias).
//   node cv-source/build-cv.mjs
// Genera:
//   public/cv-alvaro-duran.pdf              → versión IA + Full Stack (la que enlaza el portfolio)
//   cv-source/out/cv-alvaro-duran-consultoria.pdf → versión para consultoras
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");

const browsers = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
];
const browser = browsers.find((p) => existsSync(p));
if (!browser) throw new Error("No se encontró Chrome ni Edge para exportar el PDF.");

const outDir = join(here, "out");
mkdirSync(outDir, { recursive: true });

const page = pathToFileURL(join(here, "cv.html")).href;
const targets = [
  { url: page, out: join(root, "public", "cv-alvaro-duran.pdf") },
  { url: `${page}?v=consultoria`, out: join(outDir, "cv-alvaro-duran-consultoria.pdf") },
];

for (const { url, out } of targets) {
  execFileSync(browser, [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--virtual-time-budget=2000",
    `--print-to-pdf=${out}`,
    url,
  ], { stdio: "ignore" });
  console.log("✔", out);
}
