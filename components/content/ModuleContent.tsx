import { ModuleBlock } from "@/types/module";

function Heading({ text }: { text: string }) {
  return <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">{text}</h2>;
}

function Paragraph({ text }: { text: string }) {
  return <p className="text-slate-700 leading-relaxed mb-4">{text}</p>;
}

function KeyPoint({ text }: { text: string }) {
  return (
    <div className="flex gap-3 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
      <span className="text-blue-500 mt-0.5">💡</span>
      <p className="text-blue-800 font-medium">{text}</p>
    </div>
  );
}

function Definition({ term, text }: { term: string; text: string }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
      <dt className="font-bold text-slate-900 mb-1">{term}</dt>
      <dd className="text-slate-600">{text}</dd>
    </div>
  );
}

function GulfNote({ text }: { text: string }) {
  return (
    <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
      <span className="text-amber-500 text-lg flex-shrink-0">🌍</span>
      <div>
        <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">
          Gulf Context
        </p>
        <p className="text-amber-800 text-sm">{text}</p>
      </div>
    </div>
  );
}

function Warning({ text }: { text: string }) {
  return (
    <div className="flex gap-3 bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
      <span className="text-red-500 text-lg flex-shrink-0">⚠️</span>
      <p className="text-red-800 text-sm">{text}</p>
    </div>
  );
}

function Example({ text }: { text: string }) {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
      <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2">
        Example
      </p>
      <p className="text-green-800 text-sm">{text}</p>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-none space-y-2 mb-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-slate-700">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function TableBlock({
  table,
}: {
  table: { headers: string[]; rows: string[][] };
}) {
  return (
    <div className="overflow-x-auto mb-6">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-slate-100">
            {table.headers.map((h, i) => (
              <th
                key={i}
                className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-700"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-slate-50"}>
              {row.map((cell, ci) => (
                <td key={ci} className="border border-slate-200 px-4 py-2 text-slate-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ModuleContent({ blocks }: { blocks: ModuleBlock[] }) {
  return (
    <div className="prose-custom">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return <Heading key={i} text={block.text!} />;
          case "paragraph":
            return <Paragraph key={i} text={block.text!} />;
          case "keyPoint":
            return <KeyPoint key={i} text={block.text!} />;
          case "definition":
            return <Definition key={i} term={block.term!} text={block.text!} />;
          case "gulfNote":
            return <GulfNote key={i} text={block.text!} />;
          case "warning":
            return <Warning key={i} text={block.text!} />;
          case "example":
            return <Example key={i} text={block.text!} />;
          case "list":
            return <List key={i} items={block.items!} />;
          case "table":
            return <TableBlock key={i} table={block.table!} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
