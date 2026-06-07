import { LearningSidebar } from "@/components/layout/LearningSidebar";

const links = [
  { href: "/fundamentals/what-is-hse", label: "What is HSE", moduleId: "fundamentals/what-is-hse" },
  { href: "/fundamentals/hazard-vs-risk", label: "Hazard vs Risk", moduleId: "fundamentals/hazard-vs-risk" },
  { href: "/fundamentals/types-of-hazards", label: "Types of Hazards", moduleId: "fundamentals/types-of-hazards" },
  { href: "/fundamentals/incident-vs-accident", label: "Incident vs Accident", moduleId: "fundamentals/incident-vs-accident" },
  { href: "/fundamentals/safety-culture", label: "Safety Culture", moduleId: "fundamentals/safety-culture" },
  { href: "/fundamentals/hse-in-the-gulf", label: "HSE in the Gulf", moduleId: "fundamentals/hse-in-the-gulf" },
];

export default function FundamentalsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <LearningSidebar links={links} title="Fundamentals" />
      <div className="flex-1 min-w-0 p-6 lg:p-10 max-w-4xl">{children}</div>
    </div>
  );
}
