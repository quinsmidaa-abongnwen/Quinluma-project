import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
   <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

    {/* Logo */}
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

    {/* Desktop Navbar */}
    <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
      <Link href="/" className="text-slate-600 hover:text-blue-700">
        Home
      </Link>

      <Link href="/services" className="font-semibold text-blue-700 hover:text-blue-800">
        Services
      </Link>

      <Link href="/about" className="text-slate-600 hover:text-blue-700">
        About
      </Link>

      <Link href="/contact" className="text-slate-600 hover:text-blue-700">
        Contact
      </Link>
    </nav>

    {/* Get Help + Mobile Menu */}
    <div className="flex items-center gap-3">
      <Link
        href="/contact"
        className="rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
      >
        Get Help
      </Link>

      {/* Mobile Menu */}
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

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Technology help that makes sense.
          </h1>

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
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold text-blue-600">
              OUR SERVICES
            </p>

            <h2 className="mt-3 text-3xl font-bold text-blue-950 sm:text-4xl">
              Support for real technology needs.
            </h2>

            <p className="mt-4 text-slate-600">
              Choose the type of support you need and take the next step
              toward becoming more confident with technology.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <article className="rounded-3xl border border-blue-100 bg-blue-50 p-8 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl">👩🏽‍💻</div>

              <h3 className="mt-6 text-2xl font-bold text-blue-950">
                Personal Technology Help
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Get personalized assistance with computers, smartphones,
                internet services, software and everyday technology problems.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-block font-semibold text-blue-600 hover:text-blue-800"
              >
                Request Help →
              </Link>
            </article>

            {/* Service 2 */}
            <article className="rounded-3xl border border-green-100 bg-green-50 p-8 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl">🎓</div>

              <h3 className="mt-6 text-2xl font-bold text-green-950">
                Digital Skills Training
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Learn practical digital skills through simple lessons and
                guided training designed for beginners.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-block font-semibold text-green-600 hover:text-green-800"
              >
                Request Training →
              </Link>
            </article>

            {/* Service 3 */}
            <article className="rounded-3xl border border-yellow-100 bg-yellow-50 p-8 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl">🛡️</div>

              <h3 className="mt-6 text-2xl font-bold text-yellow-950">
                Cybersecurity Awareness
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Learn how to recognize online risks, protect accounts and
                develop safer digital habits.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-block font-semibold text-yellow-600 hover:text-yellow-800"
              >
                Improve My Safety →
              </Link>
            </article>

            {/* Service 4 */}
            <article className="rounded-3xl border border-purple-100 bg-purple-50 p-8 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl">💡</div>

              <h3 className="mt-6 text-2xl font-bold text-purple-950">
                Digital Support
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Get practical guidance when you are stuck with an online
                service, digital task or technology problem.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-block font-semibold text-purple-600 hover:text-purple-800"
              >
                Get Support →
              </Link>
            </article>

            {/* Service 5 */}
            <article className="rounded-3xl border border-orange-100 bg-orange-50 p-8 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl">🌐</div>

              <h3 className="mt-6 text-2xl font-bold text-orange-950">
                Website & Digital Services
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Get help with websites and digital solutions for personal
                projects, businesses and organizations.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-block font-semibold text-orange-600 hover:text-orange-800"
              >
                Discuss a Project →
              </Link>
            </article>

            {/* Service 6 */}
            <article className="rounded-3xl border border-pink-100 bg-pink-50 p-8 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl">🏢</div>

              <h3 className="mt-6 text-2xl font-bold text-pink-950">
                Organization Training
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Customized digital skills and cybersecurity awareness
                sessions for schools, businesses and organizations.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-block font-semibold text-pink-600 hover:text-pink-800"
              >
                Book a Session →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Monetization */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold text-green-600">
              WAYS TO WORK WITH QUINLUMA
            </p>

            <h2 className="mt-3 text-3xl font-bold text-blue-950 sm:text-4xl">
              Choose the support you need.
            </h2>

            <p className="mt-4 text-slate-600">
              Quinluma offers practical technology services for individuals,
              businesses, schools and organizations.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-bold text-blue-950">
                Personal Help
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                One-on-one assistance with everyday technology problems.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-block font-semibold text-blue-600"
              >
                Request Service →
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-bold text-blue-950">
                Training
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Digital skills and cybersecurity training for individuals or
                groups.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-block font-semibold text-blue-600"
              >
                Request Service →
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-bold text-blue-950">
                Website Services
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Website development and digital solutions for projects and
                organizations.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-block font-semibold text-blue-600"
              >
                Request Service →
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-bold text-blue-950">
                Organization Support
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Customized technology and cybersecurity sessions for
                organizations.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-block font-semibold text-blue-600"
              >
                Request Service →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-semibold text-blue-600">
            HOW IT WORKS
          </p>

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
                Explain what you need help with.
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">
                2
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Get the right support
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Quinluma connects you with the appropriate service.
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500 text-xl font-bold text-white">
                3
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Become more confident
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Learn, solve your problem and use technology with more
                confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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