"use client";

import { useState } from "react";

const ROLE_OPTIONS = [
  { value: "", label: "Select your role…" },
  { value: "uk-doctor", label: "UK-qualified doctor" },
  { value: "international-doctor", label: "International doctor" },
  { value: "canadian-professional", label: "Canadian healthcare professional" },
  { value: "clinic-partner", label: "Clinic / operator / partner" },
  { value: "other", label: "Other" },
];

type FormState = {
  fullName: string;
  email: string;
  role: string;
  message: string;
  consent: boolean;
  /** Honeypot — must stay empty for real users. */
  company: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL: FormState = {
  fullName: "",
  email: "",
  role: "",
  message: "",
  consent: false,
  company: "",
};

export default function MailingListForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string>("");

  function validate(values: FormState): Errors {
    const next: Errors = {};
    if (!values.fullName.trim()) {
      next.fullName = "Please enter your full name.";
    }
    if (!values.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!EMAIL_RE.test(values.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.role) {
      next.role = "Please select your role.";
    }
    if (!values.consent) {
      next.consent = "Please tick the box to receive updates.";
    }
    return next;
  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    // Clear a field-level error as the user corrects it.
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError("");

    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          email: form.email.trim(),
          role: form.role,
          message: form.message.trim(),
          consent: form.consent,
          company: form.company, // honeypot
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!res.ok || !data.ok) {
        throw new Error(
          data.error || "Something went wrong. Please try again."
        );
      }

      setStatus("success");
      setForm(INITIAL);
    } catch (err) {
      setStatus("error");
      setServerError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-mist-200 bg-white p-8 text-center shadow-card"
      >
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-maple-50 text-maple-700">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m4.5 12.5 5 5 10-11" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="mt-5 text-xl font-semibold text-navy-900">
          You&apos;re on the list
        </h3>
        <p className="mt-2 text-navy-600">
          Thanks for registering your interest in MapleMedic. We&apos;ll be in
          touch with updates on our clinics and recruitment plans. You can
          unsubscribe at any time.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-6"
        >
          Register another person
        </button>
      </div>
    );
  }

  const isLoading = status === "loading";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-mist-200 bg-white p-6 shadow-card sm:p-8"
    >
      {/* Honeypot field — visually hidden, ignored by humans, tempting to bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company (leave this empty)</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="fullName"
          label="Full name"
          required
          error={errors.fullName}
        >
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={inputClass(!!errors.fullName)}
            placeholder="Jane Smith"
          />
        </Field>

        <Field id="email" label="Email address" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass(!!errors.email)}
            placeholder="jane@example.com"
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field id="role" label="I am a…" required error={errors.role}>
          <select
            id="role"
            name="role"
            value={form.role}
            onChange={(e) => update("role", e.target.value)}
            aria-invalid={!!errors.role}
            aria-describedby={errors.role ? "role-error" : undefined}
            className={inputClass(!!errors.role)}
          >
            {ROLE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                {opt.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field id="message" label="Message" optional>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className={inputClass(false)}
            placeholder="Anything you'd like us to know? (optional)"
          />
        </Field>
      </div>

      <div className="mt-5">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={(e) => update("consent", e.target.checked)}
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-1 h-5 w-5 shrink-0 rounded border-navy-300 text-maple-700 focus:ring-maple-700"
          />
          <span className="text-sm leading-relaxed text-navy-600">
            I agree to receive email updates from MapleMedic. I understand I can
            unsubscribe at any time.
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="mt-1.5 text-sm text-maple-700">
            {errors.consent}
          </p>
        )}
      </div>

      {status === "error" && serverError && (
        <p
          role="alert"
          className="mt-5 rounded-xl border border-maple-200 bg-blush-accent px-4 py-3 text-sm text-maple-800"
        >
          {serverError}
        </p>
      )}

      <button type="submit" disabled={isLoading} className="btn-primary mt-6 w-full">
        {isLoading ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
              <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            Submitting…
          </>
        ) : (
          "Join the mailing list"
        )}
      </button>

      <p className="mt-4 text-center text-xs text-navy-400">
        By submitting, you agree to our{" "}
        <a href="/privacy" className="underline hover:text-navy-600">
          Privacy Policy
        </a>
        . We never sell your data.
      </p>
    </form>
  );
}

function inputClass(hasError: boolean) {
  return [
    "w-full rounded-xl border bg-white px-4 py-3 text-navy-900 shadow-sm transition-colors",
    "placeholder:text-navy-300 focus:outline-none focus:ring-2",
    hasError
      ? "border-maple-300 focus:border-maple-500 focus:ring-maple-200"
      : "border-mist-300 focus:border-maple-500 focus:ring-maple-100",
  ].join(" ");
}

function Field({
  id,
  label,
  required,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy-800">
        {label}
        {required && <span className="ml-0.5 text-maple-700">*</span>}
        {optional && <span className="ml-1 text-xs font-normal text-navy-400">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-maple-700">
          {error}
        </p>
      )}
    </div>
  );
}
