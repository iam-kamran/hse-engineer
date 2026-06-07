import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "HSE Glossary | HSE Engineer",
  description:
    "Comprehensive glossary of HSE terms, acronyms, and definitions — ALARP, HAZOP, PTW, LOTO, PSM, GHS, NEBOSH key terms, and Gulf-specific standards. Alphabetical with concise explanations.",
};

interface GlossaryEntry {
  term: string;
  definition: string;
}

function loadGlossary(): GlossaryEntry[] {
  const raw = fs.readFileSync(
    path.join(process.cwd(), "data", "glossary.json"),
    "utf-8"
  );
  const entries: GlossaryEntry[] = JSON.parse(raw);
  return entries.sort((a, b) => a.term.localeCompare(b.term));
}

export default function GlossaryPage() {
  const entries = loadGlossary();

  const letters = Array.from(new Set(entries.map((e) => e.term[0].toUpperCase()))).sort();

  const byLetter = letters.map((letter) => ({
    letter,
    entries: entries.filter((e) => e.term[0].toUpperCase() === letter),
  }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-10">
        <nav className="text-sm text-slate-500 mb-4">
          <Link href="/" className="hover:text-slate-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800 font-medium">Glossary</span>
        </nav>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">HSE Glossary</h1>
        <p className="text-slate-600 max-w-2xl">
          {entries.length} terms covering HSE certifications, OSHA standards, Gulf
          regulations, and safety management concepts — alphabetically organised.
        </p>
      </div>

      {/* Alphabet jump links */}
      <div className="flex flex-wrap gap-2 mb-10 p-4 bg-white border border-slate-200 rounded-xl">
        {letters.map((letter) => (
          <a
            key={letter}
            href={`#letter-${letter}`}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-semibold text-slate-600 hover:bg-green-100 hover:text-green-700 transition-colors"
          >
            {letter}
          </a>
        ))}
      </div>

      {/* Entries by letter */}
      <div className="space-y-10">
        {byLetter.map(({ letter, entries: group }) => (
          <div key={letter} id={`letter-${letter}`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                {letter}
              </div>
              <div className="flex-1 h-px bg-slate-200" />
            </div>
            <div className="space-y-4">
              {group.map((entry) => (
                <div
                  key={entry.term}
                  className="bg-white border border-slate-200 rounded-xl p-5 hover:border-green-300 transition-colors"
                >
                  <h2 className="font-bold text-slate-900 mb-2">{entry.term}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed">{entry.definition}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-green-50 border border-green-200 rounded-xl text-center">
        <p className="text-green-800 font-medium mb-2">Keep Learning</p>
        <p className="text-green-700 text-sm mb-4">
          These terms appear throughout the certification modules. Click any module to
          see them in context with examples and Gulf-specific applications.
        </p>
        <Link
          href="/certifications"
          className="inline-block bg-green-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm"
        >
          Browse Certifications →
        </Link>
      </div>
    </div>
  );
}
