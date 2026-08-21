import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { getPost, POSTS, type Block } from "@/lib/blog";
import { SITE_URL } from "@/lib/services";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import Magnetic from "@/components/Magnetic";
import JsonLd from "@/components/JsonLd";
import { formatPostDate } from "../date";
import type { ReactNode } from "react";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [`${SITE_URL}`],
    },
  };
}

/* Renders **bold** and [text](url) inside content strings. */
function Rich({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;

  const pushText = (chunk: string) => {
    chunk.split(/\*\*([^*]+)\*\*/g).forEach((seg, i) => {
      if (!seg) return;
      nodes.push(
        i % 2 === 1 ? (
          <strong key={`b${k++}`} className="text-ink font-medium">
            {seg}
          </strong>
        ) : (
          <span key={`t${k++}`}>{seg}</span>
        )
      );
    });
  };

  while ((m = linkRe.exec(text))) {
    pushText(text.slice(last, m.index));
    const [, label, href] = m;
    nodes.push(
      href.startsWith("/") ? (
        <Link
          key={`l${k++}`}
          href={href}
          className="underline decoration-brass/60 underline-offset-4 hover:text-brass-deep transition-colors"
        >
          {label}
        </Link>
      ) : (
        <a
          key={`l${k++}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-brass/60 underline-offset-4 hover:text-brass-deep transition-colors"
        >
          {label}
        </a>
      )
    );
    last = m.index + m[0].length;
  }
  pushText(text.slice(last));
  return <>{nodes}</>;
}

function BlockView({ b }: { b: Block }) {
  switch (b.t) {
    case "h2":
      return (
        <h2 className="display text-3xl md:text-4xl leading-tight mt-12 md:mt-14 mb-5">
          <Rich text={b.x} />
        </h2>
      );
    case "h3":
      return (
        <h3 className="display text-2xl md:text-[26px] leading-tight mt-9 mb-4">
          <Rich text={b.x} />
        </h3>
      );
    case "p":
      return (
        <p className="text-[15px] md:text-[16px] leading-[1.85] text-ink-soft mb-5">
          <Rich text={b.x} />
        </p>
      );
    case "ul":
      return (
        <ul className="space-y-3 mb-6 mt-1">
          {b.x.map((li, i) => (
            <li
              key={i}
              className="relative pl-6 text-[15px] md:text-[16px] leading-[1.8] text-ink-soft"
            >
              <span className="absolute left-0 top-[0.72em] h-1.5 w-1.5 rounded-full bg-brass" />
              <Rich text={li} />
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="space-y-4 mb-6 mt-1">
          {b.x.map((li, i) => (
            <li
              key={i}
              className="relative pl-10 text-[15px] md:text-[16px] leading-[1.8] text-ink-soft"
            >
              <span className="absolute left-0 top-0.5 grid place-items-center h-6 w-6 rounded-full bg-ink text-paper text-[11px] font-medium">
                {i + 1}
              </span>
              <Rich text={li} />
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <div className="my-7 card-deep border-l-2 border-l-brass px-5 py-4 md:px-6 md:py-5">
          <p className="text-[14px] md:text-[15px] leading-relaxed text-ink">
            <Rich text={b.x} />
          </p>
        </div>
      );
    case "quote":
      return (
        <figure className="my-8 pl-5 md:pl-6 border-l-2 border-brass/60">
          <blockquote className="display italic text-xl md:text-2xl leading-snug text-ink">
            &ldquo;<Rich text={b.x} />&rdquo;
          </blockquote>
          {b.by && (
            <figcaption className="mt-3 text-[12px] tracking-wide text-ink-mute">
              — {b.by}
            </figcaption>
          )}
        </figure>
      );
  }
}

export default async function PostPage({ params }: { params: Params }) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <SmoothScroll>
      <ScrollProgress />
      <Cursor />
      <Nav onHome={false} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.date,
          url: `${SITE_URL}/blog/${post.slug}`,
          mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
          author: {
            "@type": "Person",
            "@id": `${SITE_URL}/#person`,
            name: "Manthar Ali",
          },
          publisher: { "@id": `${SITE_URL}/#person` },
          keywords: post.keywords.join(", "),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Manthar Ali", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
            { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
          ],
        }}
      />

      <main className="relative">
        {/* Header */}
        <section className="relative isolate overflow-hidden pt-32 md:pt-44 pb-10 md:pb-14">
          <div className="absolute inset-0 -z-10 grid-dots" />
          <div className="mx-auto w-full max-w-[860px] px-5 md:px-8">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 flex-wrap">
                <Link
                  href="/blog"
                  className="hover:text-brass-deep transition-colors"
                >
                  Field Notes
                </Link>
                <span className="inline-block h-px w-6 bg-line-strong" />
                {formatPostDate(post.date)} · {post.minutes} min read
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="display mt-6 text-4xl md:text-6xl leading-[1.02]">
                {post.title}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-ink-soft">
                {post.lede}
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-8 flex items-center gap-3 hairline-t pt-6">
                <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full hairline-strong">
                  <Image
                    src="/manthar.jpeg"
                    alt="Manthar Ali"
                    fill
                    sizes="40px"
                    className="object-cover object-center grayscale-[0.15]"
                  />
                </span>
                <div>
                  <p className="text-[13px] font-medium">Manthar Ali</p>
                  <p className="text-[11px] text-ink-mute">
                    GBP specialist · 285+ Fiverr reviews · 4.9
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Body */}
        <section className="mx-auto w-full max-w-[860px] px-5 md:px-8 pb-4">
          <Reveal delay={0.1}>
            <article>
              {post.blocks.map((b, i) => (
                <BlockView key={i} b={b} />
              ))}
            </article>
          </Reveal>
        </section>

        {/* Per-article FAQ */}
        <Faq
          items={post.faq}
          eyebrow="This article — FAQ"
          titleTop="Quick"
          titleItalic="answers."
        />

        {/* CTA */}
        <section
          id="contact"
          className="relative py-16 md:py-24 mx-auto max-w-[1400px] px-5 md:px-10 hairline-t"
        >
          <Reveal>
            <div className="grid grid-cols-12 gap-8 items-end">
              <div className="col-span-12 md:col-span-8">
                <h2 className="display text-4xl md:text-6xl leading-[0.98]">
                  Suspended, denied,
                  <br />
                  <span className="italic text-brass-shine">
                    or just outranked?
                  </span>
                </h2>
                <p className="mt-5 text-[14px] md:text-[15px] text-ink-mute max-w-lg">
                  Every engagement starts with a free review of your profile
                  and suspension history — you get the diagnosis either way.
                </p>
              </div>
              <div className="col-span-12 md:col-span-4 flex flex-col gap-3">
                <Magnetic>
                  <Link
                    href="/gbp-reinstatement#contact"
                    className="btn-ink inline-flex w-full items-center justify-center gap-3 px-7 py-4 text-[12px] tracking-[0.22em] uppercase font-medium"
                  >
                    Free suspension review
                    <ArrowUpRight size={16} />
                  </Link>
                </Magnetic>
                <Magnetic>
                  <a
                    href="https://wa.me/923083106882?text=Hi%20Manthar%20—%20I%20read%20your%20article%20and%20need%20help%20with%20my%20GBP."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost inline-flex w-full items-center justify-center gap-3 px-7 py-4 text-[12px] tracking-[0.22em] uppercase"
                  >
                    <MessageCircle size={15} />
                    WhatsApp Manthar
                  </a>
                </Magnetic>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Other posts */}
        <section className="relative pb-20 md:pb-24 mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 mb-6">
              <span className="inline-block h-px w-8 bg-line-strong" />
              Keep reading
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {POSTS.filter((p) => p.slug !== post.slug).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex items-center justify-between gap-6 hairline-strong rounded-md px-6 py-6 transition-colors duration-500 hover:bg-ink hover:text-paper hover:border-ink"
                >
                  <div>
                    <p className="text-[11px] tracking-[0.18em] uppercase text-ink-mute group-hover:text-paper/60 transition-colors">
                      {formatPostDate(p.date)} · {p.minutes} min
                    </p>
                    <p className="display text-xl md:text-2xl mt-1.5 leading-snug">
                      {p.title}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={22}
                    strokeWidth={1.25}
                    className="shrink-0 opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFab />
    </SmoothScroll>
  );
}
