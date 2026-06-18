const STEPS = [
  {
    title: "Connect & explore",
    body: "Speak with us, ask questions, and understand the real differences in the Canadian system and our model.",
  },
  {
    title: "Licensing & work permits \u2014 on us",
    body: "We\u2019ll assist you with licensing and work permits free of charge.",
  },
  {
    title: "Start working as a locum",
    body: "If it\u2019s the right fit, we support your full move to Canada as a doctor and maintenance on the UK\u2019s Performer\u2019s list. If not, you can return to the UK with your licence protected and no bridges burned.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How It Works</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            A simple 3-step journey
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-600">
            Low-risk, supported, and reversible &mdash; from first conversation
            to working in Canada.
          </p>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step.title} className="card card-hover h-full">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-maple-700 text-lg font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-navy-900">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-navy-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
