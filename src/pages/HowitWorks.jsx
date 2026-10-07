
import React from "react";

const HowitWorks = () => {
  const steps = [
    {
      number: "01",
      icon: "⌘",
      title: "Bring your work",
      description:
        "Connect your projects, tasks, notes, and team workflows to create one organized workspace.",
    },
    {
      number: "02",
      icon: "✦",
      title: "Let NOVA think",
      description:
        "Our AI analyzes your work, understands your priorities, and finds smarter ways to move things forward.",
    },
    {
      number: "03",
      icon: "↗",
      title: "Get more done",
      description:
        "Follow intelligent recommendations, automate repetitive work, and focus your energy where it matters.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-32">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-white blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
            How it works
          </div>

          <h2 className="text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
            From idea to done.
            <br />
            <span className="text-slate-400">Without the busywork.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            NOVA makes productivity simple. Bring your work together, let AI
            handle the complexity, and get back to doing your best work.
          </p>

        </div>

        {/* ================= STEPS ================= */}
        <div className="relative mx-auto mt-16 max-w-6xl">

          {/* Connecting line — desktop */}
          <div className="absolute left-[16.66%] right-[16.66%] top-[58px] hidden h-px bg-slate-200 lg:block" />

          <div className="grid gap-6 lg:grid-cols-3">

            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative"
              >

                {/* Step Card */}
                <div className="relative h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-900/5 sm:p-8">

                  {/* Number + Icon */}
                  <div className="relative flex items-center justify-between">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-lg text-white shadow-lg shadow-slate-900/10 transition-transform duration-500 group-hover:scale-110">
                      {step.icon}
                    </div>

                    <span className="text-sm font-bold tracking-widest text-slate-200">
                      {step.number}
                    </span>

                  </div>

                  {/* Content */}
                  <div className="mt-8">

                    <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {step.description}
                    </p>

                  </div>

                  {/* Bottom */}
                  <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 transition-colors duration-300 group-hover:bg-slate-900" />
                    Step {index + 1}
                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>

        {/* ================= AI FLOW ================= */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-slate-950">

          <div className="grid items-center lg:grid-cols-2">

            {/* Left */}
            <div className="p-7 sm:p-10 lg:p-14">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-lg text-white">
                ✦
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Intelligence at every step
              </p>

              <h3 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                NOVA works quietly
                <br />
                in the background.
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
                Instead of adding another complicated tool to your workflow,
                NOVA observes patterns, surfaces important information, and
                helps you make better decisions.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                  Smart suggestions
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                  Automated workflows
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                  Real-time insights
                </span>
              </div>

            </div>

            {/* Right — AI visualization */}
            <div className="relative min-h-[350px] overflow-hidden bg-slate-900 p-6 sm:p-10">

              {/* Grid background */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                  backgroundSize: "45px 45px",
                }}
              />

              <div className="relative mx-auto max-w-md">

                {/* Input */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur">

                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm text-slate-950">
                      +
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-white">
                        Your workspace
                      </p>

                      <p className="text-[10px] text-slate-500">
                        24 tasks · 8 projects · 4 teammates
                      </p>
                    </div>

                  </div>

                </div>

                {/* Arrow */}
                <div className="flex justify-center py-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-xs text-slate-500">
                    ↓
                  </div>
                </div>

                {/* AI */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-4 shadow-2xl backdrop-blur">

                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm text-slate-950">
                      ✦
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-white">
                        NOVA AI
                      </p>

                      <p className="text-[10px] text-slate-500">
                        Processing your workflow...
                      </p>
                    </div>

                  </div>

                  <div className="mt-4 space-y-2">

                    <div className="h-2 w-[90%] rounded-full bg-white/10" />
                    <div className="h-2 w-[70%] rounded-full bg-white/10" />
                    <div className="h-2 w-[82%] rounded-full bg-white/10" />

                  </div>

                </div>

                {/* Arrow */}
                <div className="flex justify-center py-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-xs text-slate-500">
                    ↓
                  </div>
                </div>

                {/* Result */}
                <div className="rounded-2xl border border-white/10 bg-white p-4 shadow-2xl">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-xs text-white">
                        ✓
                      </div>

                      <div>
                        <p className="text-xs font-bold text-slate-900">
                          3 priorities found
                        </p>

                        <p className="text-[10px] text-slate-400">
                          Ready for your day
                        </p>
                      </div>

                    </div>

                    <span className="text-xs font-bold text-slate-900">
                      92%
                    </span>

                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-14 text-center">

          <p className="text-sm text-slate-400">
            Simple setup. Powerful results.
          </p>

          <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800">
            See NOVA in action

            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14m-6-6 6 6-6 6"
              />
            </svg>
          </button>

        </div>

      </div>
    </section>
  );
};

export default HowitWorks;

