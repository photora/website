import {
  CameraIcon,
  CloudIcon,
  CoffeeIcon,
  ConfettiIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  GearSixIcon,
  GraduationCapIcon,
  HeartIcon,
  LightningIcon,
  MusicNotesIcon,
  QrCodeIcon,
  TimerIcon,
  UsersIcon,
  WifiHighIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import {
  FadeIn,
  FadeInItem,
  FadeInStagger,
} from "@/components/motion-primitives";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Solution",
};

const useCases = [
  {
    icon: HeartIcon,
    title: "Wedding Event",
    description:
      "Capture joyful moments and create lasting memories for the happy couple and their guests.",
  },
  {
    icon: MusicNotesIcon,
    title: "Music Concert",
    description:
      "Engage fans with instant photo keepsakes that amplify the concert experience.",
  },
  {
    icon: UsersIcon,
    title: "Agency / Private Events",
    description:
      "Elevate corporate gatherings and private celebrations with seamless photo experiences.",
  },
  {
    icon: ConfettiIcon,
    title: "Festival",
    description:
      "Drive foot traffic and create shareable moments that boost your festival's visibility.",
  },
  {
    icon: CoffeeIcon,
    title: "Coffee Shop",
    description:
      "Attract new customers and increase dwell time with an interactive photobooth corner.",
  },
  {
    icon: GraduationCapIcon,
    title: "School Environment",
    description:
      "Celebrate milestones and bring communities together with memorable photo sessions.",
  },
];

const onlinePaymentSteps = [
  { icon: QrCodeIcon, label: "Scan Barcode" },
  { icon: TimerIcon, label: "30s Confirmation" },
  { icon: CameraIcon, label: "Capture" },
];

const offlinePaymentSteps = [
  { icon: QrCodeIcon, label: "Generate QR" },
  { icon: QrCodeIcon, label: "Scan QR" },
  { icon: TimerIcon, label: "30s Confirmation" },
  { icon: CameraIcon, label: "Capture" },
];

const valueProps = [
  {
    icon: CurrencyDollarIcon,
    title: "Let Your Booth Make Money",
    description:
      "Turn your photobooth into a revenue-generating asset with automated payments.",
  },
  {
    icon: LightningIcon,
    title: "Faster Process",
    description:
      "Streamlined workflows mean shorter wait times and happier customers.",
  },
  {
    icon: GearSixIcon,
    title: "Easy Management",
    description:
      "Manage your entire photobooth business from one intuitive dashboard.",
  },
  {
    icon: CreditCardIcon,
    title: "Cashierless",
    description:
      "Eliminate manual cash handling with fully automated digital payments.",
  },
  {
    icon: WifiHighIcon,
    title: "Online / Offline Payment",
    description:
      "Support both online and offline payment methods for maximum flexibility.",
  },
  {
    icon: CloudIcon,
    title: "Remote Friendly",
    description:
      "Monitor and manage your photobooths from anywhere, at any time.",
  },
];

export default function SolutionPage() {
  const whatsappUrl =
    "https://wa.me/6281234567890?text=" +
    encodeURIComponent("Hi, I'm interested in subscribing to Photora!");

  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Easier Photobooth Business Management, Lower Operational Costs.
              </h1>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "lg" }), "mt-8")}
              >
                Subscribe Now
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Business Opportunity Grid */}
      <section className="bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <SectionHeading
            eyebrow="Business Opportunity"
            title="Unlock New Revenue Streams"
            description="Photora fits into a wide variety of events and venues. Find your next opportunity."
          />
          <FadeInStagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <FadeInItem key={useCase.title}>
                <Card className="transition-shadow hover:shadow-lg h-full flex flex-col">
                  <CardHeader>
                    <useCase.icon
                      className="size-10 text-primary"
                      weight="duotone"
                    />
                    <CardTitle className="font-display text-lg font-semibold">
                      {useCase.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeInItem>
            ))}
          </FadeInStagger>
          <div className="mt-12 text-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Submit Collaboration
            </a>
          </div>
        </div>
      </section>

      {/* Work Smarter Section */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <SectionHeading
            eyebrow="Our Solution"
            title="Work smarter with powerful automation."
          />

          {/* Online Payment */}
          <FadeIn delay={0.1}>
            <div className="mt-16 rounded-xl border border-border bg-card p-8 lg:p-12">
              <h3 className="font-display text-xl font-semibold">
                Online Payment
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Customers scan a barcode, pay online, and get their photos
                captured in under 30 seconds.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                {onlinePaymentSteps.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-4">
                    <div className="flex size-14 items-center justify-center rounded-xl bg-muted/50">
                      <step.icon
                        className="size-7 text-primary"
                        weight="duotone"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Step {i + 1}
                      </p>
                      <p className="font-medium">{step.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Offline Payment */}
          <FadeIn delay={0.2}>
            <div className="mt-6 rounded-xl border border-border bg-card p-8 lg:p-12">
              <h3 className="font-display text-xl font-semibold">
                Offline Payment
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Generate a QR code for cash or transfer payments, scan to
                confirm, and capture photos instantly.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                {offlinePaymentSteps.map((step, i) => (
                  <div
                    key={`${step.label}-${i}`}
                    className="flex items-center gap-4"
                  >
                    <div className="flex size-14 items-center justify-center rounded-xl bg-muted/50">
                      <step.icon
                        className="size-7 text-primary"
                        weight="duotone"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Step {i + 1}
                      </p>
                      <p className="font-medium">{step.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <SectionHeading
            eyebrow="Why Photora"
            title="Everything You Need to Succeed"
            description="Powerful features designed to make your photobooth business run smoother."
          />
          <FadeInStagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valueProps.map((prop) => (
              <FadeInItem key={prop.title}>
                <Card className="transition-shadow hover:shadow-lg h-full flex flex-col">
                  <CardHeader>
                    <prop.icon
                      className="size-10 text-primary"
                      weight="duotone"
                    />
                    <CardTitle className="font-display text-lg font-semibold">
                      {prop.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {prop.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Event Section */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <SectionHeading
            eyebrow="Events"
            title="Make Events and Business More Fun with Photobooth Presence"
          />
          <div className="mt-16 flex items-center justify-center rounded-xl border border-border bg-muted/50 p-16">
            <p className="text-sm text-muted-foreground">
              Image placeholder — photobooth in action at an event
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Want Your Photobooth Business to Be More Efficient?
              </h2>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "lg" }), "mt-8")}
              >
                Subscribe Now
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
