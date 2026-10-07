
import React from "react";

const Statistics = () => {
  const stats = [
    {
      number: "10K+",
      label: "Active users",
      description: "People building better workflows with NOVA.",
    },
    {
      number: "2.4M",
      label: "Tasks completed",
      description: "Projects and tasks moved forward every month.",
    },
    {
      number: "98%",
      label: "Satisfaction",
      description: "Teams that say NOVA makes work simpler.",
    },
    {
      number: "40%",
      label: "Less busywork",
      description: "Average time saved on repetitive work.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">

      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[800px] -translate-x-1/2 rounded-full bg-slate-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
            NOVA by the numbers
          </div>

          <h2 className="text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
            Less chaos.
            <br />
            <span className="text-slate-400">
              More meaningful work.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            Thousands of people use NOVA to simplify their work, automate
            repetitive tasks, and create more time for what actually matters.
          </p>

        </div>

        {/* ================= STATISTICS ================= */}
        <div className="mx-auto mt-16 max-w-6xl">

          <div className="grid overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 sm:grid-cols-2 lg:grid-cols-4">

            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`group relative p-6 transition-all duration-300 hover:bg-white sm:p-8 ${
                  index !== 0
                    ? "border-t border-slate-200 sm:border-l sm:border-t-0"
                    : ""
                } ${
                  index === 2
                    ? "lg:border-t-0"
                    : ""
                }`}
              >

                {/* Number */}
                <div className="flex items-start justify-between">

                  <span className="text-4xl font-bold tracking-[-0.04em] text-slate-950 transition-transform duration-300 group-hover:-translate-y-1 sm:text-5xl">
                    {stat.number}
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs text-slate-400 shadow-sm ring-1 ring-slate-100 transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white">
                    ↗
                  </span>

                </div>

                {/* Label */}
                <h3 className="mt-5 text-sm font-bold text-slate-800">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs leading-5 text-slate-400">
                  {stat.description}
                </p>

                {/* Bottom line */}
                <div className="mt-6 h-px w-full bg-slate-200">
                  <div className="h-px w-0 bg-slate-900 transition-all duration-500 group-hover:w-full" />
                </div>

              </div>
            ))}

          </div>

        </div>

        {/* ================= PERFORMANCE CARD ================= */}
        <div className="mx-auto mt-6 max-w-6xl overflow-hidden rounded-[28px] bg-slate-950">

          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

            {/* Left */}
            <div className="p-7 sm:p-10 lg:p-12">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-lg text-white">
                ✦
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Productivity impact
              </p>

              <h3 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Your time is worth more.
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
                NOVA helps eliminate the small tasks that consume your day,
                giving you more time to focus on strategy, creativity, and
                the work only you can do.
              </p>

              <div className="mt-7 flex items-center gap-3">

                <div className="flex -space-x-2">
                  {["A", "N", "R", "K"].map((letter) => (
                    <div
                      key={letter}
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-950 bg-slate-800 text-[10px] font-bold text-slate-300"
                    >
                      {letter}
                    </div>
                  ))}
                </div>

                <span className="text-xs text-slate-500">
                  Join thousands of productive teams
                </span>

              </div>

            </div>

            {/* Right — Graph */}
            <div className="relative min-h-[320px] overflow-hidden border-t border-white/10 bg-slate-900 p-6 sm:p-10 lg:border-l lg:border-t-0">

              {/* Grid */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                  backgroundSize: "45px 45px",
                }}
              />

              <div className="relative h-full min-h-[260px]">

                {/* Chart labels */}
                <div className="absolute left-0 top-0 text-[10px] text-slate-600">
                  Productivity
                </div>

                <div className="absolute right-0 top-0 text-[10px] text-slate-600">
                  This year
                </div>

                {/* Chart */}
                <div className="absolute inset-x-0 bottom-8 top-10">

                  {/* Horizontal lines */}
                  <div className="absolute inset-0 flex flex-col justify-between">
                    <div className="border-t border-white/5" />
                    <div className="border-t border-white/5" />
                    <div className="border-t border-white/5" />
                    <div className="border-t border-white/5" />
                    <div className="border-t border-white/5" />
                  </div>

                  {/* Graph line */}
                  <svg
                    className="absolute inset-0 h-full w-full overflow-visible"
                    viewBox="0 0 600 220"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 190 C70 180 80 165 130 170 C180 175 190 130 240 140 C290 150 300 110 350 115 C400 120 420 80 465 85 C510 90 530 45 600 25"
                      fill="none"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Graph points */}
                  <div className="absolute bottom-[12%] left-[18%] h-3 w-3 rounded-full bg-white ring-4 ring-white/10" />
                  <div className="absolute bottom-[38%] left-[40%] h-3 w-3 rounded-full bg-white ring-4 ring-white/10" />
                  <div className="absolute bottom-[58%] left-[68%] h-3 w-3 rounded-full bg-white ring-4 ring-white/10" />
                  <div className="absolute right-0 top-[5%] h-3 w-3 rounded-full bg-white ring-4 ring-white/10" />

                </div>

                {/* Bottom labels */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-slate-600">
                  <span>Jan</span>
                  <span>Apr</span>
                  <span>Jul</span>
                  <span>Sep</span>
                </div>

                {/* Floating result */}
                <div className="absolute right-4 top-12 rounded-xl border border-white/10 bg-white/[0.08] px-4 py-3 backdrop-blur-xl sm:right-8">

                  <p className="text-[10px] text-slate-500">
                    Productivity
                  </p>

                  <div className="mt-1 flex items-end gap-2">
                    <span className="text-xl font-bold text-white">
                      +40%
                    </span>

                    <span className="mb-1 text-[10px] text-slate-400">
                      ↑ this year
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-12 text-center">

          <p className="text-sm text-slate-400">
            Numbers that reflect a simpler way to work.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Statistics;

