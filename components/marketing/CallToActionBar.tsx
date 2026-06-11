import { Container } from "@/components/layout/Container";
import { ClickToCall } from "@/components/layout/ClickToCall";
import { Button } from "@/components/ui/Button";
import { ctaNav } from "@/data/navigation";

export function CallToActionBar({
  heading = "Get your Virginia commercial vehicle insurance quote today",
  description = "Speak with a licensed Cascade advisor or request a quote online. Fast, no-obligation pricing.",
}: {
  heading?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-700 text-white">
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-50" />
      <div
        aria-hidden="true"
        className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent-500/20 blur-3xl"
      />
      <Container className="relative flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{heading}</h2>
          <p className="mt-2.5 text-brand-100">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ClickToCall variant="solid" />
          <Button href={ctaNav.href} variant="outlineLight" size="lg">
            {ctaNav.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
