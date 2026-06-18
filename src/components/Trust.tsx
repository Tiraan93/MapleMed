const POINTS = [
  "MapleMedic is not a medical regulator.",
  "MapleMedic is not an immigration adviser.",
  "Information on the website is general only.",
  "Official licensing, immigration and employment requirements must be checked with the relevant authorities.",
  "Mailing list subscribers can unsubscribe at any time.",
];

export default function Trust() {
  return (
    <section className="section bg-navy-900 text-white">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-mist-200">
            Trust &amp; compliance
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Responsible and transparent
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-mist-200">
            We are clear about our role. MapleMedic shares general information and
            keeps interested people updated — official decisions always rest with
            the relevant authorities.
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
          {POINTS.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-maple-700 text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m4.5 12.5 5 5 10-11" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-sm leading-relaxed text-mist-100">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
