const SOURCES = [
  {
    id: "source-1",
    before: "Canadian Institute for Health Information (CIHI), ",
    title: "Health workforce, 2024: Supply and direct care",
    after:
      ': "5.7 million Canadian adults didn\'t have a regular health care provider in 2024." (Data: 2024, based on Statistics Canada survey data.) ',
    href: "https://www.cihi.ca/en/the-state-of-the-health-workforce-in-canada-2024/health-workforce-2024-supply-and-direct-care",
    label: "cihi.ca",
  },
  {
    id: "source-2",
    before: "Government of Ontario, Ministry of Health, ",
    title: "Ontario's Primary Care Action Plan: 1-year progress update",
    after:
      ' (January 2026): "approximately 1.98 million people not attached to primary care in the province." (Data: 2025.) ',
    href: "https://www.ontario.ca/page/ontarios-primary-care-action-plan-1-year-progress-update",
    label: "ontario.ca",
  },
];

export default function Sources() {
  return (
    <section id="sources" className="scroll-mt-24 border-t border-mist-200 bg-white">
      <div className="container-page py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-semibold text-navy-900">Sources</h2>
          <ol className="mt-4 list-decimal space-y-4 pl-5 text-sm leading-relaxed text-navy-600">
            {SOURCES.map((source) => (
              <li key={source.id} id={source.id} className="scroll-mt-28">
                {source.before}
                <em>{source.title}</em>
                {source.after}
                <a
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-maple-700 underline hover:text-maple-800"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ol>
          <p className="mt-10 italic text-navy-700">
            MapleMedic. By NHS doctors, for NHS doctors.
          </p>
        </div>
      </div>
    </section>
  );
}
