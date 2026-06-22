import {
  EnvelopeSimpleIcon,
  InstagramLogoIcon,
  MapPinIcon,
  PhoneIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Solution", href: "/solution" },
  { label: "Contact Us", href: "/contact" },
  { label: "Hardware & Booth", href: "/device" },
  { label: "Blog", href: "/blog" },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold mb-3">PHOTORA</h3>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              The best self-service photobooth solution in Indonesia. Seamless,
              customizable, and automated for your business.
            </p>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPinIcon size={16} className="mt-0.5 shrink-0" />
                <span>Malang, East Java, Indonesia</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon size={16} className="shrink-0" />
                <span>+62 xxx-xxxx-xxxx</span>
              </li>
              <li className="flex items-center gap-2">
                <EnvelopeSimpleIcon size={16} className="shrink-0" />
                <span>hello@photora.id</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <Separator className="opacity-10" />
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-5 lg:px-8">
        <p className="text-xs text-secondary-foreground/50">
          &copy; {new Date().getFullYear()} Photora. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-foreground/50 hover:text-primary transition-colors"
            aria-label="YouTube"
          >
            <YoutubeLogoIcon size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-foreground/50 hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <InstagramLogoIcon size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
