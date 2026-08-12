import type { Metadata } from "next";
import ServicePage from "@/components/service/ServicePage";
import { getService } from "@/lib/services";

const s = getService("gbp-optimization")!;

export const metadata: Metadata = {
  title: s.metaTitle,
  description: s.metaDescription,
  keywords: s.keywords,
  alternates: { canonical: `/${s.slug}` },
  openGraph: {
    title: s.metaTitle,
    description: s.metaDescription,
    url: `/${s.slug}`,
    type: "website",
  },
};

export default function Page() {
  return <ServicePage s={s} />;
}
