import React from "react";

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-26 sm:py-24 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-slate-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* ================= TOP CONTENT ================= */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT — Product Visual */}
          <div className="relative order-2 lg:order-1">
            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-200/60 blur-3xl" />

            {/* Product Window */}
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_30px_80px_-25px_rgba(15,23,42,0.25)]">
              {/* Header */}
              <div className="flex h-12 items-center justify-between border-b border-slate-100 px-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-400" />
                </div>

                <div className="h-6 w-20 rounded-full bg-slate-100" />
              </div>

              <div className="grid min-h-[400px] grid-cols-[65px_1fr] sm:grid-cols-[90px_1fr]">
                {/* Sidebar */}
                <aside className="border-r border-slate-100 bg-slate-50 p-3">
                  <div className="flex h-9 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
                    N
                  </div>

                  <div className="mt-7 space-y-3">
                    <div className="h-9 rounded-xl bg-white shadow-sm ring-1 ring-slate-200" />

                    <div className="h-9 rounded-xl" />

                    <div className="h-9 rounded-xl" />

                    <div className="h-9 rounded-xl" />

                    <div className="h-9 rounded-xl" />
                  </div>
                </aside>

                {/* Main Dashboard */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                        Workspace
                      </p>

                      <h3 className="mt-1 text-lg font-bold text-slate-900">
                        Product Launch
                      </h3>
                    </div>

                    <div className="flex -space-x-2">
                      <div className="h-7 w-7 rounded-full border-2 border-white bg-slate-300" />
                      <div className="h-7 w-7 rounded-full border-2 border-white bg-slate-500" />
                      <div className="h-7 w-7 rounded-full border-2 border-white bg-slate-700" />
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-700">
                        Project progress
                      </span>

                      <span className="text-xs font-bold text-slate-900">
                        76%
                      </span>
                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full w-[76%] rounded-full bg-slate-900" />
                    </div>
                  </div>

                  {/* Tasks */}
                  <div className="mt-5">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-xs font-bold text-slate-800">
                        Recent tasks
                      </p>

                      <span className="text-[10px] text-slate-400">
                        View all
                      </span>
                    </div>

                    <div className="space-y-2">
                      {[
                        ["Design landing page", true],
                        ["Review marketing copy", true],
                        ["Prepare launch campaign", false],
                        ["Customer feedback analysis", false],
                      ].map(([task, completed]) => (
                        <div
                          key={task}
                          className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3"
                        >
                          <div
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                              completed
                                ? "border-slate-900 bg-slate-900"
                                : "border-slate-200"
                            }`}
                          >
                            {completed && (
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
                            className={`text-[11px] font-medium ${
                              completed
                                ? "text-slate-400 line-through"
                                : "text-slate-600"
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
            <div className="absolute -bottom-7 -right-3 w-52 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:-right-8">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-sm text-white">
                  ✦
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-900">NOVA AI</p>

                  <p className="text-[10px] text-slate-400">
                    Smart recommendation
                  </p>
                </div>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-500">
                Move the campaign review to tomorrow to protect your deep-work
                block.
              </p>
            </div>
          </div>

          {/* RIGHT — About */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-6 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
              The NOVA workspace
            </div>

            <h2 className="mt-6 text-4xl font-bold tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-6xl">
              Your entire workday,
              <br />
              <span className="text-slate-400">in one intelligent place.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              NOVA is an AI-powered productivity platform designed to remove the
              complexity from modern work. It brings your projects, tasks,
              ideas, and team into one connected workspace.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400">
              Instead of switching between dozens of tools, NOVA gives you one
              calm, intelligent environment where your work can move forward.
            </p>

            {/* Benefits */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Less busywork",
                  text: "Automate repetitive processes.",
                },
                {
                  title: "More focus",
                  text: "Know what deserves attention.",
                },
                {
                  title: "Better teamwork",
                  text: "Keep everyone aligned.",
                },
                {
                  title: "Clearer decisions",
                  text: "Turn data into useful insights.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group flex gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition-all duration-300 hover:border-slate-200 hover:bg-white hover:shadow-sm"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-bold text-slate-900 shadow-sm ring-1 ring-slate-100">
                    ✓
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-800">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}
        <div className="mt-24 border-t border-slate-100 pt-12">
          <div className="grid gap-8 md:grid-cols-3 md:gap-12">
            <div>
              <p className="text-3xl font-bold tracking-tight text-slate-900">
                10×
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Faster project organization
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold tracking-tight text-slate-900">
                40%
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Less time spent on busywork
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold tracking-tight text-slate-900">
                1 workspace
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Everything your team needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
