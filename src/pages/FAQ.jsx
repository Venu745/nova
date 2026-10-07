import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'Is there a free plan?',
      answer:
        'Yes. You can use the Free plan without entering a credit card. It includes the core productivity features you need to get started.',
    },
    {
      question: 'Can I switch plans later?',
      answer:
        'Absolutely. You can upgrade or change your plan whenever you need. Your workspace and projects will remain intact when you switch plans.',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer:
        'Yes. There are no long-term contracts. You can cancel your subscription at any time and continue using your plan until the end of your billing period.',
    },
    {
      question: 'What does the AI productivity assistant do?',
      answer:
        'The AI assistant helps you organize tasks, break down goals, prioritize your work, and get useful suggestions based on your projects and workflow.',
    },
    {
      question: 'Is my workspace secure?',
      answer:
        'Yes. We take workspace security seriously and use industry-standard security practices to help protect your data and workspace.',
    },
    {
      question: 'Do you offer plans for teams?',
      answer:
        'Yes. The Teams plan is designed for collaborative workspaces and includes team collaboration, project insights, admin controls, and priority support.',
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
            Frequently asked questions
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Everything you
            <span className="block text-slate-400">need to know.</span>
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg">
            Have questions about the platform, plans, or how everything
            works? Find the answers to the most common questions below.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <div
                  key={faq.question}
                  className={`border-b border-slate-100 last:border-b-0 ${
                    isOpen ? 'bg-slate-50/70' : 'bg-white'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition-colors hover:bg-slate-50 sm:px-8"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold ${
                          isOpen
                            ? 'bg-slate-950 text-white'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span
                        className={`text-base font-semibold sm:text-lg ${
                          isOpen ? 'text-slate-950' : 'text-slate-800'
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-lg transition-all duration-300 ${
                        isOpen
                          ? 'rotate-45 border-slate-950 bg-slate-950 text-white'
                          : 'border-slate-200 bg-white text-slate-500'
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-7 pl-[4.5rem] pr-6 sm:pr-16">
                        <p className="max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-10 text-center shadow-2xl sm:px-10">
            {/* CTA decoration */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/5 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white/5 blur-2xl" />

            <div className="relative">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl text-white">
                ✦
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-white sm:text-3xl">
                Still have questions?
              </h3>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
                We’re happy to help. Reach out to our team and we’ll get back
                to you as soon as possible.
              </p>

              <button
                type="button"
                className="mt-7 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-200 hover:bg-slate-100"
              >
                Contact support
              </button>
            </div>
          </div>
        </div>

        {/* Bottom reassurance */}
        <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-xs text-slate-950">
              ✓
            </span>
            Quick answers
          </span>

          <span className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-xs text-slate-950">
              ✓
            </span>
            Helpful support
          </span>

          <span className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-xs text-slate-950">
              ✓
            </span>
            Simple & transparent
          </span>
        </div>
      </div>
    </section>
  )
}

export default FAQ