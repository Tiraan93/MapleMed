const BLOCKS = [
  {
    title: "Real optionality",
    subtitle: "A genuine two-way door",
    intro: "You don\u2019t have to bet your whole life on a permanent move.",
    points: [
      "Start with locum placements. Experience the clinics, the system, and life in Canada with no long-term commitment.",
      "If it fits, we want to build a future with you. If not, you can return to the UK without burning bridges.",
      "The MaplePledge gives you a practical safety net: we use our UK relationships to help you maintain your performers list and access locum work back home if you ever need it.",
    ],
  },
  {
    title: "Aligned incentives",
    subtitle: "We\u2019re in it with you",
    intro: "Because we run the clinics, our interest is you:",
    points: [
      "Strong supervision and clinical support from day one.",
      "Real help with family integration \u2014 spouse employment, school placements, and practical support with housing and banking.",
      "Clear routes to shared clinic ownership for GPs who want to build something of their own.",
    ],
  },
];

export default function Difference() {
  return (
    <section id="difference" className="section bg-mist-50">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">The MapleMedic Difference</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Most recruiters profit when it doesn&rsquo;t work out. We don&rsquo;t.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-600">
            Most recruitment companies get paid when they place you &mdash; and
            again when they have to place you somewhere else. Their model rewards
            turnover.
          </p>
        </div>

        {/* Key differentiator */}
        <div className="relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl bg-navy-900 px-6 py-10 text-center text-white shadow-card sm:px-12">
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-maple-700/25 blur-2xl" />
          <p className="relative text-xl font-semibold leading-snug sm:text-2xl">
            We own and operate the clinics. That single fact changes everything.
          </p>
        </div>

        {/* Two pillars */}
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {BLOCKS.map((block) => (
            <article key={block.title} className="card h-full">
              <h3 className="text-xl font-semibold text-navy-900">
                {block.title}
                <span className="mt-1 block text-sm font-medium uppercase tracking-wide text-maple-700">
                  {block.subtitle}
                </span>
              </h3>
              <p className="mt-3 leading-relaxed text-navy-600">{block.intro}</p>
              <ul className="mt-4 space-y-3">
                {block.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-maple-50 text-maple-700">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="m4.5 12.5 5 5 10-11" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed text-navy-700">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-lg font-semibold text-navy-900">
          We only win when you stay, thrive, and choose to grow with us.
        </p>
      </div>
    </section>
  );
}
