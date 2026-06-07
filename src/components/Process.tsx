const STEPS = [
  {
    title: "Register interest",
    body: "Join the MapleMed mailing list to be part of our early network.",
  },
  {
    title: "Tell us about your background",
    body: "Share a little about your role so we can keep updates relevant to you.",
  },
  {
    title: "Receive MapleMed updates",
    body: "Get news on clinic development, recruitment plans and timelines.",
  },
  {
    title: "Explore future clinic opportunities",
    body: "Learn about potential roles as MapleMed clinics take shape.",
  },
  {
    title: "Complete official requirements",
    body: "Where applicable, complete official regulatory, employment and immigration requirements.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section bg-mist-50">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            A simple, transparent process
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-600">
            Five clear steps from first interest to exploring opportunities with
            MapleMed.
          </p>
        </div>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, index) => (
            <li key={step.title} className="card card-hover h-full">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maple-700 text-sm font-bold text-white">
                  {index + 1}
                </span>
                {index < STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-px flex-1 bg-mist-300 lg:block"
                  />
                )}
              </div>
              <h3 className="mt-4 text-base font-semibold text-navy-900">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-navy-600">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-8 flex max-w-3xl items-start gap-2.5 rounded-xl border border-mist-200 bg-white p-4 text-sm leading-relaxed text-navy-600 shadow-soft">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 text-maple-700">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
            <path d="M12 8h.01M11 12h1v4h1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          MapleMed does not guarantee medical registration, immigration approval
          or employment. These depend on official processes and eligibility
          checks.
        </p>
      </div>
    </section>
  );
}
