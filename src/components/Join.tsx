import MailingListForm from "./MailingListForm";
import { MapleMark } from "./Logo";

const HIGHLIGHTS = [
  "Updates on MapleMedic clinic development",
  "News on recruitment plans and timelines",
  "General guidance on pathway considerations",
  "Early access to future opportunities",
];

export default function Join() {
  return (
    <section id="join" className="section relative overflow-hidden bg-mist-50">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <MapleMark className="absolute -right-10 top-10 h-48 w-48 opacity-[0.04]" />
      </div>

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow">Register interest</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Join the MapleMedic mailing list
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-600">
              Be part of our early network. Whether you&apos;re a doctor exploring
              Canada, a Canadian healthcare professional, or a potential partner,
              we&apos;d love to keep you informed.
            </p>

            <ul className="mt-8 space-y-3">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-maple-50 text-maple-700">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="m4.5 12.5 5 5 10-11" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-base leading-relaxed text-navy-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm leading-relaxed text-navy-500">
              No spam, ever. You can unsubscribe from any email with a single
              click.
            </p>
          </div>

          <div>
            <MailingListForm />
          </div>
        </div>
      </div>
    </section>
  );
}
