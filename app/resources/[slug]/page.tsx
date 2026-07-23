import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section, SectionHeading } from "@/components/layout/Section";
import { DetailHero } from "@/components/marketing/DetailHero";
import { ContentSections } from "@/components/marketing/ContentSections";
import { Faq } from "@/components/marketing/Faq";
import { AuthorBio } from "@/components/marketing/AuthorBio";
import { EditorialDisclaimer } from "@/components/marketing/EditorialDisclaimer";
import { RelatedLinks } from "@/components/marketing/RelatedLinks";
import { CallToActionBar } from "@/components/marketing/CallToActionBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";
import { resources, getResource, getResources } from "@/data/resources";
import { getServices } from "@/data/services";
import { getFaqs } from "@/data/faqs";
import { getAuthor } from "@/data/authors";
import { getHeroImage } from "@/data/hero-images";

export const dynamicParams = false;

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata(props: PageProps<"/resources/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const resource = getResource(slug);
  if (!resource) return {};
  return buildMetadata({
    title: resource.title,
    description: resource.metaDescription,
    path: `/resources/${resource.slug}`,
    image: { src: resource.image.src, alt: resource.image.alt },
    type: "article",
  });
}

export default async function ResourcePage(props: PageProps<"/resources/[slug]">) {
  const { slug } = await props.params;
  const resource = getResource(slug);
  if (!resource) notFound();

  const path = `/resources/${resource.slug}`;
  const author = getAuthor(resource.authorId);
  const faqs = getFaqs(resource.faqIds);
  const relatedServices = getServices(resource.relatedServiceSlugs);
  const relatedResources = getResources(resource.relatedResourceSlugs);

  return (
    <>
      <JsonLd data={articleSchema(resource, author, path)} />

      <DetailHero
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Resources", path: "/resources" },
              { name: resource.title, path },
            ]}
          />
        }
        eyebrow="Guide"
        headline={resource.title}
        subheadline={resource.excerpt}
        backgroundImage={getHeroImage(resource.slug)}
      />

      <Section ariaLabelledby="resource-body-heading">
        <h2 id="resource-body-heading" className="sr-only">
          {resource.title}
        </h2>
        <div className="grid gap-12 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="mb-8">
              <EditorialDisclaimer />
            </div>
            <ContentSections sections={resource.sections} />
            {resource.sources && resource.sources.length > 0 ? (
              <div className="mt-12 rounded-2xl border border-line bg-surface p-6 shadow-card">
                <h3 className="text-base font-semibold text-brand-800">Sources</h3>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {resource.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-brand-700 transition-colors hover:text-brand-900 hover:underline"
                      >
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {author ? (
              <div className="mt-12">
                <AuthorBio author={author} reviewedDate={resource.updated} />
              </div>
            ) : null}
          </article>
          <aside>
            <div className="rounded-2xl border border-line bg-surface-soft p-6 shadow-card lg:sticky lg:top-28">
              <h3 className="text-base font-semibold text-brand-800">Related coverage</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {relatedServices.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/coverage/${s.slug}`} className="font-medium text-brand-700 transition-colors hover:text-brand-900 hover:underline">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="soft" ariaLabelledby="resource-faq-heading">
        <SectionHeading id="resource-faq-heading" eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mt-10">
          <Faq faqs={faqs} />
        </div>
      </Section>

      <Section ariaLabelledby="resource-related-heading">
        <SectionHeading id="resource-related-heading" eyebrow="Keep Reading" title="Related guides & coverage" />
        <div className="mt-10">
          <RelatedLinks
            groups={[
              {
                heading: "Coverage",
                links: relatedServices.map((s) => ({ label: s.name, href: `/coverage/${s.slug}` })),
              },
              {
                heading: "More guides",
                links: relatedResources.map((r) => ({ label: r.title, href: `/resources/${r.slug}` })),
              },
            ]}
          />
        </div>
      </Section>

      <CallToActionBar />
    </>
  );
}
