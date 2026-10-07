
import React, { useState } from 'react'

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!message.trim()) return

    console.log('User:', message)

    setMessage('')
  }

  return (
    <>
      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-2xl shadow-slate-950/20 sm:right-6">
          
          {/* Header */}
          <div className="bg-slate-950 px-5 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white">
                  ✦
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    NOVA AI
                  </h3>

                  <p className="mt-0.5 text-xs text-slate-400">
                    Your productivity assistant
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/10 hover:text-white"
              >
                ×
              </button>
            </div>
          </div>

          {/* Chat Content */}
          <div className="h-72 overflow-y-auto bg-slate-50 p-4">
            
            {/* AI Message */}
            <div className="flex items-start gap-2">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-xs text-white">
                ✦
              </div>

              <div className="max-w-[80%] rounded-2xl rounded-tl-md bg-white px-4 py-3 shadow-sm">
                <p className="text-sm leading-6 text-slate-600">
                  Hi! I'm NOVA AI. How can I help you today?
                </p>
              </div>
            </div>

            {/* Suggestions */}
            <div className="mt-5 space-y-2">
              <button
                onClick={() => setMessage('Help me organize my tasks')}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-xs font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-950"
              >
                Help me organize my tasks
              </button>

              <button
                onClick={() => setMessage('Create a productivity plan')}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-xs font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-950"
              >
                Create a productivity plan
              </button>

              <button
                onClick={() => setMessage('What should I work on today?')}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-xs font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-950"
              >
                What should I work on today?
              </button>
            </div>
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-slate-100 bg-white p-3"
          >
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask NOVA..."
                className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none placeholder:text-slate-400 focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-100"
              />

              <button
                type="submit"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white transition hover:bg-slate-800"
              >
                ↑
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open NOVA AI"
        className={`fixed bottom-6 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-3xl shadow-xl shadow-slate-950/20 transition-all duration-300 sm:right-6 ${
          isOpen
            ? 'rotate-0 bg-slate-800 text-white'
            : 'bg-slate-950 text-white hover:-translate-y-1 hover:bg-slate-800'
        }`}
      >
        <span className="text-xl">
          {isOpen ? '×' : '✦'}
        </span>
      </button>
    </>
  )
}

export default AIChat

