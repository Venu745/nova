
import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <main className="relative overflow-hidden bg-white">

      {/* BACKGROUND  */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-slate-200/50 blur-3xl" />

        <div className="absolute right-[-200px] top-[350px] h-[400px] w-[400px] rounded-full bg-slate-100 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage:
              "linear-gradient(to bottom, black 0%, transparent 75%)",
          }}
        />
      </div>

      {/*  HERO  */}
      <section className="relative mx-auto max-w-[1400px] px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-28">

        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-16">

          {/* LEFT CONTENT  */}
          <div className="max-w-3xl">

            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-sm font-medium text-slate-600 shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-slate-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-slate-700" />
              </span>

              Meet the future of productivity
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl xl:text-[82px]">

              Work smarter.
              <br />

              <span className="bg-gradient-to-r from-slate-950 via-slate-600 to-slate-400 bg-clip-text text-transparent">
                Think with AI.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              NOVA is your intelligent productivity workspace. Plan projects,
              organize ideas, automate repetitive work, and turn your
              thoughts into action — all with the power of AI.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <NavLink
                to="/signup"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-900/15 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800"
              >
                Start for free

                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </NavLink>

              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-50">
                
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100">
                  <svg
                    className="ml-0.5 h-3.5 w-3.5 fill-slate-700"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.5 4.5v11l9-5.5-9-5.5z" />
                  </svg>
                </span>

                See how it works
              </button>

            </div>

            {/* Trust */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-400">
              <span>✓ No credit card required</span>
              <span>✓ Free forever plan</span>
              <span>✓ Setup in 60 seconds</span>
            </div>
          </div>

          {/* ================= RIGHT VISUAL ================= */}
          <div className="relative mx-auto w-full max-w-[600px] lg:mx-0">

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-300/30 blur-3xl" />

            {/* Main Dashboard */}
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_30px_100px_-30px_rgba(15,23,42,0.3)]">

              {/* Window Header */}
              <div className="flex h-12 items-center justify-between border-b border-slate-100 px-4">

                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-400" />
                </div>

                <div className="flex items-center gap-2">
                  <div className="h-2 w-20 rounded-full bg-slate-100" />
                  <div className="h-6 w-6 rounded-full bg-slate-900" />
                </div>

              </div>

              {/* Dashboard */}
              <div className="grid min-h-[400px] grid-cols-[80px_1fr] sm:grid-cols-[110px_1fr]">

                {/* Sidebar */}
                <div className="border-r border-slate-100 bg-slate-50/70 p-3">

                  <div className="mb-8 flex h-9 items-center justify-center rounded-xl bg-slate-950 text-xs font-bold text-white">
                    N
                  </div>

                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div
                        key={item}
                        className={`mx-auto h-9 w-full rounded-xl ${
                          item === 1
                            ? "bg-white shadow-sm ring-1 ring-slate-200"
                            : ""
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-7">

                  <div className="flex items-start justify-between">

                    <div>
                      <p className="text-xs font-medium text-slate-400">
                        Monday, September 7
                      </p>

                      <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                        Good morning 👋
                      </h2>
                    </div>

                    <div className="hidden h-9 w-9 rounded-full bg-slate-100 sm:block" />

                  </div>

                  {/* AI Card */}
                  <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-white shadow-xl">

                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                        <span className="text-sm">✦</span>
                      </div>

                      <div>
                        <p className="text-sm font-semibold">
                          NOVA AI
                        </p>

                        <p className="text-[11px] text-slate-400">
                          Your intelligent assistant
                        </p>
                      </div>

                    </div>

                    <p className="mt-5 text-sm leading-6 text-slate-300">
                      You have 3 important tasks today. I've organized your
                      schedule and found 2 opportunities to save time.
                    </p>

                    <button className="mt-4 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-900">
                      View suggestions
                    </button>

                  </div>

                  {/* Tasks */}
                  <div className="mt-6">

                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-sm font-semibold text-slate-800">
                        Today's focus
                      </p>

                      <span className="text-xs text-slate-400">
                        3 of 5
                      </span>
                    </div>

                    <div className="space-y-2.5">

                      {[
                        "Finalize product strategy",
                        "Review team presentation",
                        "Prepare client meeting",
                      ].map((task, index) => (
                        <div
                          key={task}
                          className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3 shadow-sm"
                        >
                          <div
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                              index === 0
                                ? "border-slate-900 bg-slate-900"
                                : "border-slate-200"
                            }`}
                          >
                            {index === 0 && (
                              <svg
                                className="h-3 w-3 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>

                          <span
                            className={`text-xs font-medium ${
                              index === 0
                                ? "text-slate-400 line-through"
                                : "text-slate-700"
                            }`}
                          >
                            {task}
                          </span>
                        </div>
                      ))}

                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Floating AI Card */}
            <div className="absolute -bottom-6 -left-3 hidden w-48 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl sm:block lg:-left-10">

              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 text-xs text-white">
                  ✦
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-900">
                    AI Insight
                  </p>
                  <p className="text-[10px] text-slate-400">
                    Just now
                  </p>
                </div>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-500">
                Your productivity is up
                <span className="font-bold text-slate-900"> 28%</span>
                this week.
              </p>

            </div>

            {/* Floating Notification */}
            <div className="absolute -right-2 top-8 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:block lg:-right-8">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-sm">
                  ✓
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-900">
                    Task completed
                  </p>
                  <p className="text-[10px] text-slate-400">
                    Strategy document
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* ================= BOTTOM STATS ================= */}
        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 border-y border-slate-100 py-7 sm:grid-cols-4">

          {[
            ["10k+", "Active users"],
            ["2.4M", "Tasks completed"],
            ["98%", "User satisfaction"],
            ["24/7", "AI assistance"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="border-slate-100 px-4 text-center first:border-0 sm:border-l"
            >
              <p className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                {number}
              </p>

              <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                {label}
              </p>
            </div>
          ))}

        </div>

      </section>
    </main>
  );
};

export default Hero;

