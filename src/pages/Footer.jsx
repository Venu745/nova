import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpeg'

const Footer = () => {
  const productLinks = [
    { name: 'Features', to: '/features' },
    { name: 'Pricing', to: '/pricing' },
    { name: 'FAQ', to: '/faq' },
  ]

  const companyLinks = [
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
    { name: 'Careers', to: '' },
  ]

  const resourceLinks = [
    { name: 'Help center', to: '' },
    { name: 'Documentation', to: '' },
    { name: 'Privacy', to: '' },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:py-20">
          {/* Brand */}
          <div className="max-w-sm">
            <NavLink
              to="/"
              className="group flex w-fit shrink-0 items-center gap-3"
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-slate-300/40 blur-md transition duration-300 group-hover:bg-slate-400/60" />

                <img
                  src={logo}
                  alt="NOVA Logo"
                  className="relative h-10 w-10 rounded-xl object-cover ring-1 ring-slate-200 transition duration-300 group-hover:scale-105"
                />
              </div>

              <span className="text-lg font-bold tracking-tight text-slate-900">
                NOVA
              </span>
            </NavLink>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-500">
              A smarter workspace for managing your tasks, goals, and projects
              without the unnecessary complexity.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-2">
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-500 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
              >
                X
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-500 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
              >
                in
              </a>

              <a
                href="#"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-500 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
              >
                GH
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-slate-950">
              Product
            </h3>

            <ul className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    className="text-sm text-slate-500 transition hover:text-slate-950"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-slate-950">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    className="text-sm text-slate-500 transition hover:text-slate-950"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-slate-950">
              Resources
            </h3>

            <ul className="mt-5 space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    className="text-sm text-slate-500 transition hover:text-slate-950"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter / CTA */}
        <div className="border-t border-slate-100 py-8">
          <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-sm font-semibold text-slate-950">
                Stay in the loop
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Get occasional product updates and productivity tips.
              </p>
            </div>

            <form className="flex w-full max-w-md gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
              />

              <button
                type="submit"
                className="shrink-0 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-slate-100 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} NOVA. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <NavLink
              to="/terms"
              className="text-xs text-slate-400 transition hover:text-slate-950"
            >
              Terms
            </NavLink>

            <NavLink
              to="/privacy"
              className="text-xs text-slate-400 transition hover:text-slate-950"
            >
              Privacy
            </NavLink>

            <NavLink
              to="/cookies"
              className="text-xs text-slate-400 transition hover:text-slate-950"
            >
              Cookies
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer