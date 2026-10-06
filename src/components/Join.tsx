import MailingListForm from "./MailingListForm";
import { MapleMark } from "./Logo";

export default function Join() {
  return (
    <section id="join" className="section relative scroll-mt-24 overflow-hidden bg-mist-50">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <MapleMark className="absolute -right-10 top-10 h-48 w-48 opacity-[0.04]" />
      </div>

      <div className="container-page relative">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Not ready yet? Join the mailing list.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-600">
              Updates on opportunities, guidance on licensing and what life as a
              GP in Canada is really like.
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
