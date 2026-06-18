export default function OurStory() {
  return (
    <section
      id="our-story"
      className="section relative overflow-hidden bg-navy-900 text-white"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-maple-700/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-mist-200">
              Our Story
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Why we built MapleMedic
            </h2>
          </div>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-mist-200">
            <p>
              I&rsquo;m a Canadian who trained as a GP in East London. I saw too
              many excellent UK-trained colleagues interested in Canada but held
              back by the all-or-nothing nature of most moves &mdash; and
              recruiters who had little incentive to make the placement actually
              work long-term.
            </p>
            <p>
              At the same time, Canada faces a serious GP shortage that leaves
              6 million of my people without reliable primary care.
            </p>
            <p className="text-xl font-medium text-white">
              So together with my GP friends, we built MapleMedic &mdash;
              &ldquo;Adventure &amp; Opportunity: on{" "}
              <span className="italic text-maple-400">your</span> terms.&rdquo;
            </p>
            <p>
              Because we control both the recruitment side and the clinics
              themselves, we can offer something different: genuine low-risk
              entry through locum trials, the MaplePledge to protect your UK
              licence, proper family integration support, and real pathways to
              shared ownership.
            </p>
            <p>
              Our goal is simple: reduce the risks for UK doctors so they can
              flourish professionally and economically, while helping improve
              access to primary care for patients in Canada.
            </p>
            <p>
              We&rsquo;re currently establishing our first integrated clinic
              operations in Ontario and preparing the initial cohort of UK GPs
              for locum trials. We will prove the model with high retention and
              physician satisfaction before expanding to other provinces.
            </p>
          </div>

          <div className="mt-10 text-center">
            <a href="#join" className="btn-primary">
              Register Interest
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
