const PILLARS = [
  {
    title: "Low-risk entry",
    body: "Locum trials backed by the MaplePledge \u2014 real support to maintain your UK licence through our relationships with UK surgeries.",
  },
  {
    title: "Truly aligned incentives",
    body: "We place you in our own clinics, so our success depends on yours. That means elite supervision, genuine family integration (spouse work, schools, housing), and clear pathways to shared ownership for those who want to build with us.",
  },
];

export default function MissionVision() {
  return (
    <section id="mission" className="section bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Mission + Vision</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Reduce the risk. Share the reward.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-600">
            MapleMedic is built around two commitments to the doctors who join
            us.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {PILLARS.map((pillar) => (
            <article key={pillar.title} className="card card-hover h-full">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-maple-50 text-maple-700">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m4.5 12.5 5 5 10-11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="mt-5 text-xl font-semibold text-navy-900">
                {pillar.title}
              </h3>
              <p className="mt-3 leading-relaxed text-navy-600">{pillar.body}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-sky-accentBorder bg-sky-accent p-6 text-center sm:p-8">
          <p className="text-lg leading-relaxed text-navy-700">
            We are starting in <strong className="font-semibold text-navy-900">Ontario</strong> and
            expanding to <strong className="font-semibold text-navy-900">British Columbia</strong> and
            beyond. This was designed around fulfilling careers, not just filling
            shifts &mdash; with pathways to shared ownership for GPs who want to
            build with us.
          </p>
        </div>
      </div>
    </section>
  );
}
