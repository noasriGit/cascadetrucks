import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ClickToCall } from "@/components/layout/ClickToCall";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Page not found",
  description: `The page you requested could not be found on ${site.brandName}. Return home or contact us for Virginia commercial vehicle insurance help.`,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center py-24 text-center">
      <Eyebrow>Error 404</Eyebrow>
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink">Page not found</h1>
      <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved. Explore our coverage or get
        in touch for a Virginia commercial vehicle insurance quote.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button href="/" variant="secondary" size="lg">
          Back to home
        </Button>
        <ClickToCall variant="solid" />
      </div>
    </Container>
  );
}
