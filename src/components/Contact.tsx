export default function Contact() {
  return (
    <section id="contact" className="section scroll-mt-24 bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Contact
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-600">
            GP or clinic, we&apos;d love to hear from you.
          </p>
          <p className="mt-4 text-lg text-navy-800">
            <strong className="font-semibold">Email:</strong>{" "}
            <a
              href="mailto:admin@maplemedic.com"
              className="font-medium text-maple-700 underline hover:text-maple-800"
            >
              admin@maplemedic.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
