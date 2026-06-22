"use client";

import {
  CameraIcon,
  CheckIcon,
  CreditCardIcon,
} from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface PricingPackage {
  name: string;
  priceMonthly: string;
  priceYearly: string;
  features: string[];
  recommended?: boolean;
}

const photoPackages: PricingPackage[] = [
  {
    name: "Lite",
    priceMonthly: "150K",
    priceYearly: "1,500K",
    features: [
      "Basic photo booth features",
      "Single camera support",
      "Standard frames",
      "Email support",
    ],
  },
  {
    name: "Starter",
    priceMonthly: "250K",
    priceYearly: "2,400K",
    features: [
      "All Lite features",
      "Multi camera support",
      "Custom frames",
      "Priority support",
      "Payment gateway integration",
    ],
  },
];

const paywallPackages: PricingPackage[] = [
  {
    name: "Basic",
    priceMonthly: "450K",
    priceYearly: "4,300K",
    features: [
      "Automated payment sessions",
      "QR code scanning",
      "Single payment gateway",
      "Basic analytics",
      "Email support",
    ],
  },
  {
    name: "Pro",
    priceMonthly: "550K",
    priceYearly: "5,200K",
    features: [
      "All Basic features",
      "Multiple payment gateways",
      "Advanced analytics",
      "Custom branding",
      "Priority support",
      "Live monitoring",
    ],
  },
  {
    name: "Advance",
    priceMonthly: "700K",
    priceYearly: "6,700K",
    recommended: true,
    features: [
      "All Pro features",
      "Multi-location support",
      "API access",
      "White-label option",
      "Dedicated account manager",
      "Custom integrations",
      "24/7 support",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function PricingTabs() {
  const [tab, setTab] = useState<"photo" | "paywall">("photo");
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const packages = tab === "photo" ? photoPackages : paywallPackages;

  return (
    <div className="mt-14">
      {/* Tab switcher */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex rounded-lg border border-border bg-card p-1">
          <Button
            variant={tab === "photo" ? "default" : "ghost"}
            onClick={() => setTab("photo")}
            className="gap-2"
          >
            <CameraIcon size={16} />
            Photora Photo
          </Button>
          <Button
            variant={tab === "paywall" ? "default" : "ghost"}
            onClick={() => setTab("paywall")}
            className="gap-2"
          >
            <CreditCardIcon size={16} />
            Photora Paywall
          </Button>
        </div>
      </div>

      {/* Billing toggle */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex items-center gap-3 rounded-lg border border-border bg-card p-1">
          <Button
            variant={billing === "monthly" ? "default" : "ghost"}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </Button>
          <Button
            variant={billing === "yearly" ? "default" : "ghost"}
            onClick={() => setBilling("yearly")}
          >
            Yearly
            <span className="ml-1.5 text-xs text-primary">Save 10%</span>
          </Button>
        </div>
      </div>

      {/* Package cards */}
      <div
        className={cn(
          "grid gap-6 mx-auto",
          tab === "photo"
            ? "sm:grid-cols-2 max-w-2xl"
            : "sm:grid-cols-3 max-w-4xl",
        )}
      >
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className="rounded-xl border border-border bg-card p-8 relative overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
            {pkg.recommended && (
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded mb-3">
                Recommended
              </span>
            )}
            <h3 className="font-display text-lg font-semibold">{pkg.name}</h3>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-xs text-muted-foreground">IDR</span>
              <span className="font-display text-4xl font-bold">
                {billing === "monthly" ? pkg.priceMonthly : pkg.priceYearly}
              </span>
              <span className="text-sm text-muted-foreground">
                {billing === "monthly" ? "/mo" : "/yr"}
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
            <Button
              render={
                <a
                  href="https://wa.me/62xxxxxxxxxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Buy ${pkg.name} package on WhatsApp`}
                >
                  <span className="sr-only">
                    {`Buy ${pkg.name} package on WhatsApp`}
                  </span>
                </a>
              }
              variant={pkg.recommended ? "default" : "outline"}
              className="mt-8 w-full"
            >
              Buy Package
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
