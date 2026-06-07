"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What is MapleMed?",
    a: "MapleMed is a healthcare company developing modern clinics in Canada and recruiting UK-qualified and international medical professionals to support high-quality patient care.",
  },
  {
    q: "Is MapleMed a recruitment agency?",
    a: "MapleMed is not only a recruitment agency. The company is focused on building and operating its own clinics in Canada and recruiting doctors to join MapleMed clinics.",
  },
  {
    q: "Can MapleMed guarantee a job in Canada?",
    a: "No. MapleMed can share updates and consider candidates for future opportunities, but employment depends on clinic needs, candidate suitability and eligibility checks.",
  },
  {
    q: "Can MapleMed guarantee Canadian medical registration?",
    a: "No. Medical registration is handled by the relevant Canadian medical regulatory authorities and varies by province or territory.",
  },
  {
    q: "Can MapleMed help with visas or immigration?",
    a: "MapleMed may share general information, but immigration advice and decisions must come from official sources or qualified immigration professionals.",
  },
  {
    q: "Who should join the mailing list?",
    a: "UK-qualified doctors, international doctors, Canadian healthcare professionals and potential partners interested in MapleMed’s future clinic plans can register for updates.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-600">
            Clear, honest answers about what MapleMed is — and what it is not.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {FAQS.map((item, index) => {
            const isOpen = open === index;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-mist-200 bg-white shadow-soft"
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-trigger-${index}`}
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-mist-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-maple-700 sm:px-6"
                  >
                    <span className="text-base font-semibold text-navy-900">
                      {item.q}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className={`shrink-0 text-maple-700 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  hidden={!isOpen}
                  className="px-5 pb-5 sm:px-6"
                >
                  <p className="text-base leading-relaxed text-navy-600">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
