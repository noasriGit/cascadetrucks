"use client";

import { useActionState, useId } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { submitQuoteRequest } from "@/app/actions/quote";
import { initialQuoteState } from "@/lib/quote";
import { services } from "@/data/services";
import { pageLocations } from "@/data/locations";
import { Field, FieldError, Input, Label, Select, Textarea } from "@/components/ui/Field";
import { buttonClasses } from "@/components/ui/Button";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={buttonClasses({ size: "lg", className: "w-full" })}>
      {pending ? "Sending..." : "Request my quote"}
    </button>
  );
}

export function QuoteForm({
  heading = "Request a free quote",
  description = "Tell us about your vehicles and we'll get back to you fast.",
  defaultCoverage,
}: {
  heading?: string;
  description?: string;
  defaultCoverage?: string;
}) {
  const [state, formAction] = useActionState(submitQuoteRequest, initialQuoteState);
  const uid = useId();

  if (state.status === "success") {
    return (
      <div className="rounded-3xl border border-line bg-white p-6 text-ink shadow-elevated ring-1 ring-white/10 sm:p-8" role="status">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </span>
        <h2 className="mt-4 text-xl font-bold text-brand-800">Thank you!</h2>
        <p className="mt-2 text-muted">{state.message}</p>
      </div>
    );
  }

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
          <Label htmlFor={`${uid}-email`}>Email</Label>
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
              defaultValue={defaultCoverage ?? ""}
              aria-invalid={Boolean(state.errors.coverage)}
              aria-describedby={state.errors.coverage ? `${uid}-coverage-error` : undefined}
            >
              <option value="" disabled>
                Select coverage
              </option>
              {services.map((s) => (
                <option key={s.slug} value={s.name}>
                  {s.name}
                </option>
              ))}
              <option value="Other">Other / Not sure</option>
            </Select>
            <FieldError id={`${uid}-coverage-error`} message={state.errors.coverage} />
          </Field>

          <Field>
            <Label htmlFor={`${uid}-city`}>City</Label>
            <Select id={`${uid}-city`} name="city" defaultValue="">
              <option value="">Select city</option>
              {pageLocations.map((l) => (
                <option key={l.slug} value={l.city}>
                  {l.city}, VA
                </option>
              ))}
              <option value="Other">Other Virginia city</option>
            </Select>
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
        <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted">
          <ShieldCheck className="h-4 w-4 text-brand-400" aria-hidden="true" />
          No obligation. We never sell your information.
        </p>
      </form>
    </div>
  );
}
