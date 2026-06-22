import {
  CameraIcon,
  CpuIcon,
  GraphicsCardIcon,
  MemoryIcon,
  PrinterIcon,
  WarningIcon,
  WindowsLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Hardware & Booth",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const pcSpecs = [
  {
    icon: CpuIcon,
    title: "Processor",
    items: [
      "Intel Core i5 9th Gen or newer (recommended: i7 10th Gen+)",
      "AMD Ryzen 5 3600 or newer (recommended: Ryzen 7+)",
      "Avoid Intel Celeron, Pentium, or Y-series ultra-low-power chips",
    ],
  },
  {
    icon: MemoryIcon,
    title: "RAM",
    items: [
      "Minimum: 4 GB (basic single-cam setups only)",
      "Recommended: 8 GB for smooth operation",
      "16 GB for multi-camera or high-resolution sessions",
    ],
  },
  {
    icon: GraphicsCardIcon,
    title: "GPU",
    items: [
      "NVIDIA GeForce GTX 1650 or newer (RTX 3050+ preferred)",
      "AMD Radeon RX 560 or newer (RX 6600+ preferred)",
      "Integrated graphics may struggle with live preview",
    ],
  },
  {
    icon: WindowsLogoIcon,
    title: "Operating System",
    items: [
      "Windows 10 version 1903 (May 2019 Update) or newer",
      "Windows 11 recommended for best compatibility",
      "macOS and Linux are not supported",
    ],
  },
];

const unsupportedNotes = [
  "Intel Core i5/i7 U-series (ultra-low power) may throttle under sustained load",
  "Intel Celeron / Pentium / Atom processors lack sufficient performance",
  "Older AMD A-series APUs do not meet minimum requirements",
  "Always ensure adequate ventilation to prevent thermal throttling",
];

const cameras = [
  {
    name: "Canon EOS Series",
    note: "Excellent autofocus and color science. EOS 250D, M50 Mark II, and R50 are popular choices for photobooths.",
    placeholder: "Canon EOS camera",
  },
  {
    name: "Sony Alpha Series",
    note: "Superior mirrorless performance. A6400, ZV-E10, and A7C offer great low-light capability.",
    placeholder: "Sony Alpha camera",
  },
  {
    name: "Nikon Z Series",
    note: "Outstanding image quality. Z50 and Z30 provide compact, reliable options for booth setups.",
    placeholder: "Nikon Z camera",
  },
];

const printers = [
  {
    name: "Canon SELPHY",
    note: "Compact dye-sublimation printer. Great for 4x6 prints with no ink cartridge mess. Popular models: QX10, CP1500.",
    placeholder: "Canon SELPHY printer",
  },
  {
    name: "DNP DS-RX1",
    note: "Industry-standard dye-sublimation printer. Fast, reliable, and produces high-quality 4x6 and 6x8 prints.",
    placeholder: "DNP DS-RX1 printer",
  },
  {
    name: "HiTi P525",
    note: "Professional-grade photo printer. Delivers 5x7 and 6x8 prints with vibrant colors and fast output.",
    placeholder: "HiTi P525 printer",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function DevicePage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-muted/50 pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <nav className="text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Device</span>
          </nav>
          <SectionHeading
            eyebrow="Hardware"
            title="Photobooth Device Recommendations"
            description="Everything you need to build a reliable photobooth setup. From PC specs to cameras and printers, these are the hardware picks we recommend."
            align="left"
          />
        </div>
      </section>

      {/* PC Recommendations */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Computing"
            title="PC Recommendations"
            description="Photora runs on Windows. Here are the minimum and recommended specifications for a smooth photobooth experience."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {pcSpecs.map((spec) => (
              <div
                key={spec.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <spec.icon className="size-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">
                    {spec.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {spec.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Unsupported CPUs WarningIcon */}
          <div className="mt-8 rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                <WarningIcon className="size-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">
                Unsupported &amp; Throttling CPUs
              </h3>
            </div>
            <ul className="space-y-2">
              {unsupportedNotes.map((note) => (
                <li
                  key={note}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-destructive" />
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CameraIcon Recommendations */}
      <section className="bg-muted/50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Imaging"
            title="Camera Recommendations"
            description="A good camera makes all the difference. These are the camera lines we recommend for photobooth use."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cameras.map((cam) => (
              <div
                key={cam.name}
                className="rounded-xl border border-border bg-card overflow-hidden"
              >
                {/* Placeholder image area */}
                <div className="flex aspect-[4/3] items-center justify-center bg-muted/80">
                  <CameraIcon className="size-12 text-muted-foreground/50" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {cam.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cam.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PrinterIcon Recommendations */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Printing"
            title="Photobooth Printers"
            description="These dye-sublimation printers are trusted by photobooth operators worldwide for fast, high-quality prints."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {printers.map((p) => (
              <div
                key={p.name}
                className="rounded-xl border border-border bg-card overflow-hidden"
              >
                {/* Placeholder image area */}
                <div className="flex aspect-[4/3] items-center justify-center bg-muted/80">
                  <PrinterIcon className="size-12 text-muted-foreground/50" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {p.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
