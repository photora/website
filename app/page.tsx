import {
  ArrowRightIcon,
  ArrowsClockwiseIcon,
  BroadcastIcon,
  CameraIcon,
  CheckIcon,
  CreditCardIcon,
  CurrencyCircleDollarIcon,
  FrameCornersIcon,
  ImageIcon,
  MagicWandIcon,
  MoneyIcon,
  MonitorIcon,
  NewspaperIcon,
  PaintBrushIcon,
  PrinterIcon,
  SlidersIcon,
  TagIcon,
  TicketIcon,
  TimerIcon,
  WalletIcon,
  WindowsLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { Viewfinder } from "@/components/viewfinder";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const features = [
  {
    icon: CreditCardIcon,
    title: "Cashless Booth",
    desc: "Accept cash & digital payments seamlessly",
  },
  {
    icon: BroadcastIcon,
    title: "Live Mode",
    desc: "Real-time booth monitoring and control",
  },
  {
    icon: MonitorIcon,
    title: "Multi View",
    desc: "Multiple display views for different setups",
  },
  {
    icon: CameraIcon,
    title: "Multi Camera",
    desc: "Connect and switch between cameras",
  },
  {
    icon: FrameCornersIcon,
    title: "Frame Categories",
    desc: "Organize photo frames by category",
  },
  {
    icon: PrinterIcon,
    title: "Multiple Printing",
    desc: "Print to multiple printers simultaneously",
  },
  {
    icon: PaintBrushIcon,
    title: "Custom Branding",
    desc: "Brand your booth with custom themes",
  },
  {
    icon: TicketIcon,
    title: "Voucher Management",
    desc: "Create and manage discount vouchers",
  },
  {
    icon: TagIcon,
    title: "Price Management",
    desc: "Set flexible pricing for each package",
  },
  {
    icon: TimerIcon,
    title: "Booth Timer",
    desc: "Control session duration automatically",
  },
  {
    icon: ArrowsClockwiseIcon,
    title: "Camera Rotation",
    desc: "Rotate camera angles during sessions",
  },
  {
    icon: MagicWandIcon,
    title: "Custom Filter",
    desc: "Apply unique filters to photos",
  },
  {
    icon: ImageIcon,
    title: "Soft File Publication",
    desc: "Share digital files with customers",
  },
  {
    icon: SlidersIcon,
    title: "App & Payment Integrations",
    desc: "Connect with popular payment gateways",
  },
];

const integrations = [
  { name: "Windows", icon: WindowsLogoIcon },
  { name: "Photora Photo", icon: CameraIcon },
  { name: "Photora Paywall", icon: CreditCardIcon },
  { name: "Doku Wallet", icon: WalletIcon },
  { name: "Xendit", icon: CurrencyCircleDollarIcon },
  { name: "Midtrans", icon: MoneyIcon },
];

const photoPackages = [
  {
    name: "Lite",
    price: "150K",
    period: "/mo",
    features: [
      "Basic photo booth features",
      "Single camera support",
      "Standard frames",
      "Email support",
    ],
  },
  {
    name: "Starter",
    price: "250K",
    period: "/mo",
    features: [
      "All Lite features",
      "Multi camera support",
      "Custom frames",
      "Priority support",
      "Payment gateway integration",
    ],
  },
];

const blogPosts = [
  {
    title: "Cara Memulai Bisnis Photobooth yang Menguntungkan",
    date: "15 Jan 2025",
    excerpt:
      "Panduan lengkap untuk memulai bisnis photobooth dari nol hingga menghasilkan profit.",
  },
  {
    title: "Tips Memilih Kamera Terbaik untuk Photobooth",
    date: "10 Jan 2025",
    excerpt:
      "Rekomendasi kamera terbaik yang cocok untuk bisnis photobooth profesional.",
  },
  {
    title: "5 Strategi Marketing untuk Bisnis Photobooth",
    date: "5 Jan 2025",
    excerpt:
      "Strategi pemasaran efektif untuk meningkatkan pelanggan photobooth Anda.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      {/* ======== Hero ======== */}
      <section className="bg-secondary text-secondary-foreground overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                We&apos;re Launching
              </p>
              <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Photora Photo.
              </h1>
              <p className="mt-5 max-w-lg text-secondary-foreground/70 leading-relaxed">
                Seamless and customizable self-service photobooth system. Run
                your photobooth business with powerful automation, integrated
                payments, and real-time management.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/62xxxxxxxxxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ size: "lg" })}
                >
                  Subscribe Now
                </a>
                <Link
                  href="/solution"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <Viewfinder className="aspect-[4/3] flex items-center justify-center bg-secondary-foreground/5 rounded-lg">
                <div className="text-center text-secondary-foreground/30">
                  <CameraIcon
                    size={64}
                    className="mx-auto mb-3"
                    weight="light"
                  />
                  <p className="text-sm">Hero Image Placeholder</p>
                </div>
              </Viewfinder>
            </div>
          </div>
        </div>
      </section>

      {/* ======== Social Proof ======== */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            Used by{" "}
            <span className="font-display font-bold text-foreground text-lg">
              1,222+
            </span>{" "}
            Photobooth Brands and Branches in Indonesia
          </p>
        </div>
      </section>

      {/* ======== Product Intro ======== */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Introducing"
            title="Photora Photo"
            description="Run a flexible photobooth business with our all-in-one middleware platform. Accept payments, manage sessions, and customize every detail."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {/* Photora Application */}
            <div className="group rounded-xl border border-border bg-card p-8 transition-shadow hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <CameraIcon size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">
                Photora Application
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Cash &amp; online payment support with integrated payment
                gateways and ticketing system. Everything your booth needs in
                one app.
              </p>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "outline", size: "sm" })}
              >
                View Demo
              </a>
            </div>

            {/* Website Dashboard */}
            <div className="group rounded-xl border border-border bg-card p-8 transition-shadow hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MonitorIcon size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">
                Website Dashboard
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Track transactions, manage your app from anywhere, and control
                your booth remotely. All from a single web dashboard.
              </p>
              <Link
                href="/solution"
                className={buttonVariants({ variant: "outline", size: "sm" })}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======== About Photora — Feature Grid ======== */}
      <section className="bg-muted/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="About Photora"
            title="Innovative Technology to Ease Your Photobooth"
            description="Everything you need to run a modern, automated photobooth business."
          />

          <div className="mt-14 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-3 rounded-lg bg-card p-4 border border-border"
              >
                <div className="mt-0.5 shrink-0 text-primary">
                  <f.icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold">{f.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== App Integrations ======== */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Integrations"
            title="Works With Your Favorite Platforms"
          />

          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            {integrations.map((i) => (
              <div
                key={i.name}
                className="flex flex-col items-center gap-2 text-muted-foreground"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card">
                  <i.icon size={24} />
                </div>
                <span className="text-xs font-medium">{i.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== Pricing — Photo Packages ======== */}
      <section className="bg-muted/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Pricing"
            title="Choose Original Photo Package"
            description="Simple, transparent pricing for your photobooth business."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
            {photoPackages.map((pkg) => (
              <div
                key={pkg.name}
                className="rounded-xl border border-border bg-card p-8 relative overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
                <h3 className="font-display text-lg font-semibold">
                  {pkg.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-xs text-muted-foreground">IDR</span>
                  <span className="font-display text-4xl font-bold">
                    {pkg.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {pkg.period}
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {pkg.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckIcon
                        size={16}
                        className="mt-0.5 shrink-0 text-primary"
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/62xxxxxxxxxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants(), "mt-8 w-full")}
                >
                  Buy Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== Choose Photora — Bundles ======== */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="All in One"
            title="Choose Photora"
            description="Complete photobooth station bundles with hardware and software."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
            {[
              { name: "FocusPro", price: "650K", color: "bg-primary" },
              { name: "SnapPreneur", price: "750K", color: "bg-secondary" },
              {
                name: "Vision",
                price: "985K",
                color: "bg-primary",
                recommended: true,
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className="rounded-xl border border-border bg-card p-8 relative overflow-hidden"
              >
                <div className={`absolute inset-x-0 top-0 h-1 ${tier.color}`} />
                {tier.recommended && (
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded mb-3">
                    Recommended
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold">
                  {tier.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-xs text-muted-foreground">IDR</span>
                  <span className="font-display text-4xl font-bold">
                    {tier.price}
                  </span>
                  <span className="text-sm text-muted-foreground">/mo</span>
                </div>
                <a
                  href="https://wa.me/62xxxxxxxxxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({
                      variant: tier.recommended ? "default" : "outline",
                    }),
                    "mt-8 w-full",
                  )}
                >
                  Buy Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== Paywall CTA ======== */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Automated Payment System for Self-Service Photobooths
            </h2>
            <p className="mt-4 text-secondary-foreground/70 leading-relaxed">
              Photora Paywall handles payments automatically — customers scan,
              pay, and start their session without any staff involvement.
            </p>
            <a
              href="https://wa.me/62xxxxxxxxxx"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "mt-8")}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ======== Blog Preview ======== */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Blog"
            title="Our Latest Articles"
            description="Tips, guides, and insights for your photobooth business."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="group rounded-xl border border-border bg-card overflow-hidden transition-shadow hover:shadow-lg"
              >
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <NewspaperIcon
                    size={32}
                    className="text-muted-foreground/30"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted-foreground mb-2">
                    {post.date}
                  </p>
                  <h3 className="font-display text-base font-semibold leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className={buttonVariants({ variant: "outline" })}
            >
              Explore More <ArrowRightIcon size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======== Newsletter CTA ======== */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20 text-center">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Want Your Photobooth Business to Be More Efficient?
          </h2>
          <p className="mt-3 text-primary-foreground/80 max-w-lg mx-auto">
            Subscribe now and get the latest updates, tips, and exclusive offers
            delivered to your inbox.
          </p>
          <a
            href="https://wa.me/62xxxxxxxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg", variant: "secondary" }),
              "mt-8",
            )}
          >
            Subscribe Now
          </a>
        </div>
      </section>
    </>
  );
}
