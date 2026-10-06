import Link from "next/link";
export default function ServicesPage() {
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
          className="font-semibold text-blue-700"
        >
          Services
        </Link>
        
        <Link
          href="/about"
          className="text-slate-600 transition hover:text-blue-700"
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
            <p className="font-semibold text-yellow-400">OUR SERVICES</p>
  
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
              Practical technology help for everyday life.
            </h1>
  
            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              Quinluma combines digital education, practical guidance and
              cybersecurity awareness in one simple place.
            </p>
          </div>
        </section>
  
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-3">
            <article className="rounded-3xl border border-blue-100 bg-blue-50 p-8">
              <div className="text-4xl">📚</div>
  
              <h2 className="mt-6 text-2xl font-bold text-blue-950">
                Digital Learning
              </h2>
  
              <p className="mt-4 leading-7 text-slate-600">
                Simple lessons covering computers, smartphones, internet use,
                online services, digital payments and basic cybersecurity.
              </p>
            </article>
  
            <article className="rounded-3xl border border-green-100 bg-green-50 p-8">
              <div className="text-4xl">💡</div>
  
              <h2 className="mt-6 text-2xl font-bold text-green-950">
                Technology Help
              </h2>
  
              <p className="mt-4 leading-7 text-slate-600">
                Step-by-step guidance for people who need help completing
                everyday digital tasks or understanding technology.
              </p>
            </article>
  
            <article className="rounded-3xl border border-yellow-100 bg-yellow-50 p-8">
              <div className="text-4xl">🛡️</div>
  
              <h2 className="mt-6 text-2xl font-bold text-yellow-950">
                Digital Safety
              </h2>
  
              <p className="mt-4 leading-7 text-slate-600">
                Practical education about suspicious messages, account
                security, online scams and safer digital habits.
              </p>
            </article>
          </div>
        </section>
  
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold">
              Built around real problems
            </h2>
  
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Quinluma focuses on situations people actually encounter instead
              of overwhelming users with complicated technical information.
            </p>
  
            <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5">
                How do I create and secure an email account?
              </div>
  
              <div className="rounded-2xl bg-slate-50 p-5">
                How can I recognize a suspicious online message?
              </div>
  
              <div className="rounded-2xl bg-slate-50 p-5">
                How do I use an online service?
              </div>
  
              <div className="rounded-2xl bg-slate-50 p-5">
                How can I protect my accounts?
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