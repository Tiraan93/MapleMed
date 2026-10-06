const BENEFITS = [
  {
    title: "Doctors trained in leading healthcare systems.",
    body: "A comparable, high-standard healthcare system.",
  },
  {
    title: "Licensing support from someone with first hand experience.",
    body: "Tiraan has completed Canadian licensing himself, so we support Doctors every step of the way.",
  },
  {
    title: "Doctors who fit.",
    body: "We check every Doctor's values against your clinic's before we make an introduction.",
  },
  {
    title: "Doctors whose families are supported.",
    body: "We help with partner employment, schools, housing and banking, because a family that settles helps a doctor stay.",
  },
  {
    title: "The paperwork, supported.",
    body: "We guide each Doctor through licensing and give general guidance on the work permit process. For specific immigration questions we signpost Doctors to immigration lawyers we work with, and your own immigration lawyers handle the sponsorship.",
  },
  {
    title: "A recruiter who knows your clinic.",
    body: "We visit in person, meet you and your team, and learn how you onboard and supervise new doctors.",
  },
];

export default function ForClinics() {
  return (
    <section id="for-clinics" className="section scroll-mt-24 bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            For Canadian clinics
          </h2>
          <h3 className="mt-8 text-2xl font-semibold tracking-tight text-navy-900">
            Find the right Doctor for your practice.
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-navy-600">
            We&apos;re in it for the long term. MapleMedic only wins when
            doctors and clinics thrive together. We build lasting relationships with
            both, and only make matches that are meant to last.
          </p>
          <p className="mt-6 font-semibold text-navy-900">What you get:</p>
        </div>

        <ul className="mx-auto mt-6 grid max-w-5xl gap-4 sm:grid-cols-2">
          {BENEFITS.map((item) => (
            <li key={item.title} className="card h-full">
              <p className="leading-relaxed text-navy-700">
                <strong className="font-semibold text-navy-900">{item.title}</strong>{" "}
                {item.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-8 max-w-3xl">
          <p className="text-lg leading-relaxed text-navy-600">
            We start in Ontario, with British Columbia and other provinces to
            follow.
          </p>
          <a
            href="mailto:admin@maplemedic.com"
            className="btn-primary mt-8"
          >
            Tell us about your clinic: admin@maplemedic.com
          </a>
        </div>
      </div>
    </section>
  );
}
