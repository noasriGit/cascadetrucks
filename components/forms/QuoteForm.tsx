"use client";

import { useActionState, useEffect, useId } from "react";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { submitQuoteRequest } from "@/app/actions/quote";
import { initialQuoteState, quoteCoverageCategories, resolveQuoteCoverageCategory } from "@/lib/quote";
import { Field, FieldError, Input, Label, Select, Textarea } from "@/components/ui/Field";
import { buttonClasses } from "@/components/ui/Button";

const quoteErrorFieldOrder = ["name", "phone", "email", "coverage"] as const;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      aria-busy={pending}
      className={buttonClasses({ size: "lg", className: "w-full" })}
    >
      {pending ? "Sending..." : "Request my quote"}
    </button>
  );
}

export function QuoteForm({
  heading = "Request a free quote",
  description = "Tell us about your vehicles and we'll get back to you fast.",
  defaultCoverage,
  defaultCity,
}: {
  heading?: string;
  description?: string;
  defaultCoverage?: string;
  defaultCity?: string;
}) {
  const [state, formAction] = useActionState(submitQuoteRequest, initialQuoteState);
  const uid = useId();
  const coverageDefault = resolveQuoteCoverageCategory(defaultCoverage);

  useEffect(() => {
    if (state.status !== "error") return;

    const firstInvalid = quoteErrorFieldOrder.find((field) => state.errors[field]);
    if (!firstInvalid) return;

    const input = document.getElementById(`${uid}-${firstInvalid}`);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    input?.focus();
    input?.scrollIntoView({ block: "nearest", behavior: reduceMotion ? "auto" : "smooth" });
  }, [state, uid]);

  return (
    <div className="rounded-3xl border border-line bg-white p-6 text-ink shadow-elevated ring-1 ring-white/10 sm:p-8">
      <h2 className="text-xl font-bold text-brand-800">{heading}</h2>
      <p className="mt-1 text-sm text-muted">{description}</p>

      {state.status === "error" && state.message ? (
        <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-medium text-red-700" role="alert">
          {state.message}
        </p>
      ) : null}

      <form action={formAction} className="mt-5 space-y-4" noValidate>
        {/* Honeypot field for spam bots; visually hidden. */}
        <div aria-hidden="true" className="hidden">
          <label htmlFor={`${uid}-company_website`}>Company website</label>
          <input id={`${uid}-company_website`} name="company_website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field>
            <Label htmlFor={`${uid}-name`} required>
              Full name
            </Label>
            <Input
              id={`${uid}-name`}
              name="name"
              type="text"
              required
              autoComplete="name"
              aria-invalid={Boolean(state.errors.name)}
              aria-describedby={state.errors.name ? `${uid}-name-error` : undefined}
            />
            <FieldError id={`${uid}-name-error`} message={state.errors.name} />
          </Field>

          <Field>
            <Label htmlFor={`${uid}-phone`} required>
              Phone
            </Label>
            <Input
              id={`${uid}-phone`}
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              aria-invalid={Boolean(state.errors.phone)}
              aria-describedby={state.errors.phone ? `${uid}-phone-error` : undefined}
            />
            <FieldError id={`${uid}-phone-error`} message={state.errors.phone} />
          </Field>
        </div>

        <Field>
          <Label htmlFor={`${uid}-email`}>
            Email <span className="font-normal text-muted">(optional)</span>
          </Label>
          <Input
            id={`${uid}-email`}
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(state.errors.email)}
            aria-describedby={state.errors.email ? `${uid}-email-error` : undefined}
          />
          <FieldError id={`${uid}-email-error`} message={state.errors.email} />
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field>
            <Label htmlFor={`${uid}-coverage`} required>
              Coverage type
            </Label>
            <Select
              id={`${uid}-coverage`}
              name="coverage"
              required
              defaultValue={coverageDefault}
              aria-invalid={Boolean(state.errors.coverage)}
              aria-describedby={state.errors.coverage ? `${uid}-coverage-error` : undefined}
            >
              <option value="" disabled>
                Choose coverage type
              </option>
              {quoteCoverageCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Select>
            <FieldError id={`${uid}-coverage-error`} message={state.errors.coverage} />
          </Field>

          <Field>
            <Label htmlFor={`${uid}-city`}>City</Label>
            <Input
              id={`${uid}-city`}
              name="city"
              type="text"
              defaultValue={defaultCity ?? ""}
              placeholder="e.g. Fairfax"
              autoComplete="address-level2"
            />
          </Field>
        </div>

        <Field>
          <Label htmlFor={`${uid}-vehicles`}>Number of vehicles</Label>
          <Input id={`${uid}-vehicles`} name="vehicles" type="text" inputMode="numeric" />
        </Field>

        <Field>
          <Label htmlFor={`${uid}-message`}>Anything else?</Label>
          <Textarea id={`${uid}-message`} name="message" rows={3} />
        </Field>

        <SubmitButton />
        <p className="flex flex-wrap items-center justify-center gap-1.5 text-center text-xs text-muted">
          <ShieldCheck className="h-4 w-4 text-brand-400" aria-hidden="true" />
          <span>
            No obligation. We never sell your information.{" "}
            <Link href="/privacy" className="font-medium text-brand-700 underline-offset-2 hover:underline">
              Privacy policy
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
}
