import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Hero } from "@/components/marketing/Hero";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CallToActionBar } from "@/components/marketing/CallToActionBar";
import { buildMetadata } from "@/lib/metadata";
import { resources } from "@/data/resources";

const path = "/resources";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Virginia Commercial Vehicle Insurance Resources & Guides",
    description:
      "Expert guides on Virginia commercial auto, dump truck, tow truck, fleet, and Uber Black insurance from Cascade Trucks Insurance.",
    path,
  });
}

export default function ResourcesPage() {
  return (
    <>
      <Hero
        eyebrow="Resources"
        headline="Commercial Vehicle Insurance Guides"
        subheadline="Plain-English guides to help Virginia businesses understand and choose the right commercial vehicle coverage."
        breadcrumbs={<Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Resources", path }]} />}
      />

      <Section ariaLabelledby="guides-heading">
        <SectionHeading id="guides-heading" eyebrow="Guides" title="Featured guides" />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <li key={resource.slug}>
              <Link
                href={`/resources/${resource.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-card transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card-hover"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                  <BookOpen className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-brand-800 group-hover:text-brand-600">
                  {resource.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{resource.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Read guide
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CallToActionBar />
    </>
  );
}
