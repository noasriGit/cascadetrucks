import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section, SectionHeading } from "@/components/layout/Section";
import { CallToActionBar } from "@/components/marketing/CallToActionBar";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";
import { authors, getAuthor } from "@/data/authors";
import { resources } from "@/data/resources";
import { site } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return authors.map((author) => ({ id: author.id }));
}

export async function generateMetadata(props: PageProps<"/authors/[id]">): Promise<Metadata> {
  const { id } = await props.params;
  const author = getAuthor(id);
  if (!author) return {};
  return buildMetadata({
    title: author.name,
    description: author.bio,
    path: `/authors/${author.id}`,
    image: { src: author.image, alt: author.name },
  });
}

export default async function AuthorPage(props: PageProps<"/authors/[id]">) {
  const { id } = await props.params;
  const author = getAuthor(id);
  if (!author) notFound();

  const path = `/authors/${author.id}`;
  const authoredGuides = resources.filter((resource) => resource.authorId === author.id);

  return (
    <>
      <Section tone="brand" className="pt-10 pb-12 sm:pt-14 sm:pb-16">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: author.name, path },
          ]}
        />
        <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-6 sm:flex-row sm:items-start">
          <Image
            src={author.image}
            alt=""
            width={112}
            height={112}
            className="h-28 w-28 flex-none rounded-2xl object-cover ring-1 ring-white/20"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">Authors</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{author.name}</h1>
            <p className="mt-2 text-lg text-brand-100">{author.title}</p>
          </div>
        </div>
      </Section>

      <Section ariaLabelledby="author-bio-heading">
        <SectionHeading id="author-bio-heading" eyebrow="About" title="Who writes our guides" />
        <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-muted">
          <p>{author.bio}</p>
          {author.credentials.length > 0 ? (
            <ul className="flex flex-wrap gap-2 pt-2">
              {author.credentials.map((credential) => (
                <li
                  key={credential}
                  className="rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700"
                >
                  {credential}
                </li>
              ))}
            </ul>
          ) : null}
          <p>
            Learn how we research and update content in our{" "}
            <Link href="/editorial-standards" className="font-medium text-brand-700 hover:underline">
              editorial standards
            </Link>
            , or{" "}
            <Link href="/about" className="font-medium text-brand-700 hover:underline">
              read more about {site.brandName}
            </Link>
            .
          </p>
        </div>
      </Section>

      {authoredGuides.length > 0 ? (
        <Section tone="soft" ariaLabelledby="author-guides-heading">
          <SectionHeading
            id="author-guides-heading"
            eyebrow="Guides"
            title="Published by this team"
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {authoredGuides.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={`/resources/${guide.slug}`}
                  className="block rounded-2xl border border-line bg-surface p-5 shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <span className="text-base font-semibold text-brand-800">{guide.title}</span>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{guide.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section ariaLabelledby="author-cta-heading">
        <SectionHeading
          id="author-cta-heading"
          eyebrow="Talk with us"
          title="Speak with a licensed advisor"
        />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/quote" size="lg">
            Request a quote
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact us
          </Button>
        </div>
      </Section>

      <CallToActionBar />
    </>
  );
}
