"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What is MapleMedic?",
    a: "A company founded by GPs that recruits UK-qualified GPs into clinics across Canada. We're starting in Ontario, with British Columbia and other provinces to follow.",
  },
  {
    q: "Is MapleMedic a recruitment agency?",
    a: "Yes. The difference is how we work. We're NHS doctors: one is Canadian and going through licensing; the other is a GP trainee planning the same move. We visit every clinic in person. We check that your values fit the clinic's. And everything we do for you is free.",
  },
  {
    q: "Do I pay anything?",
    a: "Our support is free. Everything we do for GPs, including licensing guidance, work permit guidance, relocation and family support, costs you nothing, because clinics pay us. You pay the official government fees yourself: your work permit application, biometrics, and Canadian medical registration and exam fees. Immigration lawyer fees are commonly paid by the clinic that sponsors you. Some clinics, often in rural areas, also help with relocation costs, but this varies, and we'll tell you what's on offer before you commit.",
  },
  {
    q: "Will you guarantee me a job?",
    a: "No. We'll work hard to find the right clinic for you, but hiring decisions are made by the clinics.",
  },
  {
    q: "Can you guarantee Canadian medical registration?",
    a: "No. Provincial medical regulators make those decisions. We help you prepare, but we are not a regulator.",
  },
  {
    q: "Can you guarantee my work permit or visa?",
    a: "No. The Canadian government makes immigration decisions. We can explain how the process works in general terms, but we are not immigration advisers and we don't give immigration advice. For specific questions we signpost you to immigration lawyers we work with. Your sponsoring clinic works with immigration lawyers on your sponsorship.",
  },
  {
    q: "Who should join the mailing list?",
    a: [
      "Any UK-trained GP curious about working in Canada, whether you're ready to move soon or just starting to think about it.",
      "Canadian Clinic looking to hire expert physicians that will stay with you long term.",
    ],
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section scroll-mt-24 bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            FAQ
          </h2>
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
                  className="space-y-3 px-5 pb-5 sm:px-6"
                >
                  {(Array.isArray(item.a) ? item.a : [item.a]).map((paragraph) => (
                    <p key={paragraph} className="text-base leading-relaxed text-navy-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
