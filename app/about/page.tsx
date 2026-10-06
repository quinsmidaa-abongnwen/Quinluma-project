import Link from "next/link";
export default function AboutPage() {
    return (
      <main className="min-h-screen bg-slate-50 text-slate-900">
         {/* Navigation */}
  <header className="border-b border-slate-200 bg-white">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
      
      {/* Logo */}
      <Link
        href="/"
        className="text-2xl font-bold tracking-tight text-blue-950"
      >
        Quinluma
      </Link>

      {/* Navigation Links */}
      <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium">
        <Link
          href="/"
          className="text-slate-600 transition hover:text-blue-700"
        >
          Home
        </Link>

        <Link
          href="/services"
          className="text-slate-600 transition hover:text-blue-700"
        >
          Services
        </Link>

        <Link
          href="/about"
          className="font-semibold text-blue-700"
        >
          About
        </Link>

        <Link
          href="/contact"
          className="text-slate-600 transition hover:text-blue-700"
        >
          Contact
        </Link>

        <Link
          href="/contact"
          className="rounded-full bg-blue-700 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-800"
        >
          Get Help
        </Link>
      </nav>
    </div>
  </header>
        <section className="bg-blue-950 px-6 py-20 text-white">
          <div className="mx-auto max-w-5xl">
            <p className="font-semibold text-yellow-400">ABOUT QUINLUMA</p>
  
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Making technology easier to understand.
            </h1>
  
            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              Quinluma exists to help people who find technology confusing,
              intimidating, or difficult to navigate.
            </p>
          </div>
        </section>
  
        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="font-semibold text-blue-700">THE PROBLEM</p>
  
              <h2 className="mt-3 text-3xl font-bold">
                Technology is everywhere, but understanding it is not.
              </h2>
            </div>
  
            <div>
              <p className="leading-8 text-slate-600">
                Many people use smartphones, computers, online services and
                digital payments every day without fully understanding how they
                work or how to stay safe while using them.
              </p>
  
              <p className="mt-5 leading-8 text-slate-600">
                This lack of digital knowledge can make people dependent on
                others, cause frustration, and increase their exposure to
                online risks and scams.
              </p>
            </div>
          </div>
        </section>
  
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-5xl text-center">
            <p className="font-semibold text-green-700">OUR MISSION</p>
  
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Give people the confidence to use technology for themselves.
            </h2>
  
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              We want to make digital knowledge simple, practical and
              accessible so that people can learn new skills, solve everyday
              technology problems and make safer decisions online.
            </p>
          </div>
        </section>
  
        <section className="bg-slate-50 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold">
              What Quinluma stands for
            </h2>
  
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl bg-blue-50 p-7">
                <h3 className="text-xl font-bold text-blue-950">
                  Simplicity
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  We explain technology using language that everyone can
                  understand.
                </p>
              </div>
  
              <div className="rounded-3xl bg-green-50 p-7">
                <h3 className="text-xl font-bold text-green-950">
                  Empowerment
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  We help people become more confident and independent with
                  technology.
                </p>
              </div>
  
              <div className="rounded-3xl bg-yellow-50 p-7">
                <h3 className="text-xl font-bold text-yellow-950">
                  Safety
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  We promote responsible and safer use of digital technology.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
      <footer className="bg-blue-950 px-6 py-8 text-center text-sm text-blue-200">
        <p>© 2026 Quinluma. Making technology easy to understand.</p>
      </footer>
      </main>
    );
  }