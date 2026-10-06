import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | MapleMedic",
  description:
    "This policy explains how MapleMedic collects, uses, shares and protects personal information.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/privacy" },
};

const linkClass = "font-medium text-maple-700 underline hover:text-maple-800";

function Mail({ email }: { email: string }) {
  return (
    <a href={`mailto:${email}`} className={linkClass}>
      {email}
    </a>
  );
}

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {children}
    </a>
  );
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 text-2xl font-bold tracking-tight text-navy-900">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-6 text-lg font-semibold text-navy-900">{children}</h3>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 leading-relaxed">{children}</p>;
}

function Ul({ children }: { children: React.ReactNode }) {
  return <ul className="mt-3 list-disc space-y-2 pl-5">{children}</ul>;
}

const LAWFUL_BASES: [string, string, string][] = [
  [
    "Running, maintaining and securing our website, preventing misuse and fixing problems",
    "Technical information",
    "Legitimate interests (operating a secure, working website)",
  ],
  [
    "Website analytics to understand how our website is used and improve it",
    "Technical and cookie information",
    "Consent, or where the PECR statistical purposes exception applies, legitimate interests with a simple way to opt out (see section 14)",
  ],
  [
    "Sending our newsletter and other marketing emails",
    "Name, email, role, interests, email interaction information",
    "Consent",
  ],
  [
    "Keeping a record of your consent and of unsubscribe requests, so we respect your choices",
    "Email address, consent and unsubscribe records",
    "Legitimate interests (being able to show we complied with the law and making sure we do not email you after you opt out)",
  ],
  [
    "Responding to enquiries from doctors, clinics and others",
    "Contact details and the content of your message",
    "Legitimate interests (responding to people who contact us). For clinics, also steps taken at your request before entering into a contract",
  ],
  [
    "Registering candidates and understanding their experience, goals and preferences",
    "Candidate information (section 4.4)",
    "Steps taken at your request before entering into a contract, and performance of our agreement with you; and legitimate interests (providing our recruitment service)",
  ],
  [
    "Matching candidates with suitable clinics and roles",
    "Candidate information, clinic information",
    "Legitimate interests (providing a good-quality matching service) and steps taken at your request before entering into a contract",
  ],
  [
    "Sharing a candidate's profile with a prospective clinic, arranging interviews and supporting offers",
    "Candidate profile, CV, references, preferences",
    "Steps taken at your request before entering into a contract; legitimate interests. We will only share your profile with a clinic with your knowledge and agreement",
  ],
  [
    "Checking qualifications, registration and references",
    "Professional, registration and reference information",
    "Legitimate interests (making sure candidates are suitable and that the information we pass to clinics is accurate)",
  ],
  [
    "Helping candidates with Canadian licensing and registration processes",
    "Professional, registration and identity information",
    "Steps taken at your request before entering into a contract; legitimate interests",
  ],
  [
    "Helping candidates with immigration and right-to-work processes, including introductions to immigration professionals",
    "Identity, nationality and immigration information",
    "Steps taken at your request before entering into a contract; legitimate interests",
  ],
  [
    "Helping candidates and their families relocate (partner employment, schooling, housing, banking)",
    "Relocation and family information",
    "Consent (this information is optional and you can withdraw consent at any time)",
  ],
  [
    "MaplePledge: helping GPs stay on the UK performers list and find UK work if they return, including sharing information with UK partner surgeries",
    "Contact details, performers list status, UK work preferences",
    "Consent",
  ],
  [
    "Vetting clinics, including visits and conversations with owners and staff",
    "Clinic contact details and vetting visit information",
    "Legitimate interests (making sure the clinics we recommend are good places for doctors to work)",
  ],
  [
    "Agreeing terms with clinics, invoicing and collecting payment",
    "Business contact, contract, placement and billing information",
    "Performance of a contract with the clinic; legitimate interests (where the contact person is not personally a party to the contract)",
  ],
  [
    "Keeping business, tax and accounting records, meeting recruiter licensing and record-keeping rules, and responding to regulators",
    "Relevant records",
    "Legal obligation (where the obligation arises under UK law); legitimate interests (complying with Canadian and other legal and regulatory requirements that apply to us)",
  ],
  [
    "Handling your privacy requests and complaints",
    "Your request and the information needed to deal with it",
    "Legal obligation",
  ],
  [
    "Establishing, exercising or defending legal claims",
    "Relevant records",
    "Legitimate interests (protecting our legal rights)",
  ],
  [
    "Improving our services, for example by understanding which roles and clinics suit doctors best",
    "Candidate, clinic and placement information, where possible in anonymised or aggregated form",
    "Legitimate interests (improving our service)",
  ],
  [
    "Transferring our business, if we restructure, merge or are acquired",
    "Relevant records",
    "Legitimate interests (being able to restructure or sell our business), subject to confidentiality protections",
  ],
];

const CONTENTS = [
  ["about", "About this policy"],
  ["who", "Who we are and how to contact us"],
  ["laws", "The laws that apply"],
  ["collect", "Information we collect, and where it comes from"],
  ["use", "How and why we use your information (with our lawful bases)"],
  ["sensitive", "Sensitive information"],
  ["consent", "Consent"],
  ["share", "Who we share your information with"],
  ["providers", "Our service providers"],
  ["transfers", "International transfers"],
  ["retention", "How long we keep your information"],
  ["security", "How we keep your information safe"],
  ["marketing", "Marketing emails"],
  ["cookies", "Cookies and similar technologies"],
  ["rights", "Your rights"],
  ["complaints", "How to make a complaint"],
  ["automated", "Automated decisions"],
  ["children", "Children and family members"],
  ["links", "Links to other websites"],
  ["changes", "Changes to this policy"],
];

