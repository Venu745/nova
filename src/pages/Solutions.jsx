
import React from 'react'

const Solutions = () => {
  const solutions = [
    {
      number: '01',
      title: 'For Individuals',
      description:
        'Turn scattered tasks, ideas, and goals into a clear daily workflow with an AI workspace built around you.',
      tags: ['Personal planning', 'Daily tasks', 'AI assistant'],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M15.5 19a4 4 0 0 0-7 0M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8 1a3 3 0 0 0-3-3m0-6a3 3 0 0 1 0 6m-13 3a3 3 0 0 1 3-3m0-6a3 3 0 0 0 0 6"
          />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'For Teams',
      description:
        'Keep everyone aligned with shared workspaces, smarter collaboration, and AI-powered project organization.',
      tags: ['Team collaboration', 'Shared workspace', 'Projects'],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
          />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'For Startups',
      description:
        'Move from ideas to execution faster by giving your team one intelligent place to plan, build, and grow.',
      tags: ['Planning', 'Execution', 'Growth'],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"
          />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'For Creators',
      description:
        'Capture ideas, organize creative projects, and let NOVA handle the repetitive work behind your workflow.',
      tags: ['Ideas', 'Content planning', 'Creative work'],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="m12 3 1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3Z"
          />
        </svg>
      ),
    },
  ]

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-28 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-[700px] -translate-x-1/2 rounded-full bg-white blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-slate-900" />
            Solutions for every workflow
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Built for the way
            <span className="block text-slate-400">you work.</span>
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg">
            Whether you work solo, lead a team, or are building the next big
            thing, NOVA adapts to your workflow and helps you move faster.
          </p>
        </div>

        {/* Solution Cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <div
              key={solution.number}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-slate-300 hover:shadow-xl"
            >
              {/* Top row */}
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                  {solution.icon}
                </div>

                <span className="text-sm font-semibold tracking-widest text-slate-300">
                  {solution.number}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-semibold text-slate-950">
                {solution.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {solution.description}
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {solution.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-slate-950">
                Explore solution
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>

              {/* Hover glow */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-slate-100 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Featured Solution */}
        <div className="mt-6 overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl">
          <div className="grid lg:grid-cols-2">
            {/* Content */}
            <div className="p-8 sm:p-10 lg:p-14">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                AI-powered workflow
              </div>

              <h3 className="mt-6 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                One intelligent workspace.
                <span className="block text-slate-400">
                  Endless possibilities.
                </span>
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
                NOVA connects your tasks, projects, notes, goals, and
                conversations so your AI can understand the bigger picture —
                and help you decide what comes next.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-xs text-slate-500">Workflow</p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    AI-assisted
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-xs text-slate-500">Focus</p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Always clear
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-xs text-slate-500">Automation</p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Built in
                  </p>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative min-h-[360px] overflow-hidden border-t border-white/10 lg:border-l lg:border-t-0">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />

              {/* Decorative circles */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />

              {/* Main AI Card */}
              <div className="absolute left-1/2 top-1/2 w-[82%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-white/[0.07] p-5 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500">NOVA AI</p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Today's intelligence
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-bold text-slate-950">
                    N
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white">
                      ✦
                    </div>

                    <div>
                      <p className="text-sm font-medium text-white">
                        Focus recommendation
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Based on your priorities
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[78%] rounded-full bg-white" />
                  </div>

                  <div className="mt-3 flex justify-between text-xs">
                    <span className="text-slate-500">Priority alignment</span>
                    <span className="font-medium text-white">78%</span>
                  </div>
                </div>

                {/* Mini tasks */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                    <div className="h-2 w-12 rounded-full bg-white/20" />
                    <div className="mt-3 h-2 w-full rounded-full bg-white/10" />
                    <div className="mt-2 h-2 w-3/4 rounded-full bg-white/10" />
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                    <div className="h-2 w-16 rounded-full bg-white/20" />
                    <div className="mt-3 h-2 w-full rounded-full bg-white/10" />
                    <div className="mt-2 h-2 w-2/3 rounded-full bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            One platform. Every kind of productive work.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Solutions

