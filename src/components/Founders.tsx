import Image from "next/image";
import type { StaticImageData } from "next/image";
import tiraanHeadshot from "../../images/tiraan-thambipillai.jpg";
import mikhailHeadshot from "../../images/mikhail-nozdrin.png";

const HEADSHOT_MAX = 96;

function headshotSize(image: StaticImageData) {
  const width = Math.min(HEADSHOT_MAX, image.width);
  return { width, height: Math.round((image.height * width) / image.width) };
}

const tiraanSize = headshotSize(tiraanHeadshot);
const mikhailSize = headshotSize(mikhailHeadshot);

export default function Founders() {
  return (
    <section id="founders" className="section scroll-mt-24 bg-mist-50">
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Meet the founders
          </h2>

          <article className="card mt-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <Image
                src={tiraanHeadshot}
                alt="Dr Tiraan Thambipillai"
                width={tiraanSize.width}
                height={tiraanSize.height}
                sizes={`${tiraanSize.width}px`}
                className="h-auto w-24 max-w-full shrink-0 rounded-xl"
              />
              <div>
                <h3 className="text-xl font-semibold text-navy-900">
                  Dr Tiraan Thambipillai{" "}
                  <span className="font-medium">BSc, MBChB, MRCGP, LMCC</span>
                </h3>
                <p className="mt-1 italic text-navy-600">Co-founder</p>
                <p className="mt-3 leading-relaxed text-navy-700">
                  Tiraan is Canadian and trained as a GP in East London, so he
                  knows both systems from the inside. He studied medicine at
                  Leicester Medical School, then stem cell medicine and
                  entrepreneurship at King&apos;s College London, graduating with
                  first-class honours. During the COVID-19 pandemic he was
                  executive project lead for the non-profit Toronto Malayalee
                  Samajam, helping seniors stay socially connected online and
                  running virtual health literacy workshops for them.
                </p>
                <p className="mt-3 text-sm text-navy-700">
                  Email:{" "}
                  <a
                    href="mailto:tiraan@maplemedic.com"
                    className="font-medium text-maple-700 underline hover:text-maple-800"
                  >
                    tiraan@maplemedic.com
                  </a>
                </p>
              </div>
            </div>
          </article>

          <article className="card mt-5">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <Image
                src={mikhailHeadshot}
                alt="Dr Mikhail Nozdrin"
                width={mikhailSize.width}
                height={mikhailSize.height}
                sizes={`${mikhailSize.width}px`}
                className="h-auto w-24 max-w-full shrink-0 rounded-xl"
              />
              <div>
                <h3 className="text-xl font-semibold text-navy-900">
                  Dr Mikhail Nozdrin{" "}
                  <span className="font-medium">BSc, MBBS</span>
                </h3>
                <p className="mt-1 italic text-navy-600">Co-founder</p>
                <p className="mt-3 leading-relaxed text-navy-700">
                  Mikhail is a GP Registrar in East London with a background in
                  medical research, and he plans to move to Canada once he
                  finishes GP training. He graduated from Imperial College
                  London with first-class honours. Trained at Yale and East
                  London. He co-wrote the European Society of Transplantation
                  guidelines on subclinical donor-specific antibody monitoring,
                  and received the European Society of Transplantation
                  Educational Scholarship and the Sir Peter Morris Prize for the
                  best systematic review. He has published 12 articles and
                  presented at 5 international conferences.
                </p>
                <p className="mt-3 text-sm text-navy-700">
                  Email:{" "}
                  <a
                    href="mailto:mikhail@maplemedic.com"
                    className="font-medium text-maple-700 underline hover:text-maple-800"
                  >
                    mikhail@maplemedic.com
                  </a>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
