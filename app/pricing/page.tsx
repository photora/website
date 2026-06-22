import {
  BroadcastIcon,
  CameraIcon,
  FrameCornersIcon,
  MagicWandIcon,
  SlidersIcon,
  TicketIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import {
  FadeIn,
  FadeInItem,
  FadeInStagger,
  ScaleIn,
} from "@/components/motion-primitives";
import { PricingTabs } from "@/components/pricing-tabs";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const chooseTiers = [
  { name: "FocusPro", price: "650K", color: "bg-primary" },
  { name: "SnapPreneur", price: "750K", color: "bg-secondary" },
  {
    name: "Vision",
    price: "985K",
    color: "bg-primary",
    recommended: true,
  },
];

const featureCards = [
  {
    icon: TicketIcon,
    title: "Voucher Discount",
    desc: "Create and distribute discount vouchers to attract more customers",
  },
  {
    icon: BroadcastIcon,
    title: "Live Mode",
    desc: "Monitor your booth sessions in real-time from the dashboard",
  },
  {
    icon: CameraIcon,
    title: "Multi Camera",
    desc: "Connect and switch between multiple cameras seamlessly",
  },
  {
    icon: FrameCornersIcon,
    title: "Frame Category",
    desc: "Organize photo frames into categories for easy selection",
  },
  {
    icon: MagicWandIcon,
    title: "Custom Filter",
    desc: "Apply unique filters and effects to every photo session",
  },
  {
    icon: SlidersIcon,
    title: "Payment Integrations",
    desc: "Connect with Xendit, Midtrans, Doku, and more gateways",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function PricingPage() {
  return (
    <>
      {/* ======== Intro Banner ======== */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center lg:px-8 lg:py-28">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Pricing
            </p>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-secondary-foreground/70 leading-relaxed">
              Run your photobooth business with powerful middleware and
              integrated payment systems. Choose the plan that fits your needs.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ======== Pricing Tabs (Photo / Paywall) ======== */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <PricingTabs />
        </div>
      </section>

      {/* ======== Choose Photora — Bundles ======== */}
      <section className="bg-muted/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="All in One"
            title="Choose Photora"
            description="Complete photobooth station bundles with hardware and software."
          />

          <FadeInStagger className="mt-14 grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
            {chooseTiers.map((tier) => (
              <ScaleIn key={tier.name}>
                <Card className="relative overflow-hidden flex flex-col h-full">
                  <div
                    className={`absolute inset-x-0 top-0 h-1 ${tier.color}`}
                  />
                  <CardHeader>
                    {tier.recommended && (
                      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded mb-1">
                        Recommended
                      </span>
                    )}
                    <CardTitle className="font-display text-lg font-semibold">
                      {tier.name}
                    </CardTitle>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="text-xs text-muted-foreground">IDR</span>
                      <span className="font-display text-4xl font-bold">
                        {tier.price}
                      </span>
                      <span className="text-sm text-muted-foreground">/mo</span>
                    </div>
                  </CardHeader>
                  <CardFooter className="mt-auto">
                    <a
                      href="https://wa.me/62xxxxxxxxxx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({
                          variant: "default",
                        }),
                        "w-full",
                      )}
                    >
                      Buy Package
                    </a>
                  </CardFooter>
                </Card>
              </ScaleIn>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ======== Features Section ======== */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Features"
            title="Our Features"
            description="Everything you need to run a modern, automated photobooth business."
          />

          <FadeInStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((f) => (
              <FadeInItem key={f.title}>
                <Card className="transition-shadow hover:shadow-lg h-full flex flex-col">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <f.icon size={24} />
                    </div>
                    <CardTitle className="font-display text-lg font-semibold">
                      {f.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {f.desc}
                    </p>
                  </CardContent>
                </Card>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>
    </>
  );
}
