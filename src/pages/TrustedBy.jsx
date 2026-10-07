
import React from "react";

const TrustedBy = () => {
  const companies = [
    {
      name: "LUMEN",
      icon: "◈",
    },
    {
      name: "VERTEX",
      icon: "◆",
    },
    {
      name: "NORTHSTAR",
      icon: "✦",
    },
    {
      name: "KINETIC",
      icon: "◒",
    },
    {
      name: "PULSE",
      icon: "◉",
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-slate-100 bg-white">
      
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(148,163,184,0.08),_transparent_60%)]" />

      <div className="relative mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
            Trusted by teams
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Built for people who{" "}
            <span className="text-slate-400">think bigger.</span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
            From ambitious startups to growing teams, thousands of people use
            NOVA to organize their work and move faster.
          </p>

        </div>

        {/* Company Logos */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 items-center gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">

          {companies.map((company) => (
            <div
              key={company.name}
              className="group flex items-center justify-center gap-2.5"
            >

              {/* Logo Icon */}
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-sm font-bold text-slate-500 transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white">
                {company.icon}
              </span>

              {/* Company Name */}
              <span className="text-sm font-bold tracking-[0.12em] text-slate-400 transition-colors duration-300 group-hover:text-slate-900 sm:text-base">
                {company.name}
              </span>

            </div>
          ))}

        </div>

        {/* Bottom Trust Card */}
        <div className="mx-auto mt-14 max-w-4xl rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6">

          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

            <div className="flex items-center gap-4">

              <div className="flex -space-x-2">
                {["A", "M", "J", "S"].map((letter, index) => (
                  <div
                    key={index}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-slate-200 text-xs font-bold text-slate-600"
                  >
                    {letter}
                  </div>
                ))}
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Join 10,000+ productive minds
                </p>

                <p className="mt-0.5 text-xs text-slate-400">
                  Growing every day with NOVA
                </p>
              </div>

            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">

              <div className="flex gap-0.5 text-sm text-slate-800">
                ★ ★ ★ ★ ★
              </div>

              <div className="h-5 w-px bg-slate-200" />

              <span className="text-xs font-medium text-slate-500">
                4.9/5 average rating
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TrustedBy;

