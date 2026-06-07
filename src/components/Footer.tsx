import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-800 bg-navy-950 text-mist-200">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed text-mist-300">
              Developing modern clinics in Canada with UK-trained medical talent.
            </p>
            <a
              href="mailto:hello@maplemed.co"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-maple-400"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
                <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              hello@maplemed.co
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="/#about" className="transition-colors hover:text-white">About</a></li>
              <li><a href="/#why-canada" className="transition-colors hover:text-white">Why Canada?</a></li>
              <li><a href="/#clinics" className="transition-colors hover:text-white">Clinics</a></li>
              <li><a href="/#doctors" className="transition-colors hover:text-white">For Doctors</a></li>
              <li><a href="/#process" className="transition-colors hover:text-white">Process</a></li>
              <li><a href="/#faq" className="transition-colors hover:text-white">FAQ</a></li>
              <li><a href="/#join" className="transition-colors hover:text-white">Register Interest</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="/privacy" className="transition-colors hover:text-white">Privacy Policy</a></li>
              <li><a href="/privacy#terms" className="transition-colors hover:text-white">Terms</a></li>
              <li><a href="mailto:hello@maplemed.co" className="transition-colors hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-navy-800 pt-8">
          <p className="text-xs leading-relaxed text-mist-300">
            MapleMed is not a medical regulator, immigration adviser or government
            body. Information provided is general only and does not guarantee
            employment, licensing or immigration outcomes.
          </p>
          <p className="mt-4 text-xs text-mist-300">
            &copy; {year} MapleMed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
