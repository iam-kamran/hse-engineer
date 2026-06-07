import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <span>🦺</span> HSE Engineer
            </h3>
            <p className="text-sm mb-4">
              Free educational resource for aspiring HSE professionals targeting
              the Gulf region job market.
            </p>
            <Link
              href="/glossary"
              className="inline-block text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-3 py-1.5 rounded-md transition-colors"
            >
              📖 HSE Glossary
            </Link>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Certifications</h3>
            <ul className="space-y-1 text-sm">
              {[
                ["NEBOSH IGC", "/certifications/nebosh-igc"],
                ["IOSH Managing Safely", "/certifications/iosh"],
                ["OSHA 30-Hour", "/certifications/osha"],
                ["First Aid / CPR", "/certifications/first-aid"],
                ["NEBOSH Diploma", "/certifications/nebosh-diploma"],
                ["ISO 45001 / 14001", "/certifications/iso-auditor"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Gulf Interview Prep</h3>
            <ul className="space-y-1 text-sm">
              {[
                ["Saudi Arabia", "/gulf-interview-prep/saudi-arabia"],
                ["UAE", "/gulf-interview-prep/uae"],
                ["Qatar", "/gulf-interview-prep/qatar"],
                ["Kuwait", "/gulf-interview-prep/kuwait"],
                ["Oman", "/gulf-interview-prep/oman"],
                ["Bahrain", "/gulf-interview-prep/bahrain"],
                ["Oil & Gas", "/gulf-interview-prep/oil-gas"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Study Tools</h3>
            <ul className="space-y-1 text-sm">
              {[
                ["My Progress", "/progress"],
                ["Roadmap", "/roadmap"],
                ["HSE Fundamentals", "/fundamentals/what-is-hse"],
                ["Glossary", "/glossary"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-xs">
          <p>Free forever · No account required · Progress saved in your browser</p>
        </div>
      </div>
    </footer>
  );
}
