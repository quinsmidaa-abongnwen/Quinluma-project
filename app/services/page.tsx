
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-lg font-bold text-white">
              Q
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-blue-900">
                Quinluma
              </h1>
              <p className="hidden text-xs text-slate-500 sm:block">
                Making technology easy to understand.
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link href="/" className="text-slate-600 hover:text-blue-700">
              Home
            </Link>
            <Link
              href="/services"
              className="font-semibold text-blue-700 hover:text-blue-800"
            >
              Services
            </Link>
            <Link href="/about" className="text-slate-600 hover:text-blue-700">
              About
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-blue-700">
              Contact
            </Link>
          </nav>

          {/* Get Help and Mobile Navigation */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Get Help
            </Link>

            <details className="relative md:hidden">
              <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-slate-200 text-xl text-slate-700">
                ☰
              </summary>
              <div className="absolute right-0 top-12 z-[999] w-56 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
                <nav className="flex flex-col">
                  <Link
                    href="/"
                    className="rounded-lg px-4 py-3 text-slate-700 hover:bg-slate-50"
                  >
                    Home
                  </Link>
                  <Link
                    href="/services"
                    className="rounded-lg bg-blue-50 px-4 py-3 font-semibold text-blue-700"
                  >
                    Services
                  </Link>
                  <Link
                    href="/about"
                    className="rounded-lg px-4 py-3 text-slate-700 hover:bg-slate-50"
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-lg px-4 py-3 text-slate-700 hover:bg-slate-50"
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            </details>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-blue-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="font-semibold text-yellow-400">
            WHAT QUINLUMA OFFERS
          </p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Technology help that makes sense.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            From learning digital skills to solving technology problems,
            Quinluma provides simple and practical support for everyday
            technology needs.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-yellow-400 px-6 py-3.5 text-center font-bold text-blue-950 transition hover:bg-yellow-300"
            >
              Get Personal Help →
            </Link>
            <a
              href="#services"
              className="rounded-full border border-blue-300 px-6 py-3.5 text-center font-bold text-white transition hover:bg-blue-900"
            >
              Explore Services & Prices
            </a>
          </div>
        </div>
      </section>

      {/* Services and Pricing — Combined into One Section */}
      <section id="services" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold text-blue-600">OUR SERVICES</p>
            <h2 className="mt-3 text-3xl font-bold text-blue-950 sm:text-4xl">
              Simple support at affordable prices.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Choose the help you need. Our starting prices are clear, and
              we will confirm the final cost with you before beginning any
              paid service.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <article className="flex flex-col rounded-3xl border border-blue-100 bg-blue-50 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl">👩🏽‍💻</div>
              <h3 className="mt-5 text-xl font-bold text-blue-950">
                Personal Technology Help
              </h3>
              <p className="mt-3 flex-1 leading-7 text-slate-600">
                Get help with everyday phone, computer, software, email and
                internet problems.
              </p>
              <div className="mt-5 border-t border-blue-100 pt-4">
                <p className="text-sm text-slate-500">Starting from</p>
                <p className="mt-1 text-2xl font-bold text-blue-700">
                500 FCFA
                </p>
                <p className="text-sm text-slate-500">Per session</p>
              </div>
              <Link
                href="/contact"
                className="mt-5 inline-block font-semibold text-blue-700 hover:text-blue-900"
              >
                Request Help →
              </Link>
            </article>

            {/* Service 2 */}
            <article className="flex flex-col rounded-3xl border border-green-100 bg-green-50 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl">🎓</div>
              <h3 className="mt-5 text-xl font-bold text-green-950">
                Digital Skills Training
              </h3>
              <p className="mt-3 flex-1 leading-7 text-slate-600">
                Learn computer basics, email and useful digital tools through
                simple, beginner-friendly lessons.
              </p>
              <div className="mt-5 border-t border-green-100 pt-4">
                <p className="text-sm text-slate-500">Starting from</p>
                <p className="mt-1 text-2xl font-bold text-green-700">
                  1,000 FCFA
                </p>
                <p className="text-sm text-slate-500">Per lesson</p>
              </div>
              <Link
                href="/contact"
                className="mt-5 inline-block font-semibold text-green-700 hover:text-green-900"
              >
                Request Training →
              </Link>
            </article>

            {/* Service 3 */}
            <article className="flex flex-col rounded-3xl border border-yellow-100 bg-yellow-50 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl">🛡️</div>
              <h3 className="mt-5 text-xl font-bold text-yellow-950">
                Cybersecurity Awareness
              </h3>
              <p className="mt-3 flex-1 leading-7 text-slate-600">
                Learn to identify suspicious messages, protect your accounts
                and develop safer online habits.
              </p>
              <div className="mt-5 border-t border-yellow-100 pt-4">
                <p className="text-sm text-slate-500">Starting from</p>
                <p className="mt-1 text-2xl font-bold text-yellow-700">
                  500 FCFA
                </p>
                <p className="text-sm text-slate-500">Per session</p>
              </div>
              <Link
                href="/contact"
                className="mt-5 inline-block font-semibold text-yellow-800 hover:text-yellow-950"
              >
                Improve My Safety →
              </Link>
            </article>

            {/* Service 4 */}
            <article className="flex flex-col rounded-3xl border border-purple-100 bg-purple-50 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl">💡</div>
              <h3 className="mt-5 text-xl font-bold text-purple-950">
                Digital Support
              </h3>
              <p className="mt-3 flex-1 leading-7 text-slate-600">
                Get practical guidance with online services, digital tasks
                and common technology problems.
              </p>
              <div className="mt-5 border-t border-purple-100 pt-4">
                <p className="text-sm text-slate-500">Starting from</p>
                <p className="mt-1 text-2xl font-bold text-purple-700">
                  1,000 FCFA
                </p>
                <p className="text-sm text-slate-500">Per task</p>
              </div>
              <Link
                href="/contact"
                className="mt-5 inline-block font-semibold text-purple-700 hover:text-purple-900"
              >
                Get Support →
              </Link>
            </article>

            {/* Service 5 */}
            <article className="flex flex-col rounded-3xl border border-orange-100 bg-orange-50 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl">🌐</div>
              <h3 className="mt-5 text-xl font-bold text-orange-950">
                Website & Digital Services
              </h3>
              <p className="mt-3 flex-1 leading-7 text-slate-600">
                Get website development and digital solutions for personal
                projects, businesses and organizations.
              </p>
              <div className="mt-5 border-t border-orange-100 pt-4">
                <p className="text-sm text-slate-500">Pricing</p>
                <p className="mt-1 text-xl font-bold text-orange-700">
                  Custom Quote
                </p>
                <p className="text-sm text-slate-500">
                  Based on your project
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-5 inline-block font-semibold text-orange-700 hover:text-orange-900"
              >
                Discuss a Project →
              </Link>
            </article>

            {/* Service 6 */}
            <article className="flex flex-col rounded-3xl border border-pink-100 bg-pink-50 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl">🏢</div>
              <h3 className="mt-5 text-xl font-bold text-pink-950">
                Organization Training
              </h3>
              <p className="mt-3 flex-1 leading-7 text-slate-600">
                Arrange digital skills and cybersecurity awareness sessions
                for schools, businesses and organizations.
              </p>
              <div className="mt-5 border-t border-pink-100 pt-4">
                <p className="text-sm text-slate-500">Pricing</p>
                <p className="mt-1 text-xl font-bold text-pink-700">
                  Custom Quote
                </p>
                <p className="text-sm text-slate-500">
                  Based on group size and needs
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-5 inline-block font-semibold text-pink-700 hover:text-pink-900"
              >
                Discuss Training →
              </Link>
            </article>
          </div>

          <p className="mt-8 text-center text-sm leading-6 text-slate-500">
            Prices are suggested starting rates. The final cost will be
            agreed with you before any paid service begins. No payment is
            collected directly through this page.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-semibold text-blue-600">HOW IT WORKS</p>
          <h2 className="mt-3 text-3xl font-bold text-blue-950 sm:text-4xl">
            Getting help is simple.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                1
              </div>
              <h3 className="mt-5 text-xl font-bold">
                Tell us your problem
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Explain what you need help with through our Contact page.
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">
                2
              </div>
              <h3 className="mt-5 text-xl font-bold">
                Confirm the service and price
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                We discuss your needs and confirm the cost before starting
                any paid service.
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500 text-xl font-bold text-white">
                3
              </div>
              <h3 className="mt-5 text-xl font-bold">
                Build your confidence
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Get practical help, learn useful skills and use technology
                with greater confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Technology doesn't have to be complicated.
          </h2>
          <p className="mt-5 text-lg leading-8 text-blue-200">
            Tell Quinluma what you need and take the next step toward solving
            your technology problem.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-yellow-400 px-7 py-3.5 font-bold text-blue-950 transition hover:bg-yellow-300"
          >
            Contact Quinluma →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 px-6 py-8 text-center text-sm text-blue-200">
        <p>© 2026 Quinluma. Making technology easy to understand.</p>
      </footer>
    </main>
  );
}
