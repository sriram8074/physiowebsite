import { testimonials } from "@/lib/data";

export default function TestimonialList() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.name}
          className="card flex h-full flex-col justify-between rounded-2xl p-5"
        >
          <p className="text-sm text-slate-700">“{testimonial.quote}”</p>
          <p className="mt-4 text-sm font-semibold text-slate-900">
            {testimonial.name}
          </p>
        </div>
      ))}
    </div>
  );
}
