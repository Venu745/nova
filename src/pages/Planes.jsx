
import React from 'react'

const Planes = () => {
  const plans = [
    {
      name: 'Free',
      description: 'For individuals getting started with smarter productivity.',
      price: '$0',
      period: 'forever',
      button: 'Get started',
      popular: false,
      features: [
        'AI productivity assistant',
        'Up to 3 projects',
        'Task & goal management',
        'Basic workspace',
        '7-day activity history',
      ],
    },
    {
      name: 'Pro',
      description: 'For people who want more power, automation, and focus.',
      price: '$19',
      period: 'per month',
      button: 'Start free trial',
      popular: true,
      features: [
        'Everything in Free',
        'Unlimited projects',
        'Advanced AI assistance',
        'Smart task automation',
        'Unlimited activity history',
        'Priority AI processing',
      ],
    },
    {
      name: 'Teams',
      description: 'For teams that want to collaborate and move faster together.',
      price: '$39',
      period: 'per user / month',
      button: 'Start for teams',
      popular: false,
      features: [
        'Everything in Pro',
        'Shared team workspaces',
        'Team collaboration',
        'AI project insights',
        'Admin & permissions',
        'Priority support',
      ],
    },
  ]

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-28 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-white blur-3xl" />

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
            Simple, transparent pricing
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Choose the plan
            <span className="block text-slate-400">that fits your workflow.</span>
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg">
            Start free and upgrade when you need more. No complicated setup,
            no hidden fees, and no unnecessary limits.
          </p>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1.5 shadow-sm">
            <button
              type="button"
              className="rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white shadow-sm"
            >
              Monthly
            </button>

            <button
              type="button"
              className="rounded-full px-5 py-2 text-sm font-medium text-slate-500 transition hover:text-slate-950"
            >
              Yearly
              <span className="ml-1.5 text-xs font-semibold text-slate-950">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-5 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-[2rem] border p-7 transition-all duration-300 sm:p-8 ${
                plan.popular
                  ? 'border-slate-950 bg-slate-950 text-white shadow-2xl lg:-translate-y-3'
                  : 'border-slate-200 bg-white text-slate-950 shadow-sm hover:-translate-y-2 hover:border-slate-300 hover:shadow-xl'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-950 shadow-lg">
                  Most popular
                </div>
              )}

              {/* Plan heading */}
              <div>
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-xl font-semibold ${
                      plan.popular ? 'text-white' : 'text-slate-950'
                    }`}
                  >
                    {plan.name}
                  </h3>

                  {plan.popular && (
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-sm text-white">
                      ✦
                    </div>
                  )}
                </div>

                <p
                  className={`mt-3 min-h-[72px] text-sm leading-6 ${
                    plan.popular ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mt-8">
                <div className="flex items-end gap-2">
                  <span
                    className={`text-5xl font-semibold tracking-tight ${
                      plan.popular ? 'text-white' : 'text-slate-950'
                    }`}
                  >
                    {plan.price}
                  </span>

                  <span
                    className={`mb-1 text-xs ${
                      plan.popular ? 'text-slate-500' : 'text-slate-500'
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <button
                type="button"
                className={`mt-8 w-full rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-white text-slate-950 hover:bg-slate-100'
                    : 'bg-slate-950 text-white hover:bg-slate-800'
                }`}
              >
                {plan.button}
              </button>

              {/* Divider */}
              <div
                className={`my-8 h-px ${
                  plan.popular ? 'bg-white/10' : 'bg-slate-100'
                }`}
              />

              {/* Features */}
              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    plan.popular ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  What's included
                </p>

                <ul className="mt-5 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${
                          plan.popular
                            ? 'bg-white/10 text-white'
                            : 'bg-slate-100 text-slate-950'
                        }`}
                      >
                        ✓
                      </span>

                      <span
                        className={`text-sm ${
                          plan.popular ? 'text-slate-300' : 'text-slate-600'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom note */}
              <div className="mt-auto pt-8">
                <p
                  className={`text-xs ${
                    plan.popular ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  No credit card required to get started.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom reassurance */}
        <div className="mx-auto mt-14 max-w-3xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-xs text-slate-950">
                ✓
              </span>
              Free plan available
            </span>

            <span className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-xs text-slate-950">
                ✓
              </span>
              Cancel anytime
            </span>

            <span className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-xs text-slate-950">
                ✓
              </span>
              Secure workspace
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Planes

