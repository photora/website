import { LinkIcon } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Register",
};

const countries = [
  "Indonesia",
  "Malaysia",
  "Philippines",
  "Singapore",
  "Thailand",
  "Vietnam",
  "Other",
];

export default function RegisterPage() {
  return (
    <main className="flex flex-col gap-16 py-16">
      {/* Header */}
      <section className="mx-auto max-w-2xl px-4 text-center">
        <SectionHeading
          eyebrow="Get Started"
          title="Create Account"
          description="Join Photora to access self-service photobooth solutions for your business."
        />
      </section>

      {/* Registration Form */}
      <section className="mx-auto w-full max-w-2xl px-4">
        <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
          <form className="flex flex-col gap-6">
            {/* Personal Information */}
            <div>
              <h3 className="mb-4 text-base font-semibold">
                Personal Information
              </h3>
              <div className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Full Name
                  </label>
                  <Input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+62 812 3456 7890"
                  />
                </div>
              </div>
            </div>

            {/* Billing Address */}
            <div>
              <h3 className="mb-4 text-base font-semibold">Billing Address</h3>
              <div className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="address"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Address
                  </label>
                  <Input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Street address"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="city"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      City
                    </label>
                    <Input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="City"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="province"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      State / Province
                    </label>
                    <Input
                      type="text"
                      id="province"
                      name="province"
                      placeholder="State or province"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="postalCode"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Postal Code
                    </label>
                    <Input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      placeholder="Postal code"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="country"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select country</option>
                      {countries.map((country) => (
                        <option key={country} value={country.toLowerCase()}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit */}
            <Button type="submit" size="lg" className="mt-2 w-full">
              Create Account
            </Button>
          </form>
        </div>

        {/* LinkIcon to login */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <LinkIcon className="inline size-3.5 align-middle" weight="duotone" />{" "}
          <a
            href="/login"
            className={cn(
              buttonVariants({ variant: "link", size: "sm" }),
              "p-0 text-sm",
            )}
          >
            Login
          </a>
        </p>
      </section>
    </main>
  );
}
