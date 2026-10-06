const INCLUDED = [
  {
    title: "A clinic we've seen with our own eyes.",
    body: "We visit every clinic in person before we match anyone to it.",
  },
  {
    title: "Licensing support.",
    body: "We help you through Canadian medical registration, step by step.",
  },
  {
    title: "Work permit guidance.",
    body: "We explain how the process works in general terms, and for specific questions we signpost you to immigration lawyers we work with.",
  },
  {
    title: "Relocation support.",
    body: "Help with housing, banking and getting set up.",
  },
  {
    title: "Family support.",
    body: "Help for your partner to find work, and help finding schools for your children.",
  },
  {
    title: "A route home.",
    body: "The MaplePledge helps you to stay on the Performers List, if that's important to you.",
  },
];

const VISIT_STEPS = [
  "Visit the clinic in person.",
  "Meet the owners.",
  "Check the onboarding and supervision a new GP will actually get.",
  "Talk to the people who work there, not just the people who run it.",
  "Check your values fit theirs.",
];

const FOCUS = [
  {
    title: "Proper onboarding and supervision",
    body: ", so you're supported from day one.",
  },
  {
    title: "A good team",
    body: ", with people you'll love working with.",
  },
  {
    title: "A family that settles too.",
    body: " A move only works if it works for everyone.",
  },
];

const STEPS = [
  {
    title: "Talk to us",
    body: "A free, no-obligation chat. Tell us about your experience, your goals and your family.",
  },
  {
    title: "Get licensed and get your work permit",
    body: "We guide you through Canadian registration and give you general guidance on the work permit process. For specific questions we signpost you to immigration lawyers we work with. Our support is free.",
  },
  {
    title: "Get matched and move",
    body: "We match you with a clinic we've visited in person and that fits your values. Then we help your family make the move.",
  },
];

export default function ForGps() {
  return (
    <div id="for-gps">
      <section className="section scroll-mt-24 bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              For Doctors
            </h2>
            <h3 className="mt-8 text-2xl font-semibold tracking-tight text-navy-900">
              Our services are Free for you!
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-navy-600">
              Clinics pay us to find great Doctors. You never pay us a Dollar.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-navy-600">
              Here&apos;s everything you get:
            </p>
          </div>

          <ul className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2">
            {INCLUDED.map((item) => (
              <li key={item.title} className="card h-full">
                <p className="leading-relaxed text-navy-700">
                  <strong className="font-semibold text-navy-900">{item.title}</strong>{" "}
                  {item.body}
                </p>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-sky-accentBorder bg-sky-accent p-6 sm:p-8">
            <p className="text-lg leading-relaxed text-navy-700">
              All of it is free. No catch. (You only pay the official government
              fees, like your work permit and registration. The clinic sponsoring
              you can cover immigration lawyer fees.)
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-mist-50">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <h3 className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
              We visit every clinic in person.
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-navy-600">
              Most recruiters match you to a job advert. We match you to a place
              we&apos;ve actually been.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-navy-600">
              Before any GP is matched, we:
            </p>
            <ol className="mt-6 space-y-3">
              {VISIT_STEPS.map((step, index) => (
                <li key={step} className="card flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-maple-700 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="font-semibold leading-relaxed text-navy-900">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-lg leading-relaxed text-navy-700">
              If it isn&apos;t somewhere we&apos;d want to work, we won&apos;t send
              you there.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <h3 className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
              We&apos;ve done this ourselves.
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-navy-600">
              We&apos;re UK and NHS trained doctors with a foot on each side of
              the Atlantic. Tiraan is Canadian, trained in East London and now based
              in Canada, with first hand experience in obtaining licensing. He
              knows which steps trip people up and how general practice here
              differs from the NHS. Mikhail is a GP trainee
              in East London planning his own move once he finishes training, so
              he&apos;s asking the same questions you are.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-navy-600">
              Many recruiters sell Canada from a distance. We&apos;re living it.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-navy-600">
              So we focus on the things that decide whether a move works:
            </p>
            <ul className="mt-6 space-y-3">
              {FOCUS.map((item) => (
                <li key={item.title} className="card">
                  <p className="leading-relaxed text-navy-700">
                    <strong className="font-semibold text-navy-900">{item.title}</strong>{item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-mist-50">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <h3 className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
              A recruiter you can trust.
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-navy-600">
              You should be able to trust your recruiter to look out for you and
              act in your best interest. That&apos;s the right thing to do.
              It&apos;s also the only way to build trust.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-navy-600">
              That&apos;s how we work. We&apos;ll be honest about the good and the
              hard parts, and we&apos;ll never push you towards a clinic that
              isn&apos;t right for you.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <h3 className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
              The MaplePledge: a route home.
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-navy-600">
              Leaving the NHS can feel like burning a bridge. It doesn&apos;t have
              to.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-navy-600">
              Through our East London surgery contacts, we&apos;ll help you keep
              your place on the UK performers list and find work back home if
              Canada doesn&apos;t work out.
            </p>
            <p className="mt-8 font-semibold text-navy-900">
              Some of the UK surgeries we work with:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="card">
                <strong className="font-semibold text-navy-900">Bethnal Green Health Centre</strong>{" "}
                (Dr Rofique Ali)
              </li>
              <li className="card">
                <strong className="font-semibold text-navy-900">Strouts Place Medical Centre</strong>{" "}
                (Dr Sabir Zaman)
              </li>
            </ul>
            <p className="mt-6 text-sm italic leading-relaxed text-navy-500">
              The MaplePledge is a commitment to help, not a guarantee of UK
              employment or of any regulatory outcome.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-mist-50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
              Three steps.
            </h3>
          </div>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {STEPS.map((step, index) => (
              <li key={step.title} className="card h-full">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-maple-700 text-lg font-bold text-white">
                  {index + 1}
                </span>
                <h4 className="mt-5 text-lg font-semibold text-navy-900">
                  {step.title}
                </h4>
                <p className="mt-2 leading-relaxed text-navy-600">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="mailto:admin@maplemedic.com" className="btn-primary">
              Email us: admin@maplemedic.com
            </a>
            <a href="#join" className="btn-secondary">
              Join the mailing list
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
