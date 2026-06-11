import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContentSections } from "@/components/marketing/ContentSections";
import { Faq } from "@/components/marketing/Faq";
import { AuthorBio } from "@/components/marketing/AuthorBio";
import { RelatedLinks } from "@/components/marketing/RelatedLinks";
import { CallToActionBar } from "@/components/marketing/CallToActionBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";
import { resources, getResource, getResources } from "@/data/resources";
import { getServices } from "@/data/services";
import { getFaqs } from "@/data/faqs";
import { getAuthor } from "@/data/authors";

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
    description: resource.excerpt,
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

      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />
        <div aria-hidden="true" className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-brand-900/0 via-brand-900/0 to-brand-950/60" />
        <Container className="relative py-12 sm:py-16">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Resources", path: "/resources" },
              { name: resource.title, path },
            ]}
          />
          <div className="mt-6">
            <Eyebrow invert>Guide</Eyebrow>
          </div>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
            {resource.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-brand-100">{resource.excerpt}</p>
          <p className="mt-4 text-sm text-brand-200">
            {author ? `By ${author.name}` : null} &middot; Updated {resource.updated}
          </p>
        </Container>
      </section>

      <Section ariaLabelledby="resource-body-heading">
        <h2 id="resource-body-heading" className="sr-only">
          {resource.title}
        </h2>
        <div className="grid gap-12 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="mb-10 overflow-hidden rounded-2xl">
              <Image
                src={resource.image.src}
                alt={resource.image.alt}
                width={resource.image.width}
                height={resource.image.height}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <ContentSections sections={resource.sections} />
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
                    <a href={`/coverage/${s.slug}`} className="font-medium text-brand-700 transition-colors hover:text-brand-900 hover:underline">
                      {s.name}
                    </a>
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
