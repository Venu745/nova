import React from 'react'

const FinancialCTA = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-28 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-3xl" />

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
        {/* CTA Card */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 px-6 py-16 text-center shadow-2xl sm:px-10 sm:py-20 lg:px-20 lg:py-24">
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-white/[0.04] blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-white/[0.04] blur-3xl" />

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          <div className="relative mx-auto max-w-3xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-300">
              <span className="h-2 w-2 rounded-full bg-white" />
              Start building better habits
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your better workflow
              <span className="block text-slate-500">
                starts today.
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Bring your tasks, goals, and projects together in one simple
              workspace. Start for free and upgrade whenever you need more.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                className="w-full rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg transition-all duration-200 hover:bg-slate-100 hover:shadow-xl sm:w-auto"
              >
                Get started for free
              </button>

              <button
                type="button"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 sm:w-auto"
              >
                Explore plans
              </button>
            </div>

            {/* Reassurance */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-xs text-white">
                  ✓
                </span>
                Free to get started
              </span>

              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-xs text-white">
                  ✓
                </span>
                No credit card required
              </span>

              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-xs text-white">
                  ✓
                </span>
                Cancel anytime
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinancialCTA