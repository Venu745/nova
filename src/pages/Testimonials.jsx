
import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Alex Morgan',
      role: 'Product Designer',
      company: 'Independent Creator',
      initials: 'AM',
      quote:
        'NOVA completely changed the way I organize my work. I spend less time managing tasks and more time actually creating.',
    },
    {
      name: 'Maya Chen',
      role: 'Startup Founder',
      company: 'Technology Startup',
      initials: 'MC',
      quote:
        'The AI suggestions are surprisingly useful. NOVA understands what I am working toward and helps me prioritize without adding more complexity.',
    },
    {
      name: 'Daniel Brooks',
      role: 'Product Manager',
      company: 'Growing Team',
      initials: 'DB',
      quote:
        'We finally have one place for projects, tasks, notes, and decisions. Our team feels much more aligned since switching to NOVA.',
    },
    {
      name: 'Sophia Williams',
      role: 'Marketing Lead',
      company: 'Creative Team',
      initials: 'SW',
      quote:
        'NOVA feels like having an extra teammate who is always helping you stay focused. It has become part of my everyday workflow.',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-white py-25 sm:py-28 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-[700px] -translate-x-1/2 rounded-full bg-slate-100/70 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-slate-950" />
            Loved by productive people
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Don't just take
            <span className="block text-slate-400">our word for it.</span>
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg">
            See how people are using NOVA to simplify their work, stay focused,
            and get more meaningful things done.
          </p>

          {/* Rating */}
          <div className="mt-7 flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-sm text-slate-950">
                  ★
                </span>
              ))}
            </div>

            <span className="text-sm font-medium text-slate-700">
              4.9/5 average rating
            </span>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className={`group relative flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-slate-300 hover:shadow-xl ${
                index === 1 ? 'lg:translate-y-6' : ''
              }`}
            >
              {/* Quote icon */}
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-lg font-bold text-slate-950">
                  “
                </div>

                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-xs text-slate-900">
                      ★
                    </span>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="mt-7 flex-1 text-[15px] leading-7 text-slate-600">
                “{testimonial.quote}”
              </p>

              {/* Divider */}
              <div className="my-6 h-px bg-slate-100" />

              {/* Person */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white shadow-sm">
                  {testimonial.initials}
                </div>

                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold text-slate-950">
                    {testimonial.name}
                  </h3>

                  <p className="mt-0.5 truncate text-xs text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Company */}
              <div className="mt-4">
                <span className="rounded-full bg-slate-50 px-3 py-1.5 text-[11px] font-medium text-slate-500">
                  {testimonial.company}
                </span>
              </div>

              {/* Hover decoration */}
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-slate-100 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            </article>
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-20 overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-10 sm:px-10 lg:px-14">
          <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div>
              <p className="text-sm font-medium text-slate-400">
                The productivity upgrade
              </p>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                More clarity. Less busywork.
              </h3>
            </div>

            {/* Mini stats */}
            <div className="flex flex-wrap justify-center gap-8 md:justify-end">
              <div>
                <p className="text-2xl font-semibold text-white">10K+</p>
                <p className="mt-1 text-xs text-slate-500">Users</p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">98%</p>
                <p className="mt-1 text-xs text-slate-500">Satisfaction</p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">40%</p>
                <p className="mt-1 text-xs text-slate-500">Less busywork</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