export default function PrivacyPage() {
  return (
    <>
      <header className="border-b border-mist-200 bg-white">
        <div className="container-page flex h-16 items-center justify-between lg:h-20">
          <Link href="/" aria-label="MapleMedic home">
            <Logo />
          </Link>
          <Link href="/" className="btn-secondary">
            Back to home
          </Link>
        </div>
      </header>

      <main className="bg-white">
        <div className="container-page max-w-3xl py-16 text-navy-700 lg:py-24">
          <p className="text-sm font-semibold text-maple-700">Legal</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy-900">
            MapleMedic Privacy Policy
          </h1>

          <section className="mt-10">
            <H2 id="summary">Summary (the short version)</H2>
            <P>
              This summary gives you the key points. The full policy below explains
              everything in detail, and the full policy is what applies.
            </P>
            <Ul>
              <li>
                <strong className="text-navy-900">Who we are.</strong> MapleMedic
                (MAPLEMEDIC LTD) helps UK-trained GPs find work in independently
                owned clinics in Canada, starting in Ontario and expanding to
                British Columbia and other provinces. We are responsible for (the
                &quot;controller&quot; of) the personal information described in
                this policy.
              </li>
              <li>
                <strong className="text-navy-900">Our service is free for doctors.</strong>{" "}
                Clinics pay us. We never charge doctors a fee for finding them
                work, and we do not sell your personal information.
              </li>
              <li>
                <strong className="text-navy-900">What we collect.</strong> If you
                are a doctor working with us, this includes your contact details,
                CV, qualifications, GMC and licensing information, right-to-work
                and immigration information, references, your preferences, and any
                family or relocation information you choose to share. If you are a
                clinic, we collect business contact details and information about
                your clinic, including what we learn on visits. If you visit our
                website or join our mailing list, we collect limited technical and
                contact information.
              </li>
              <li>
                <strong className="text-navy-900">Who we share it with.</strong> We
                share a doctor&apos;s profile with a Canadian clinic only with that
                doctor&apos;s knowledge and agreement. With your agreement, we may
                also share relevant information with Canadian medical regulators,
                immigration professionals, relocation helpers and, for our
                MaplePledge programme, UK partner surgeries. We also use trusted
                service providers (such as email and website hosting) who act on
                our instructions.
              </li>
              <li>
                <strong className="text-navy-900">Sensitive information.</strong> Some
                information you share (for example about your health, or
                information revealing your ethnic origin) is sensitive. We only use
                it where you have given your explicit consent or where the law
                otherwise allows, and only for the purpose you shared it for.
              </li>
              <li>
                <strong className="text-navy-900">International transfers.</strong> We
                work between the UK and Canada, so your information will be
                transferred between those countries. We explain how we protect it
                in section 10.
              </li>
              <li>
                <strong className="text-navy-900">Marketing.</strong> We only send
                marketing emails if you have agreed, and every email has an easy
                unsubscribe link.
              </li>
              <li>
                <strong className="text-navy-900">Your rights.</strong> You can ask
                to see, correct or delete your information, withdraw your consent,
                object to certain uses, and complain to us or to a regulator: the
                UK Information Commissioner&apos;s Office (ICO), the Office of the
                Privacy Commissioner of Canada (OPC) or, in British Columbia, the
                Office of the Information and Privacy Commissioner for BC (OIPC BC).
              </li>
              <li>
                <strong className="text-navy-900">Questions?</strong> Contact our
                Privacy Officer, Dr Tiraan Thambipillai, at{" "}
                <Mail email="tiraan@maplemedic.com" />.
              </li>
            </Ul>
          </section>

          <section className="mt-12">
            <H2 id="full">Full Privacy Policy</H2>
            <H3>Contents</H3>
            <ol className="mt-3 list-decimal space-y-1.5 pl-5">
              {CONTENTS.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className={linkClass}>
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-12">
            <H2 id="about">1. About this policy</H2>
            <P>
              This policy explains how MapleMedic collects, uses, shares and
              protects personal information (also called &quot;personal data&quot;)
              when you:
            </P>
            <Ul>
              <li>visit our website at maplemedic.com;</li>
              <li>sign up to our mailing list;</li>
              <li>contact us by email, through our website or in any other way;</li>
              <li>
                register with us, or work with us, as a doctor looking for a role
                in Canada (we call you a &quot;candidate&quot;);
              </li>
              <li>take part in our MaplePledge programme;</li>
              <li>
                work with us as a clinic owner, manager or member of clinic staff;
                or
              </li>
              <li>
                are a referee for a candidate, or a family member of a candidate
                whose details have been shared with us.
              </li>
            </Ul>
            <P>
              In this policy, &quot;we&quot;, &quot;us&quot; and &quot;our&quot; mean
              MapleMedic (MAPLEMEDIC LTD). &quot;You&quot; means the person whose
              information we are using.
            </P>
            <P>
              We may give you extra, more specific privacy information at the point
              we collect particular information (for example, on a sign-up form).
              That information should be read together with this policy.
            </P>
          </section>

          <section className="mt-12">
            <H2 id="who">2. Who we are and how to contact us</H2>
            <P>
              MapleMedic is a recruitment company founded by NHS doctors, Dr Tiraan
              Thambipillai and Dr Mikhail Nozdrin.
            </P>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
                <tbody>
                  <tr className="border-b border-mist-200">
                    <th className="py-3 pr-4 font-semibold text-navy-900">Legal name</th>
                    <td className="py-3">MAPLEMEDIC LTD</td>
                  </tr>
                  <tr className="border-b border-mist-200">
                    <th className="py-3 pr-4 font-semibold text-navy-900">Privacy Officer</th>
                    <td className="py-3">Dr Tiraan Thambipillai, Privacy Officer</td>
                  </tr>
                  <tr className="border-b border-mist-200">
                    <th className="py-3 pr-4 font-semibold text-navy-900">Privacy contact email</th>
                    <td className="py-3">
                      <Mail email="tiraan@maplemedic.com" />
                    </td>
                  </tr>
                  <tr className="border-b border-mist-200">
                    <th className="py-3 pr-4 font-semibold text-navy-900">General enquiries</th>
                    <td className="py-3">
                      <Mail email="admin@maplemedic.com" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>
              <strong className="text-navy-900">Our role.</strong> We are the
              controller of the personal information described in this policy. This
              means we decide why and how it is used, and we are responsible for
              it.
            </P>
            <P>
              <strong className="text-navy-900">Accountability.</strong> Our Privacy
              Officer is responsible for our compliance with privacy law and this
              policy. If you have any question, concern or request about your
              personal information, please contact the Privacy Officer using the
              details above.
            </P>
          </section>

          <section className="mt-12">
            <H2 id="laws">3. The laws that apply</H2>
            <P>
              Because we work with people in both the UK and Canada, more than one
              set of privacy laws may apply to your information. Depending on where
              you are and what we are doing, these include:
            </P>
            <Ul>
              <li>
                <strong className="text-navy-900">Canada:</strong> the{" "}
                <em>Personal Information Protection and Electronic Documents Act</em>{" "}
                (PIPEDA), which applies to private-sector organisations handling
                personal information in the course of commercial activities,
                including in Ontario; British Columbia&apos;s{" "}
                <em>Personal Information Protection Act</em> (BC PIPA), which
                applies to many private-sector activities within British Columbia;
                and Canada&apos;s Anti-Spam Legislation (CASL), which applies to
                commercial electronic messages.
              </li>
              <li>
                <strong className="text-navy-900">United Kingdom:</strong> the UK
                General Data Protection Regulation (UK GDPR), the Data Protection
                Act 2018 (both as amended, including by the Data (Use and Access)
                Act 2025), and the Privacy and Electronic Communications Regulations
                2003 (PECR), which cover marketing emails and cookies.
              </li>
            </Ul>
            <P>
              We aim to meet the requirements of each law that applies to us. Where
              the laws differ, we aim to follow the approach that gives you the
              greater protection.
            </P>
          </section>

          <section className="mt-12">
            <H2 id="collect">4. Information we collect, and where it comes from</H2>
            <H3>4.1 Website visitors</H3>
            <Ul>
              <li>
                <strong className="text-navy-900">Technical information:</strong> your
                IP address, browser type and version, device type, operating
                system, time zone, pages visited, the website you came from, and
                the date and time of your visit.
              </li>
              <li>
                <strong className="text-navy-900">Cookie and similar information:</strong>{" "}
                see section 14.
              </li>
              <li>
                <strong className="text-navy-900">Information you enter into forms</strong>{" "}
                on our website (for example, a contact or sign-up form).
              </li>
            </Ul>
            <P>
              <strong className="text-navy-900">Source:</strong> you and your
              device, and our website host and (if used) analytics providers.
            </P>

            <H3>4.2 Mailing list subscribers</H3>
            <Ul>
              <li>Name and email address.</li>
              <li>
                Your role (for example, GP, GP trainee, clinic owner or practice
                manager).
              </li>
              <li>
                Any optional interests or preferences you choose to tell us (for
                example, the provinces you are interested in).
              </li>
              <li>
                Records of your consent (when and how you signed up) and of your
                unsubscribe requests.
              </li>
            </Ul>
            <P>
              <strong className="text-navy-900">Source:</strong> you, and our
              mailing list provider (Brevo).
            </P>

            <H3>4.3 People who contact us</H3>
            <Ul>
              <li>Your name, contact details and the content of your message.</li>
              <li>
                Any information you choose to include in your message or
                attachments.
              </li>
              <li>Records of our correspondence with you.</li>
            </Ul>
            <P>
              <strong className="text-navy-900">Source:</strong> you.
            </P>

            <H3>4.4 Candidates (doctors looking for roles in Canada)</H3>
            <P>Depending on how far you go with us, we may collect:</P>
            <Ul>
              <li>
                <strong className="text-navy-900">Identity and contact details:</strong>{" "}
                name, email address, phone number, postal address, date of birth,
                and photographs or video if you share them (for example, during a
                video call, if recorded with your agreement).
              </li>
              <li>
                <strong className="text-navy-900">Professional information:</strong> CV,
                work history, current and previous roles, training history,
                specialty interests, qualifications (including medical degree and
                postgraduate qualifications such as MRCGP), Certificate of
                Completion of Training (CCT) details, continuing professional
                development, appraisal and revalidation information you choose to
                share, and language test results if needed.
              </li>
              <li>
                <strong className="text-navy-900">Registration and licensing information:</strong>{" "}
                your GMC number and registration status, UK performers list status,
                and information relating to Canadian licensure (for example,
                applications to provincial medical regulators such as the College
                of Physicians and Surgeons of Ontario or the College of Physicians
                and Surgeons of British Columbia, and related bodies).
              </li>
              <li>
                <strong className="text-navy-900">Right-to-work and immigration information:</strong>{" "}
                nationality and citizenship, passport details, immigration status,
                visa and work permit applications and outcomes, and related
                documents.
              </li>
              <li>
                <strong className="text-navy-900">References:</strong> names and
                contact details of your referees, and the references they provide.
              </li>
              <li>
                <strong className="text-navy-900">Background checks:</strong> where a
                clinic, regulator or immigration process requires it, information
                about criminal record or police checks and professional standing
                (for example, certificates of good standing).
              </li>
              <li>
                <strong className="text-navy-900">Preferences:</strong> preferred
                locations, type of clinic, working pattern, desired start date,
                salary or remuneration expectations, and what matters to you in a
                role.
              </li>
              <li>
                <strong className="text-navy-900">Values and fit information:</strong>{" "}
                your notes and our notes from conversations about your career
                goals, working style, values and what you are looking for in a
                clinic, so we can make good matches.
              </li>
              <li>
                <strong className="text-navy-900">Relocation information:</strong>{" "}
                information you choose to share so that we can help you and your
                family relocate, such as your partner&apos;s employment needs, your
                children&apos;s schooling needs, housing requirements and banking
                needs. This may include information about your partner and children
                (see section 18).
              </li>
              <li>
                <strong className="text-navy-900">Sensitive information:</strong> in
                some cases, information about your health or disability (for
                example, if you tell us about adjustments you need), or information
                that reveals your racial or ethnic origin or religious beliefs. See
                section 6.
              </li>
              <li>
                <strong className="text-navy-900">Placement information:</strong> which
                clinics your profile was shared with, interview feedback, offers,
                the outcome, your start date, and information needed for us to
                invoice the clinic.
              </li>
              <li>
                <strong className="text-navy-900">Communications:</strong> our emails,
                messages, call notes and meeting notes with you.
              </li>
            </Ul>
            <P>
              <strong className="text-navy-900">Sources:</strong> mostly you. We may
              also collect information from:
            </P>
            <Ul>
              <li>your referees;</li>
              <li>
                public registers (for example, the GMC&apos;s List of Registered
                Medical Practitioners, the UK performers list, and Canadian
                regulators&apos; public registers);
              </li>
              <li>
                professional networking sites and other publicly available
                professional sources (for example, if we first contact you through
                a professional networking site);
              </li>
              <li>
                clinics you are introduced to (for example, interview feedback and
                offer details);
              </li>
              <li>
                Canadian medical regulators, immigration professionals and
                relocation helpers, where you have asked us to help with those
                processes; and
              </li>
              <li>
                people who recommend you to us (for example, a colleague who refers
                you). If someone refers you, we will tell you where we got your
                details when we first contact you.
              </li>
            </Ul>

            <H3>4.5 MaplePledge participants</H3>
            <P>
              If you take part in MaplePledge (our programme to help GPs stay on
              the UK performers list and find UK work if they return), we may
              collect information about your UK performers list status, UK work
              preferences, availability and contact details, and we may share
              relevant information with UK partner surgeries (see section 8).
            </P>

            <H3>4.6 Clinic owners and staff</H3>
            <Ul>
              <li>
                <strong className="text-navy-900">Business contact details:</strong>{" "}
                name, job title, work email, work phone number and clinic address.
              </li>
              <li>
                <strong className="text-navy-900">Clinic information:</strong>{" "}
                information about the clinic, its ownership, services, patient
                population, team, working environment, culture, support for new
                doctors, and terms offered.
              </li>
              <li>
                <strong className="text-navy-900">Vetting visit information:</strong>{" "}
                notes from our in-person and remote vetting visits, including
                conversations with owners and staff about the clinic, how it works,
                and what it is like to work there. We will tell staff why we are
                speaking with them, and they are free not to take part.
              </li>
              <li>
                <strong className="text-navy-900">Contract and billing information:</strong>{" "}
                information needed to agree terms with the clinic, invoice for our
                services and receive payment.
              </li>
            </Ul>
            <P>
              <strong className="text-navy-900">Sources:</strong> you and your
              colleagues, our visits, the clinic&apos;s website and other public
              sources, and candidates who have worked with or been interviewed by
              the clinic.
            </P>

            <H3>4.7 Referees</H3>
            <P>
              If a candidate names you as a referee, we will collect your name, job
              title, contact details, your relationship to the candidate, and the
              reference you provide. <strong className="text-navy-900">Source:</strong>{" "}
              the candidate, and you.
            </P>

            <H3>4.8 If you do not provide information</H3>
            <P>
              Most information we ask for is needed to help you find a role, to
              check suitability for a role, or to support licensing and immigration
              processes. If you do not provide it, we may not be able to help you
              with some or all of these things. Information marked as optional (for
              example, family or relocation information) is entirely your choice. We
              will not ask for more information than we need for the purposes we
              tell you about.
            </P>
          </section>

          <section className="mt-12">
            <H2 id="use">5. How and why we use your information (with our lawful bases)</H2>
            <P>
              Under Canadian law, we collect, use and share personal information
              only for purposes that a reasonable person would consider appropriate
              in the circumstances, and with your consent (express or implied,
              depending on how sensitive the information is and what you would
              reasonably expect), unless the law allows otherwise. See section 7.
            </P>
            <P>
              Under UK law, we must have a &quot;lawful basis&quot; for each use of
              personal information. The table below sets out our main purposes and
              the lawful bases we rely on under the UK GDPR. Where we rely on
              &quot;legitimate interests&quot;, we have considered your interests
              and rights and believe our use is fair and balanced. You can ask us
              for more details of this balancing test.
            </P>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-mist-300 bg-mist-50">
                    <th className="px-3 py-2 font-semibold text-navy-900">Purpose</th>
                    <th className="px-3 py-2 font-semibold text-navy-900">Information used</th>
                    <th className="px-3 py-2 font-semibold text-navy-900">UK GDPR lawful basis</th>
                  </tr>
                </thead>
                <tbody>
                  {LAWFUL_BASES.map((row) => (
                    <tr key={row[0]} className="border-b border-mist-200 align-top">
                      {row.map((cell) => (
                        <td key={cell} className="px-3 py-3 leading-relaxed">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <P>
              We will only use your information for the purposes we have told you
              about, or for purposes that are compatible with them. If we want to
              use it for a new, unrelated purpose, we will tell you first and,
              where required, ask for your consent.
            </P>
            <P>
              <strong className="text-navy-900">We do not sell your personal information.</strong>{" "}
              We do not share it with anyone for their own marketing.
            </P>
          </section>

          <section className="mt-12">
            <H2 id="sensitive">6. Sensitive information</H2>
            <P>
              Some information is especially sensitive. Under the UK GDPR,
              &quot;special category data&quot; includes information about health,
              racial or ethnic origin, religious or philosophical beliefs, sex life
              or sexual orientation, and some other types. Information about
              criminal convictions and offences also has extra protection. Under
              Canadian law, health information, government identification numbers,
              immigration information and financial information are generally
              treated as sensitive.
            </P>
            <P>
              <strong className="text-navy-900">What we may hold.</strong> We do not
              ask candidates for special category data unless it is genuinely
              needed. However, it may come to us if, for example:
            </P>
            <Ul>
              <li>
                you tell us about a health condition or disability (for example,
                because you need reasonable adjustments for interviews, or because
                it affects your relocation needs);
              </li>
              <li>
                your immigration, passport or nationality documents reveal your
                racial or ethnic origin;
              </li>
              <li>
                you share information about your family that reveals religious
                beliefs or other special category information (for example, when
                discussing schooling); or
              </li>
              <li>
                a licensing, clinic or immigration process requires a criminal
                record check or declaration.
              </li>
            </Ul>
            <P>
              <strong className="text-navy-900">How we protect it.</strong> We use
              sensitive information only for the specific purpose for which it was
              shared, we limit who can see it, and we do not include it in profiles
              sent to clinics unless you have specifically asked us to. Nationality
              and immigration status are not, in themselves, special category data
              under the UK GDPR, but we treat them as sensitive and handle them
              with the same care.
            </P>
            <P>
              <strong className="text-navy-900">Our UK legal conditions.</strong> Where
              we process special category data, we rely on:
            </P>
            <Ul>
              <li>
                your <strong className="text-navy-900">explicit consent</strong> (UK
                GDPR Article 9(2)(a)), which you can withdraw at any time; or
              </li>
              <li>
                where necessary, the condition for the{" "}
                <strong className="text-navy-900">establishment, exercise or defence of legal claims</strong>{" "}
                (Article 9(2)(f)).
              </li>
            </Ul>
            <P>
              Where we process criminal offence information, we rely on your
              consent, or on the legal claims condition, under Schedule 1 of the
              Data Protection Act 2018.
            </P>
            <P>
              <strong className="text-navy-900">Canada.</strong> We will obtain your
              express consent before collecting, using or sharing sensitive
              information.
            </P>
          </section>

          <section className="mt-12">
            <H2 id="consent">7. Consent</H2>
            <P>
              <strong className="text-navy-900">How we obtain consent.</strong> Where
              we rely on consent, we ask for it clearly, separately from other
              matters, and before we collect or use your information for that
              purpose. For sensitive information, and for sharing your profile with
              a clinic, we ask for your express consent. For less sensitive
              information, consent may be implied where it is obvious from the
              circumstances (for example, when you email us a question, you can
              expect us to use your email address to reply).
            </P>
            <P>
              <strong className="text-navy-900">Sharing your profile with clinics.</strong>{" "}
              Before we send your profile or CV to a specific clinic, we will tell
              you which clinic it is and ask you to agree.
            </P>
            <P>
              <strong className="text-navy-900">Withdrawing consent.</strong> You can
              withdraw your consent at any time by contacting us at{" "}
              <Mail email="tiraan@maplemedic.com" /> or, for emails, by clicking
              &quot;unsubscribe&quot;. Withdrawing consent does not affect anything
              we did before you withdrew it. If you withdraw consent to a use of
              information that we need to provide a service (for example, sharing
              your profile with clinics), we may no longer be able to provide that
              service, and we will explain the consequences to you. Information
              that a clinic, regulator or other organisation has already received
              will be governed by that organisation&apos;s own privacy policy, but
              we will tell them about your withdrawal where appropriate.
            </P>
          </section>

          <section className="mt-12">
            <H2 id="share">8. Who we share your information with</H2>
            <P>
              We share personal information only where necessary for the purposes
              in this policy, and only as much as is needed. We may share
              information with:
            </P>
            <Ul>
              <li>
                <strong className="text-navy-900">Prospective Canadian clinics:</strong>{" "}
                with your knowledge and agreement, we share your candidate profile,
                CV, references and relevant preferences with clinics that may wish
                to offer you a role, and we pass on information to arrange
                interviews and support offers. Once a clinic receives your
                information, it is responsible for how it uses that information as
                a separate controller under its own privacy obligations.
              </li>
              <li>
                <strong className="text-navy-900">Canadian medical regulators and related bodies:</strong>{" "}
                where you ask us to help with licensing or registration, we may
                share relevant information with bodies such as provincial colleges
                of physicians and surgeons, or other organisations involved in
                assessing medical credentials.
              </li>
              <li>
                <strong className="text-navy-900">Immigration professionals:</strong>{" "}
                where you ask us to, we may signpost or introduce you to licensed
                Canadian immigration lawyers we work with, and share relevant
                information with them. They act for you, not for us, and are
                responsible for their own handling of your information.
              </li>
              <li>
                <strong className="text-navy-900">Relocation helpers:</strong> with
                your consent, we may share relevant information with people who can
                help you relocate, for example housing contacts, schools, banks, or
                employers or recruiters who may be able to help your partner find
                work.
              </li>
              <li>
                <strong className="text-navy-900">UK partner surgeries (MaplePledge):</strong>{" "}
                with your consent, we may share relevant information with UK GP
                surgeries that partner with us, to help you stay on the UK
                performers list and find UK work if you return.
              </li>
              <li>
                <strong className="text-navy-900">Referees:</strong> we contact
                referees you have named and tell them who the reference is for.
              </li>
              <li>
                <strong className="text-navy-900">Service providers:</strong>{" "}
                businesses that provide services to us, such as website hosting,
                email, mailing list, storage, scheduling and customer relationship
                management. See section 9.
              </li>
              <li>
                <strong className="text-navy-900">Professional advisers:</strong> our
                lawyers, accountants, insurers and auditors, where necessary.
              </li>
              <li>
                <strong className="text-navy-900">Regulators, law enforcement and courts:</strong>{" "}
                where the law requires or permits us to share information, for
                example to respond to a lawful request from a public authority, to
                comply with recruiter licensing rules, or to protect the rights,
                property or safety of us, our candidates, clinics or others.
              </li>
              <li>
                <strong className="text-navy-900">Business transfers:</strong> if we
                restructure, merge with or are acquired by another business,
                personal information may be shared with the other business and its
                advisers, subject to confidentiality protections. The new owner
                would continue to be bound by this policy, or would tell you about
                any changes.
              </li>
            </Ul>
          </section>

          <section className="mt-12">
            <H2 id="providers">9. Our service providers</H2>
            <P>
              We use service providers (known as &quot;processors&quot; or
              &quot;service providers&quot;) to help us run our business. They may
              only use your information on our instructions and for the purpose of
              providing their services to us, and we put contracts in place
              requiring them to protect it. Under Canadian law, we remain
              responsible for information we transfer to them.
            </P>
            <P>The categories of service provider we use are listed below.</P>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-mist-300 bg-mist-50">
                    <th className="px-3 py-2 font-semibold text-navy-900">Category</th>
                    <th className="px-3 py-2 font-semibold text-navy-900">Provider</th>
                    <th className="px-3 py-2 font-semibold text-navy-900">Where they process data</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-mist-200 align-top">
                    <td className="px-3 py-3">Website hosting and website builder</td>
                    <td className="px-3 py-3">Vercel (website hosting)</td>
                    <td className="px-3 py-3" />
                  </tr>
                  <tr className="border-b border-mist-200 align-top">
                    <td className="px-3 py-3">Mailing list and newsletters</td>
                    <td className="px-3 py-3">Brevo (Sendinblue SAS, Paris, France)</td>
                    <td className="px-3 py-3">
                      European Union (France, Germany and Belgium). Some Brevo
                      sub-processors are outside the EU, for example in the USA
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12">
            <H2 id="transfers">10. International transfers</H2>
            <P>
              We work across the UK and Canada, so your personal information will
              be transferred between those countries. Some of our service providers
              may store or process information in other countries, such as the
              United States.
            </P>
            <P>
              <strong className="text-navy-900">Transfers from the UK to Canada.</strong>{" "}
              The UK has &quot;adequacy regulations&quot; for Canada, but they are
              partial. They cover personal information that is subject to PIPEDA,
              which applies to private-sector organisations handling personal
              information in the course of commercial activities. Where information
              we receive or transfer is subject to PIPEDA, we rely on these
              adequacy regulations.
            </P>
            <P>
              Some recipients in Canada, or some types of information, may not be
              covered by PIPEDA (for example, public bodies such as some regulators
              or government immigration authorities, organisations whose handling of
              the information is governed by provincial law instead, or information
              handled outside commercial activities). In those cases, we rely on one
              of the following, as appropriate:
            </P>
            <Ul>
              <li>
                appropriate safeguards approved under UK law, such as the UK
                International Data Transfer Agreement or the UK Addendum to the EU
                Standard Contractual Clauses;
              </li>
              <li>
                the transfer being necessary for steps you have asked us to take,
                or for a contract made in your interests (for example, sending your
                application to a clinic or regulator at your request); or
              </li>
              <li>
                your explicit consent, after we have told you about any risks.
              </li>
            </Ul>
            <P>
              <strong className="text-navy-900">Transfers to other countries.</strong>{" "}
              Where our service providers process information outside the UK and
              Canada, we rely on UK adequacy regulations where they apply (for
              example, the UK Extension to the EU-US Data Privacy Framework, if the
              provider is certified), or on appropriate safeguards such as the UK
              International Data Transfer Agreement or Addendum.
            </P>
            <P>
              <strong className="text-navy-900">Transfers from Canada.</strong> When
              we transfer personal information to a service provider or partner
              outside Canada (including in the UK), we use contracts or other means
              to provide a comparable level of protection. Please be aware that
              information held outside Canada is subject to the laws of that
              country and may be accessible to its courts, law enforcement and
              national security authorities.
            </P>
            <P>
              You can ask us for more information about the safeguards we use,
              including a copy of relevant safeguards, by contacting the Privacy
              Officer.
            </P>
          </section>

          <section className="mt-12">
            <H2 id="retention">11. How long we keep your information</H2>
            <P>
              We keep personal information only for as long as we need it for the
              purposes in this policy, including to meet legal, regulatory, tax,
              accounting and reporting requirements, and to deal with any complaints
              or legal claims. When we no longer need it, we securely delete or
              destroy it, or anonymise it so it can no longer identify you.
            </P>
            <P>Our standard retention periods are below.</P>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-mist-300 bg-mist-50">
                    <th className="px-3 py-2 font-semibold text-navy-900">Information</th>
                    <th className="px-3 py-2 font-semibold text-navy-900">Proposed retention period</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-mist-200 align-top">
                    <td className="px-3 py-3">Cookies</td>
                    <td className="px-3 py-3">As set out in our cookie notice or banner</td>
                  </tr>
                  <tr className="border-b border-mist-200 align-top">
                    <td className="px-3 py-3">Unsubscribe (suppression) list</td>
                    <td className="px-3 py-3">
                      Kept for as long as we send marketing emails, so that we do
                      not email you again. We keep only the minimum information
                      needed (usually your email address)
                    </td>
                  </tr>
                  <tr className="border-b border-mist-200 align-top">
                    <td className="px-3 py-3">Records of privacy breaches</td>
                    <td className="px-3 py-3">
                      At least 24 months after we decide a breach occurred (as
                      required under PIPEDA), or longer where needed
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12">
            <H2 id="security">12. How we keep your information safe</H2>
            <P>
              We use appropriate technical and organisational measures to protect
              personal information against loss, theft and unauthorised access,
              use, disclosure, copying, changing or destruction. The level of
              protection reflects how sensitive the information is. These measures
              include limiting access to people who need it, using reputable
              service providers bound by confidentiality and security obligations,
              and training anyone who handles personal information on our behalf.
            </P>
            <P>
              No method of transmitting or storing information is completely
              secure. Please take care when sending us information by email,
              particularly sensitive documents such as passports. If you would
              prefer to send documents another way, please ask us.
            </P>
            <P>
              <strong className="text-navy-900">If something goes wrong.</strong> If a
              security breach affects your personal information, we will act
              quickly to contain it and reduce any harm. Where the law requires, we
              will notify the relevant regulators (for example, the ICO, generally
              within 72 hours of becoming aware of a reportable breach, and the
              Office of the Privacy Commissioner of Canada where a breach creates a
              real risk of significant harm), and we will tell you as soon as
              feasible if the breach is likely to put you at real or high risk of
              harm.
            </P>
          </section>

          <section className="mt-12">
            <H2 id="marketing">13. Marketing emails</H2>
            <P>
              We send our newsletter and other marketing emails only to people who
              have actively signed up or otherwise given consent, or where the law
              otherwise permits. Every marketing email we send will:
            </P>
            <Ul>
              <li>clearly identify MapleMedic as the sender;</li>
              <li>include our contact details, including a postal address; and</li>
              <li>include a free and easy way to unsubscribe.</li>
            </Ul>
            <P>
              Our mailing list is run by Brevo, which acts as our service provider
              (see section 9).
            </P>
            <P>
              If you unsubscribe, we will stop sending you marketing emails as soon
              as possible, and in any event within 10 business days. We keep a
              record of your request so we can respect it (see section 11).
            </P>
            <P>
              Unsubscribing from marketing does not stop service messages. If you
              are a candidate or clinic we are working with, we will still contact
              you about that work.
            </P>
          </section>

          <section className="mt-12">
            <H2 id="cookies">14. Cookies and similar technologies</H2>
            <P>
              Cookies are small files placed on your device when you visit a
              website. Similar technologies include pixels, tags and local storage.
            </P>
            <Ul>
              <li>
                <strong className="text-navy-900">Strictly necessary cookies</strong>{" "}
                make our website work (for example, security and remembering your
                cookie choices). We do not need your consent for these.
              </li>
              <li>
                <strong className="text-navy-900">Analytics cookies</strong> help us
                understand how visitors use our website so we can improve it.
              </li>
            </Ul>
            <P>
              You can also block or delete cookies through your browser settings,
              but some parts of the website may not work properly if you do.
            </P>
          </section>

          <section className="mt-12">
            <H2 id="rights">15. Your rights</H2>
            <P>
              You have rights over your personal information. Which rights apply
              can depend on where you are and which law applies, but we will
              respond to any reasonable request wherever you are.
            </P>
            <P>
              <strong className="text-navy-900">Rights under UK law (UK GDPR).</strong>{" "}
              You have the right to:
            </P>
            <Ul>
              <li>
                <strong className="text-navy-900">Access:</strong> ask for a copy of
                the personal information we hold about you and information about
                how we use it.
              </li>
              <li>
                <strong className="text-navy-900">Correction (rectification):</strong>{" "}
                ask us to correct information that is inaccurate or incomplete.
              </li>
              <li>
                <strong className="text-navy-900">Erasure:</strong> ask us to delete
                your information in certain circumstances.
              </li>
              <li>
                <strong className="text-navy-900">Restriction:</strong> ask us to
                limit how we use your information in certain circumstances.
              </li>
              <li>
                <strong className="text-navy-900">Portability:</strong> ask for
                information you gave us, in a structured, commonly used,
                machine-readable format, or ask us to send it to another
                organisation, where we rely on consent or contract and process it
                by automated means.
              </li>
              <li>
                <strong className="text-navy-900">Object:</strong> object to our use
                of your information where we rely on legitimate interests. You have
                an absolute right to object to direct marketing.
              </li>
              <li>
                <strong className="text-navy-900">Withdraw consent:</strong> at any
                time, where we rely on consent.
              </li>
              <li>
                <strong className="text-navy-900">Rights relating to automated decisions:</strong>{" "}
                see section 17.
              </li>
              <li>
                <strong className="text-navy-900">Complain:</strong> see section 16.
              </li>
            </Ul>
            <P>
              <strong className="text-navy-900">Rights under Canadian law (PIPEDA and BC PIPA).</strong>{" "}
              You have the right to:
            </P>
            <Ul>
              <li>
                <strong className="text-navy-900">Access:</strong> ask whether we
                hold personal information about you, how it has been used, and to
                whom it has been disclosed, and to obtain access to it.
              </li>
              <li>
                <strong className="text-navy-900">Correction:</strong> challenge the
                accuracy and completeness of your information and have it corrected
                where appropriate. Where we have shared inaccurate information with
                others, we will tell them about the correction where appropriate.
              </li>
              <li>
                <strong className="text-navy-900">Withdraw consent:</strong> at any
                time, subject to legal or contractual restrictions and reasonable
                notice. We will explain the consequences.
              </li>
              <li>
                <strong className="text-navy-900">Challenge our compliance:</strong>{" "}
                raise concerns with our Privacy Officer and, if you are not
                satisfied, with the relevant Canadian privacy commissioner (see
                section 16).
              </li>
            </Ul>
            <P>
              <strong className="text-navy-900">How to make a request.</strong> Email{" "}
              <Mail email="tiraan@maplemedic.com" />. Please tell us what you are
              asking for. We may need to confirm your identity before we respond,
              and we will only ask for information we need to do this.
            </P>
            <P>
              <strong className="text-navy-900">Timescales and cost.</strong> We will
              respond within the time the applicable law requires. Under UK law,
              this is generally one month, which may be extended by up to two
              further months for complex or numerous requests. Under PIPEDA, it is
              generally 30 days, and under BC PIPA generally 30 business days,
              which in some circumstances may be extended. If we need more time, we
              will tell you why. Requests are normally free. We may charge a
              reasonable fee, or refuse a request, only where the law allows (for
              example, where a request is clearly unfounded or excessive), and we
              will tell you in advance if a fee applies.
            </P>
            <P>
              <strong className="text-navy-900">Limits.</strong> Some rights are not
              absolute. For example, we may not be able to give you access to
              information that would reveal personal information about someone else
              (such as a confidential reference), or that is legally privileged. If
              we refuse a request, we will explain why, unless the law prevents us,
              and tell you how to complain.
            </P>
          </section>

          <section className="mt-12">
            <H2 id="complaints">16. How to make a complaint</H2>
            <P>
              <strong className="text-navy-900">Complain to us first.</strong> If you
              are unhappy with how we have handled your personal information,
              please contact our Privacy Officer at{" "}
              <Mail email="tiraan@maplemedic.com" />. We will acknowledge your
              complaint, investigate it, and tell you the outcome without undue
              delay.
            </P>
            <P>
              <strong className="text-navy-900">Complain to a regulator.</strong> You
              also have the right to complain to a privacy regulator:
            </P>
            <Ul>
              <li>
                <strong className="text-navy-900">United Kingdom:</strong> Information
                Commissioner&apos;s Office (ICO), Wycliffe House, Water Lane,
                Wilmslow, Cheshire SK9 5AF. Website:{" "}
                <Ext href="https://ico.org.uk/make-a-complaint/">
                  https://ico.org.uk/make-a-complaint/
                </Ext>
                . The ICO generally expects you to raise your complaint with us
                first.
              </li>
              <li>
                <strong className="text-navy-900">Canada (federal):</strong> Office of
                the Privacy Commissioner of Canada (OPC). Website:{" "}
                <Ext href="https://www.priv.gc.ca/en/report-a-concern/">
                  https://www.priv.gc.ca/en/report-a-concern/
                </Ext>
                .
              </li>
              <li>
                <strong className="text-navy-900">British Columbia:</strong> Office of
                the Information and Privacy Commissioner for British Columbia (OIPC
                BC). Website:{" "}
                <Ext href="https://www.oipc.bc.ca/">https://www.oipc.bc.ca/</Ext>.
              </li>
            </Ul>
          </section>

          <section className="mt-12">
            <H2 id="automated">17. Automated decisions</H2>
            <P>
              We do not make decisions about you based solely on automated
              processing (that is, without meaningful human involvement) that have
              legal or similarly significant effects on you. Decisions about which
              clinics to introduce you to are made by people at MapleMedic.
            </P>
          </section>

          <section className="mt-12">
            <H2 id="children">18. Children and family members</H2>
            <P>
              <strong className="text-navy-900">Children.</strong> Our website and
              services are intended for adult professionals. We do not knowingly
              collect personal information directly from children.
            </P>
            <P>
              <strong className="text-navy-900">Family members.</strong> If you are a
              candidate, you may choose to share information about your partner,
              children or other family members so that we can help with relocation
              (for example, schooling or partner employment). Please share only
              what is needed, and please let them know that you are sharing their
              information with us and point them to this policy. We will use family
              members&apos; information only to provide the relocation help you have
              asked for, will treat information about children with particular
              care, and will not share it without your agreement.
            </P>
          </section>

          <section className="mt-12">
            <H2 id="links">19. Links to other websites</H2>
            <P>
              Our website and emails may contain links to other websites, such as
              regulators, clinics or partners. We are not responsible for the
              privacy practices of other websites. Please read their privacy
              policies.
            </P>
          </section>

          <section className="mt-12">
            <H2 id="changes">20. Changes to this policy</H2>
            <P>
              We may update this policy from time to time, for example if our
              services, the tools we use, or the law changes. We will post the
              updated policy on our website with a new &quot;last updated&quot;
              date. If we make significant changes, we will tell you directly where
              appropriate, and where the law requires it, we will ask for your
              consent.
            </P>
          </section>

          <section className="mt-12 border-t border-mist-200 pt-8">
            <P>
              <strong className="text-navy-900">Contact our Privacy Officer:</strong>{" "}
              Dr Tiraan Thambipillai, MAPLEMEDIC LTD,{" "}
              <Mail email="tiraan@maplemedic.com" />
            </P>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
