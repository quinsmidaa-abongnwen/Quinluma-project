import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navigation */}
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
            <Link
              href="/"
              className="text-slate-600 hover:text-blue-700"
            >
              Home
            </Link>

            <Link
              href="/services"
              className="text-slate-600 hover:text-blue-700"
            >
              Services
            </Link>

            <Link
              href="/about"
              className="font-semibold text-blue-700 hover:text-blue-800"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-slate-600 hover:text-blue-700"
            >
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
                    className="rounded-lg px-4 py-3 text-slate-700 hover:bg-slate-50"
                  >
                    Services
                  </Link>

                  <Link
                    href="/about"
                    className="rounded-lg bg-blue-50 px-4 py-3 font-semibold text-blue-700"
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
          <p className="font-semibold text-yellow-400">ABOUT QUINLUMA</p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            Technology should help you, not confuse you.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Quinluma is here to make everyday technology easier to understand,
            easier to use, and easier to navigate with confidence.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-yellow-400 px-6 py-3 font-semibold text-blue-950 hover:bg-yellow-300"
            >
              Get Help →
            </Link>
          </div>
        </div>
      </section>

      {/* Where Quinluma Started */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-semibold text-yellow-600">
                WHERE IT STARTED
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Sometimes, the problem is not as big as it looks.
              </h2>
            </div>

            <div>
              <p className="leading-8 text-slate-600">
                The idea for Quinluma came from something that happened in my
                own family. My younger sister accidentally turned on VoiceOver
                on her iPhone and thought she had damaged the phone.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                My family was ready to take the phone to a technician and pay
                for something that could have become an expensive problem.
                Because I had the right knowledge, I was able to understand
                what happened and fix it in less than 15 minutes.
              </p>

              <p className="mt-5 font-semibold leading-8 text-blue-900">
                That moment made me realize something: sometimes people don't
                need a technician. They simply need someone to explain what
                happened.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Idea Behind Quinluma */}
      <section className="bg-blue-50 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold text-blue-700">
            THE IDEA BEHIND QUINLUMA
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Don't just fix the problem. Understand it.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Quinluma helps people understand everyday technology so they can
            solve simple problems themselves, help someone else, and become
            more confident using technology.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-semibold text-green-700">OUR MISSION</p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Helping people feel confident with technology.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Our goal is simple: make digital knowledge accessible, practical,
            and easy to understand so that people can do more for themselves
            and feel less dependent on others.
          </p>
        </div>
      </section>

      {/* Learn Solve Protect */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="font-semibold text-blue-700">OUR APPROACH</p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Learn. Solve. Protect.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              We believe technology becomes less intimidating when people have
              the right information and someone to guide them.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Learn */}
            <div className="rounded-3xl bg-blue-50 p-7">
              <div className="text-3xl">📘</div>

              <h3 className="mt-5 text-xl font-bold text-blue-950">
                Learn
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Understand the technology you use every day through simple,
                practical explanations.
              </p>
            </div>

            {/* Solve */}
            <div className="rounded-3xl bg-green-50 p-7">
              <div className="text-3xl">💡</div>

              <h3 className="mt-5 text-xl font-bold text-green-950">
                Solve
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Get guidance when you are stuck, confused, or simply do not
                know what to do next.
              </p>
            </div>

            {/* Protect */}
            <div className="rounded-3xl bg-yellow-50 p-7">
              <div className="text-3xl">🛡️</div>

              <h3 className="mt-5 text-xl font-bold text-yellow-950">
                Protect
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Learn simple ways to stay safer online and make better digital
                decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="font-semibold text-blue-700">WHAT WE BELIEVE</p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Technology is for everyone.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
              No complicated words. No unnecessary confusion. Just useful
              technology guidance that people can understand and apply.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Simple */}
            <div className="rounded-3xl border border-slate-200 p-7">
              <h3 className="text-xl font-bold text-blue-950">
                Simple
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                We explain things clearly without making people feel lost.
              </p>
            </div>

            {/* Practical */}
            <div className="rounded-3xl border border-slate-200 p-7">
              <h3 className="text-xl font-bold text-blue-950">
                Practical
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                We focus on knowledge and solutions that are useful in real
                everyday situations.
              </p>
            </div>

            {/* Safe */}
            <div className="rounded-3xl border border-slate-200 p-7">
              <h3 className="text-xl font-bold text-blue-950">
                Safe
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                We encourage smarter and safer ways to use digital technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-700 px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Confused about technology?
          </h2>

          <p className="mt-4 text-lg leading-8 text-blue-100">
            You don't have to figure everything out alone.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3 font-semibold text-blue-700 hover:bg-blue-50"
          >
            Talk to Quinluma →
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