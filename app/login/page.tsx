import { LinkIcon } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <main className="flex flex-col gap-16 py-16">
      {/* Header */}
      <section className="mx-auto max-w-2xl px-4 text-center">
        <SectionHeading
          eyebrow="Welcome"
          title="Welcome Back"
          description="Sign in to manage your photobooth business and access your dashboard."
        />
      </section>

      {/* Login Form */}
      <section className="mx-auto w-full max-w-2xl px-4">
        <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
          <form className="flex flex-col gap-5">
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
              <div className="mb-1.5 flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <a
                  href="/forgot-password"
                  className={cn(
                    buttonVariants({ variant: "link", size: "sm" }),
                    "p-0 text-xs",
                  )}
                >
                  Forgot Password?
                </a>
              </div>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="size-4 rounded border-border accent-primary"
              />
              <label
                htmlFor="remember"
                className="text-sm text-muted-foreground"
              >
                Remember me
              </label>
            </div>

            {/* Submit */}
            <Button type="submit" size="lg" className="mt-2 w-full">
              Login
            </Button>
          </form>
        </div>

        {/* Links */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <a
            href="/register"
            className={cn(
              buttonVariants({ variant: "link", size: "sm" }),
              "p-0 text-sm",
            )}
          >
            Register
          </a>
        </p>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          <a
            href="/verify"
            className={cn(
              buttonVariants({ variant: "link", size: "sm" }),
              "p-0 text-sm",
            )}
          >
            <LinkIcon
              className="mr-1 inline size-3.5 align-middle"
              weight="duotone"
            />
            Verify your account
          </a>
        </p>
      </section>
    </main>
  );
}
