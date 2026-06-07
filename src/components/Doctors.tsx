const BENEFITS = [
  "Learn about future MapleMed clinic opportunities",
  "Receive updates on recruitment timelines",
  "Understand general pathway considerations",
  "Join an early network of interested doctors",
];

export default function Doctors() {
  return (
    <section id="doctors" className="section bg-white">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual / highlight panel */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl bg-navy-900 p-8 text-white shadow-card sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-maple-700/25 blur-2xl"
              />
              <p className="text-sm font-semibold uppercase tracking-wider text-maple-400">
                For UK-qualified doctors
              </p>
              <p className="relative mt-4 text-xl font-medium leading-relaxed">
                &ldquo;MapleMed welcomes interest from UK-qualified doctors who
                are exploring future clinical opportunities in Canada. By joining
                our mailing list, you can receive updates about MapleMed clinics,
                recruitment plans and general guidance on next steps.&rdquo;
              </p>
              <a href="#join" className="btn-primary mt-8">
                Register your interest
              </a>
            </div>
          </div>

          {/* Copy + benefits */}
          <div className="order-1 lg:order-2">
            <span className="eyebrow">For Doctors</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Exploring a clinical career in Canada?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">
              If you are a UK-qualified or internationally trained doctor curious
              about Canadian practice, you can register interest in future
              MapleMed roles and stay informed as our clinics develop.
            </p>

            <ul className="mt-8 space-y-3">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-maple-50 text-maple-700">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="m4.5 12.5 5 5 10-11" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-base leading-relaxed text-navy-700">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 rounded-xl border border-sky-accentBorder bg-sky-accent p-4 text-sm leading-relaxed text-navy-700">
              Registering interest does not constitute an offer of employment,
              medical registration, a visa or guaranteed relocation. It simply
              keeps you informed as MapleMed grows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
