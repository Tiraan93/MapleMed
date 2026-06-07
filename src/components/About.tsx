const PILLARS = [
  {
    title: "High-quality care",
    body: "Strong clinical standards at the centre of every MapleMed clinic.",
  },
  {
    title: "Modern operations",
    body: "Efficient, well-run clinics designed around patients and clinicians alike.",
  },
  {
    title: "International talent",
    body: "UK-trained and internationally qualified doctors joining the MapleMed team.",
  },
];

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container-page">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow">About MapleMed</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              A healthcare company building clinics in Canada
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">
              MapleMed is building a network of modern clinics in Canada,
              supported by UK-trained and internationally qualified doctors. Our
              goal is to create patient-centred clinics that combine strong
              clinical standards, efficient operations and a supportive
              environment for doctors moving into Canadian practice.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-navy-600">
              We are focused on high-quality care, modern clinic operations and
              international medical talent — supporting both the patients we serve
              and the clinicians who join us.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {PILLARS.map((pillar) => (
              <div key={pillar.title} className="card card-hover">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-maple-50 text-maple-700">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="m4.5 12.5 5 5 10-11"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-navy-900">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy-600">
                      {pillar.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
