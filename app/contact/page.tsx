import {
  EnvelopeSimpleIcon,
  MapPinIcon,
  MapTrifoldIcon,
  PhoneIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import {
  FadeIn,
  FadeInItem,
  FadeInStagger,
} from "@/components/motion-primitives";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Contact Us",
};

const contactItems = [
  {
    icon: MapPinIcon,
    label: "Location",
    value: "Malang, East Java, Indonesia",
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: "+62 812 3456 7890",
  },
  {
    icon: EnvelopeSimpleIcon,
    label: "Email",
    value: "hello@photora.id",
  },
];

export default function ContactPage() {
  return (
    <main className="flex flex-col gap-16 py-16">
      {/* Header */}
      <section className="mx-auto max-w-2xl px-4 text-center">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Contact Us"
          description="Start consulting with us about Self Service Photobooth solutions."
        />
      </section>

      {/* Contact Info */}
      <section className="mx-auto w-full max-w-5xl px-4">
        <FadeInStagger className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {contactItems.map((item) => (
            <FadeInItem key={item.label}>
              <div className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 text-center shadow-sm">
                <item.icon className="size-8 text-primary" weight="duotone" />
                <p className="text-sm font-medium text-muted-foreground">
                  {item.label}
                </p>
                <p className="text-base font-semibold">{item.value}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      {/* Map */}
      <section className="mx-auto w-full max-w-5xl px-4">
        <div className="flex h-64 items-center justify-center rounded-lg border border-border bg-muted/40">
          <MapTrifoldIcon
            className="size-12 text-muted-foreground"
            weight="duotone"
          />
        </div>
      </section>

      {/* Contact Form */}
      <section className="mx-auto w-full max-w-2xl px-4">
        <FadeIn>
          <SectionHeading
            eyebrow="Message Us"
            title="Send a Message"
            description="Fill out the form below and we'll get back to you shortly."
          />

          <form className="mt-8 flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="name">Personal / Company / Photobooth Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="message">How can we help you?</Label>
              <Textarea
                id="message"
                rows={5}
                placeholder="Tell us about your photobooth needs..."
              />
            </div>

            <Button type="submit" size="lg" className="mt-2 w-full">
              Submit
            </Button>
          </form>
        </FadeIn>
      </section>
    </main>
  );
}
