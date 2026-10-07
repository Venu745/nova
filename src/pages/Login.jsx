import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
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

      {/* Login Card */}
      <div className="relative w-full max-w-md">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/50 sm:p-9">
          {/* Logo / Icon */}
          <div className="flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-xl text-white shadow-lg">
              ✦
            </div>
          </div>

          {/* Heading */}
          <div className="mt-7 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Welcome back
            </p>

            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
              Login to NOVA
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Continue where you left off and get back to your workflow.
            </p>
          </div>

          {/* Form */}
          <form className="mt-8">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white focus:ring-4 focus:ring-slate-100"
              />
            </div>

            {/* Password */}
            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700"
                >
                  Password
                </label>

                <NavLink
                  to="/forgot-password"
                  className="text-xs font-semibold text-slate-500 transition hover:text-slate-950"
                >
                  Forgot password?
                </NavLink>
              </div>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white focus:ring-4 focus:ring-slate-100"
              />
            </div>

            {/* Remember */}
            <div className="mt-5 flex items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-slate-950 focus:ring-slate-300"
              />

              <label
                htmlFor="remember"
                className="text-sm text-slate-500"
              >
                Remember me
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="mt-7 w-full rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition-all duration-200 hover:bg-slate-800 hover:shadow-xl"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-100" />

            <span className="text-xs text-slate-400">
              OR
            </span>

            <div className="h-px flex-1 bg-slate-100" />
          </div>

          {/* Google */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            <span className="text-base font-bold">G</span>
            Continue with Google
          </button>

          {/* Signup */}
          <p className="mt-7 text-center text-sm text-slate-500">
            Don't have an account?{' '}
            <NavLink
              to=""
              className="font-semibold text-slate-950 transition hover:text-slate-600"
            >
              Create an account
            </NavLink>
          </p>
        </div>

        {/* Bottom text */}
        <p className="mt-6 text-center text-xs leading-5 text-slate-400">
          By continuing, you agree to NOVA's Terms of Service and Privacy
          Policy.
        </p>
      </div>
    </section>
  )
}

export default Login