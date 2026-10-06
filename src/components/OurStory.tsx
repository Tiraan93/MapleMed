import Footnote from "./Footnote";

export default function OurStory() {
  return (
    <section
      id="why-we-built"
      className="section relative scroll-mt-24 overflow-hidden bg-navy-900 text-white"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-maple-700/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why we built MapleMedic
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-mist-200">
            <p>
              Tiraan is Canadian, trained as an NHS GP with experience in
              Canadian medical licensing. Mikhail is a GP Registrar based in
              East London, planning his own move to Toronto.
            </p>
            <p>
              Working in the NHS, we met lots of UK colleagues who wanted to
              work in Canada. Most never went. The move felt all-or-nothing, and
              the recruiters they spoke to had little reason to care whether a
              placement worked out long-term.
            </p>
            <p>
              Meanwhile, 5.7 million Canadian adults don&apos;t have a regular
              health care provider.
              <Footnote n={1} />
            </p>
            <p>
              So we built MapleMedic. The idea is simple: save lives by matching
              great doctors with great clinics, check the fit properly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
