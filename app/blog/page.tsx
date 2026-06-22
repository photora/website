import {
  CaretLeftIcon,
  CaretRightIcon,
  NewspaperIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Link from "next/link";
import { SearchInput } from "@/components/search-input";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const blogPosts = [
  {
    title: "Cara Memulai Bisnis Photobooth yang Menguntungkan",
    date: "15 Jan 2025",
    author: "Photora",
    excerpt:
      "Panduan lengkap untuk memulai bisnis photobooth dari nol hingga menghasilkan profit yang konsisten.",
  },
  {
    title: "Tips Memilih Kamera Terbaik untuk Photobooth",
    date: "10 Jan 2025",
    author: "Photora",
    excerpt:
      "Rekomendasi kamera terbaik yang cocok untuk bisnis photobooth profesional di Indonesia.",
  },
  {
    title: "5 Strategi Marketing untuk Bisnis Photobooth",
    date: "5 Jan 2025",
    author: "Photora",
    excerpt:
      "Strategi pemasaran efektif untuk meningkatkan pelanggan dan pendapatan bisnis photobooth Anda.",
  },
  {
    title: "Panduan Lengkap Setup Photobooth di Event",
    date: "28 Des 2024",
    author: "Photora",
    excerpt:
      "Langkah demi langkah menyiapkan photobooth untuk acara wedding, birthday, dan corporate event.",
  },
  {
    title: "Cara Mengoptimalkan Keuntungan dari Photobooth",
    date: "20 Des 2024",
    author: "Photora",
    excerpt:
      "Tips dan trik untuk memaksimalkan pendapatan dari bisnis photobooth yang sudah berjalan.",
  },
  {
    title: "Tren Desain Frame Photobooth 2025",
    date: "15 Des 2024",
    author: "Photora",
    excerpt:
      "Kumpulan tren desain frame photobooth terbaru yang sedang populer di kalangan pelanggan.",
  },
  {
    title: "Cara Memilih Software Photobooth yang Tepat",
    date: "10 Des 2024",
    author: "Photora",
    excerpt:
      "Perbandingan fitur dan harga software photobooth untuk membantu Anda memilih yang terbaik.",
  },
  {
    title: "Membangun Brand Photobooth yang Berkesan",
    date: "5 Des 2024",
    author: "Photora",
    excerpt:
      "Panduan branding untuk bisnis photobooth agar lebih dikenal dan dipercaya pelanggan.",
  },
  {
    title: "Manfaat Integrasi Pembayaran Digital untuk Photobooth",
    date: "1 Des 2024",
    author: "Photora",
    excerpt:
      "Mengapa integrasi pembayaran digital menjadi kunci sukses bisnis photobooth masa kini.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-16 py-16">
      {/* Header */}
      <section className="mx-auto max-w-2xl px-4 text-center">
        <SectionHeading
          eyebrow="Blog"
          title="Blog"
          description="Tips, guides, and insights for your photobooth business."
        />
        <nav className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">Blog</span>
        </nav>
      </section>

      {/* Search */}
      <section className="mx-auto w-full max-w-2xl px-4">
        <SearchInput placeholder="Search articles..." />
      </section>

      {/* Blog Grid */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="group rounded-xl border border-border bg-card overflow-hidden transition-shadow hover:shadow-lg"
            >
              <div className="aspect-video bg-muted flex items-center justify-center">
                <NewspaperIcon size={32} className="text-muted-foreground/30" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span>{post.author}</span>
                  <span className="text-border">|</span>
                  <span>{post.date}</span>
                </div>
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
      </section>

      {/* Pagination */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <nav className="flex items-center justify-center gap-2">
          <span
            className={cn(
              buttonVariants({ variant: "outline", size: "icon-sm" }),
              "pointer-events-none opacity-50",
            )}
          >
            <CaretLeftIcon size={16} />
          </span>
          <span
            className={cn(
              buttonVariants({ variant: "default", size: "icon-sm" }),
            )}
          >
            1
          </span>
          <span
            className={cn(
              buttonVariants({ variant: "outline", size: "icon-sm" }),
            )}
          >
            2
          </span>
          <span
            className={cn(
              buttonVariants({ variant: "outline", size: "icon-sm" }),
            )}
          >
            3
          </span>
          <span
            className={cn(
              buttonVariants({ variant: "outline", size: "icon-sm" }),
            )}
          >
            <CaretRightIcon size={16} />
          </span>
        </nav>
      </section>
    </div>
  );
}
