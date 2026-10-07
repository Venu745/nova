
import React from "react";

const Features = () => {
  const features = [
    {
      number: "01",
      icon: "✦",
      title: "AI Workspace",
      description:
        "Turn ideas into organized plans with an AI workspace that understands your goals, projects, and priorities.",
    },
    {
      number: "02",
      icon: "⌁",
      title: "Smart Automation",
      description:
        "Automate repetitive tasks and workflows so your team can spend more time creating and less time managing.",
    },
    {
      number: "03",
      icon: "◈",
      title: "Intelligent Planning",
      description:
        "NOVA analyzes your workload and helps you prioritize the work that matters most.",
    },
    {
      number: "04",
      icon: "↗",
      title: "Team Collaboration",
      description:
        "Bring your team together with shared projects, real-time updates, comments, and focused communication.",
    },
    {
      number: "05",
      icon: "⌘",
      title: "One Connected Hub",
      description:
        "Keep tasks, documents, notes, projects, and conversations together in one beautifully organized workspace.",
    },
    {
      number: "06",
      icon: "◉",
      title: "Progress Insights",
      description:
        "Understand how your team works with simple insights that reveal productivity trends and opportunities.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-32">

      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-white blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
            Powerful features
          </div>

          <h2 className="text-4xl font-bold tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-6xl">
            Everything you need.
            <br />
            <span className="text-slate-400">
              Nothing you don't.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            NOVA brings your entire workflow together with intelligent tools
            designed to help you focus, collaborate, and get meaningful work
            done faster.
          </p>

        </div>

        {/* ================= FEATURE GRID ================= */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => (
            <div
              key={feature.number}
              className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 sm:p-7 ${
                index === 0
                  ? "lg:col-span-2"
                  : ""
              }`}
            >

              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-slate-100 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

              {/* Top */}
              <div className="relative flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-lg text-white shadow-lg shadow-slate-900/10 transition-transform duration-500 group-hover:scale-110">
                  {feature.icon}
                </div>

                <span className="text-xs font-semibold tracking-widest text-slate-300">
                  {feature.number}
                </span>

              </div>

              {/* Content */}
              <div className="relative mt-8">

                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                  {feature.description}
                </p>

              </div>

              {/* Bottom arrow */}
              <div className="relative mt-8 flex items-center justify-between">

                <span className="text-xs font-semibold text-slate-400 transition-colors duration-300 group-hover:text-slate-700">
                  Explore feature
                </span>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white">
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
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
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* ================= FEATURE HIGHLIGHT ================= */}
        <div className="mt-5 overflow-hidden rounded-3xl bg-slate-950">

          <div className="grid items-center lg:grid-cols-2">

            {/* Text */}
            <div className="p-7 sm:p-10 lg:p-14">

              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-lg text-white">
                ✦
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Built around intelligence
              </p>

              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Your work, amplified by AI.
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
                NOVA doesn't replace the way you work. It learns how you work
                and helps remove the friction between an idea and getting it
                done.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">

                {[
                  "AI powered",
                  "Real-time",
                  "Secure",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                  >
                    ✓ {item}
                  </span>
                ))}

              </div>

            </div>

            {/* Visual */}
            <div className="relative min-h-[330px] overflow-hidden bg-slate-900 p-6 sm:p-10">

              {/* Grid */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                  backgroundSize: "45px 45px",
                }}
              />

              {/* AI window */}
              <div className="relative mx-auto max-w-md rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm text-slate-950">
                    ✦
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      NOVA Intelligence
                    </p>

                    <p className="text-[10px] text-slate-500">
                      Analyzing your workspace...
                    </p>
                  </div>

                </div>

                {/* Progress */}
                <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[78%] rounded-full bg-white" />
                </div>

                <div className="mt-6 space-y-3">

                  {[
                    "Analyzing project priorities",
                    "Finding workflow bottlenecks",
                    "Creating recommendations",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-white/[0.04] p-3"
                    >
                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded-full ${
                          index === 0
                            ? "bg-white text-slate-950"
                            : "bg-white/10 text-slate-500"
                        }`}
                      >
                        {index === 0 ? "✓" : "•"}
                      </div>

                      <span className="text-xs text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Features;

