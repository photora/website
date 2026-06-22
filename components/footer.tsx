import {
  CameraIcon,
  InstagramLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Footer as AnimatedFooter } from "@/components/ui/modem-animated-footer";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Solution", href: "/solution" },
  { label: "Contact Us", href: "/contact" },
  { label: "Hardware & Booth", href: "/device" },
  { label: "Blog", href: "/blog" },
];

export function Footer() {
  const socialLinks = [
    {
      icon: <YoutubeLogoIcon size={24} />,
      href: "https://youtube.com",
      label: "YouTube",
    },
    {
      icon: <InstagramLogoIcon size={24} />,
      href: "https://instagram.com",
      label: "Instagram",
    },
  ];

  return (
    <AnimatedFooter
      brandName="PHOTORA"
      brandDescription="The best self-service photobooth solution in Indonesia. Seamless, customizable, and automated for your business."
      navLinks={companyLinks}
      socialLinks={socialLinks}
      brandIcon={
        <CameraIcon size={48} weight="fill" className="text-background" />
      }
      className="bg-transparent border-none mt-0 relative z-10"
    />
  );
}
