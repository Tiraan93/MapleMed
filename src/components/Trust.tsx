const POINTS = [
  "MapleMedic is a recruitment company. We are not a medical regulator or an immigration adviser.",
  "We cannot guarantee a job offer, Canadian medical registration, a work permit or any immigration outcome.",
  "Regulators and government authorities make registration and immigration decisions.",
  "Our information is general guidance. Always check requirements with the official bodies, and get professional advice where appropriate.",
];

export default function Trust() {
  return (
    <section className="section bg-navy-900 text-white">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Responsible and transparent
          </h2>
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
