import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

const certLabels: Record<string, string> = {
  "nebosh-igc": "NEBOSH IGC",
  iosh: "IOSH Managing Safely",
  osha: "OSHA 30-Hour",
  "first-aid": "First Aid / CPR",
  "nebosh-diploma": "NEBOSH Diploma",
  "iso-auditor": "ISO 45001 / 14001 Lead Auditor",
};

export default function InterviewPrepPage({ params }: { params: { cert: string } }) {
  const certLabel = certLabels[params.cert] || params.cert;

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Certifications", href: "/certifications" },
          { label: certLabel, href: `/certifications/${params.cert}` },
          { label: "Interview Prep" },
        ]}
      />
      <div className="py-12 text-center">
        <div className="text-5xl mb-4">🚧</div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          {certLabel} — Interview Questions
        </h1>
        <p className="text-slate-500 mb-6 max-w-md mx-auto">
          Targeted interview questions for {certLabel} topics are being added.
          In the meantime, explore the Gulf Interview Prep hub.
        </p>
        <Link
          href="/gulf-interview-prep/saudi-arabia"
          className="bg-green-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-green-700 transition-colors inline-block"
        >
          Gulf Interview Prep Hub →
        </Link>
      </div>
    </div>
  );
}
