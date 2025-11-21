import { faqs } from "@/lib/data";

export default function FAQAccordion() {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm"
        >
          <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900">
            {faq.question}
            <span className="text-brand-blue transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-2 text-sm text-slate-700">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
