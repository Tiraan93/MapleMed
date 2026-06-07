type Card = {
  title: string;
  body: string;
  icon: React.ReactNode;
};

const CARDS: Card[] = [
  {
    title: "Patient-centred care",
    body: "Clinics designed around the people we serve, with care built on listening, access and trust.",
    icon: (
      <path
        d="M12 21s-7-4.35-9.5-8.5C.8 9.6 2.3 6 5.6 6c2 0 3.3 1.2 4.4 2.7C11.1 7.2 12.4 6 14.4 6c3.3 0 4.8 3.6 3.1 6.5C19 16.65 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Modern clinic operations",
    body: "Efficient, well-organised clinics that make day-to-day care smoother for patients and clinicians.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 9h18M8 13h5M8 16h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Community access",
    body: "A focus on improving access to high-quality clinical care within the communities we operate in.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "International clinical expertise",
    body: "UK-trained and internationally qualified doctors bringing experience to Canadian practice.",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5 20a7 7 0 0 1 14 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
  },
];

export default function Clinics() {
  return (
    <section id="clinics" className="section bg-mist-50">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our Clinics</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            The clinics we aim to build
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-600">
            MapleMed clinics are being designed around a few clear principles —
            putting patients first while supporting the clinicians who care for
            them.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => (
            <div key={card.title} className="card card-hover h-full">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {card.icon}
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-semibold text-navy-900">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-navy-400">
          Clinic services and locations will be confirmed as MapleMed develops.
          Descriptions above reflect our aims, not confirmed service offerings.
        </p>
      </div>
    </section>
  );
}
