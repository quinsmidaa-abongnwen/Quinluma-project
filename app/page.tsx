"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const askQuinluma = async () => {

    console.log("Ask Quinluma clicked");
  
    if (!question.trim()) {
  
      setAnswer("Please enter a question first.");
  
      return;
  
    }
  
    setAnswer("Quinluma is thinking...");
  
    try {
  
      const response = await fetch("/api/ask", {
  
        method: "POST",
  
        headers: {
  
          "Content-Type": "application/json",
  
        },
  
        body: JSON.stringify({ message: question }),
  
      });
  
      const data = await response.json();
  
      if (!response.ok) {
  
        setAnswer(data.error || "Something went wrong.");
  
        return;
  
      }
  
      setAnswer(data.answer);
  
    } catch (error) {
  
      console.error("Ask Quinluma error:", error);
  
      setAnswer("Sorry, I could not connect to Quinluma.");
  
    }
 
  };
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
      <Link href="/" className="font-semibold text-blue-700 hover:text-blue-800">
        Home
      </Link>

      <Link href="/services" className="text-slate-600 hover:text-blue-700">
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

      {/* Native mobile dropdown */}
      <details className="relative md:hidden">
        <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-slate-200 text-xl text-slate-700">
          
        </summary>

        <div className="absolute right-0 top-12 z-[999] w-56 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
          <nav className="flex flex-col">
            <Link
              href="/"
              className="rounded-lg px-4 py-3 font-semibold text-blue-700 hover:bg-blue-50"
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
<section className="overflow-hidden bg-blue-50">
  <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">

    {/* Hero Text */}
    <div className="max-w-2xl">
      <div className="mb-6 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
        Digital knowledge for everyone
      </div>

      <h2 className="text-5xl font-bold leading-tight tracking-tight text-blue-950 sm:text-6xl">
        Technology should not feel{" "}
        <span className="text-blue-600">difficult.</span>
      </h2>

      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
        Quinluma helps people understand technology, solve everyday
        digital problems, and stay safer online through simple,
        practical guidance.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href="#learn"
          className="rounded-full bg-blue-600 px-7 py-3.5 text-center font-bold text-white transition hover:bg-blue-700"
        >
          Start Learning →
        </a>

        <a
          href="#solve"
          className="rounded-full border-2 border-blue-600 bg-white px-7 py-3.5 text-center font-bold text-blue-700 transition hover:bg-blue-50"
        >
          I Need Help
        </a>
      </div>
    </div>

{/* Hero Visual */}
<div className="flex justify-center lg:justify-end">
  <div className="flex h-80 w-full max-w-md items-center justify-center overflow-hidden rounded-[3rem] bg-white p-6 shadow-sm">
    <img
      src="/quinluma-visual.png"
      alt="Quinluma technology assistant"
      className="h-full w-full object-contain"
    />
  </div>
</div>
  </div>
</section>

      {/* Three Pillars */}
<section className="bg-white px-6 py-20 lg:px-8">
  <div className="mx-auto max-w-7xl">
    <div className="mx-auto max-w-2xl text-center">
      <p className="font-semibold text-blue-600">
        HOW QUINLUMA HELPS
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
        Learn. Solve. Protect.
      </h2>

      <p className="mt-4 text-slate-600">
        Simple digital support for people who want to become more
        confident with technology.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-3">

      {/* Learn */}
      <article
        id="learn"
        className="rounded-3xl border border-blue-100 bg-blue-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white">
          📚
        </div>

        <h3 className="mt-6 text-2xl font-bold text-blue-950">
          Learn
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Learn computer, smartphone, internet, online service,
          and cybersecurity basics through simple explanations.
        </p>

        <a
          href="#"
          className="mt-6 inline-block font-semibold text-blue-600 hover:text-blue-800"
        >
          Explore learning →
        </a>
      </article>

      {/* Solve */}
      <article
        id="solve"
        className="rounded-3xl border border-green-100 bg-green-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600 text-2xl text-white">
          💡
        </div>

        <h3 className="mt-6 text-2xl font-bold text-green-950">
          Solve
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Get practical, step-by-step guidance when you don't know
          how to complete a digital task or solve a technology problem.
        </p>

        <a
          href="#"
          className="mt-6 inline-block font-semibold text-green-600 hover:text-green-800"
        >
          Find a solution →
        </a>
      </article>

      {/* Protect */}
      <article
        id="protect"
        className="rounded-3xl border border-yellow-100 bg-yellow-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500 text-2xl text-white">
          🛡️
        </div>

        <h3 className="mt-6 text-2xl font-bold text-yellow-950">
          Protect
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Understand online risks, recognize suspicious activity,
          and learn practical ways to protect your accounts and information.
        </p>

        <a
          href="#"
          className="mt-6 inline-block font-semibold text-yellow-600 hover:text-yellow-800"
        >
          Learn about safety →
        </a>
      </article>

    </div>
  </div>
</section>

{/* Ask Quinluma */}
<section className="bg-white px-6 py-20" id="about">
  <div className="mx-auto max-w-5xl rounded-3xl bg-slate-900 p-8 shadow-xl sm:p-12">
    <div className="max-w-3xl">
      <p className="font-semibold text-yellow-400">ASK QUINLUMA</p>

      <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
        Have a technology problem?
      </h2>

      <p className="mt-4 leading-7 text-slate-300">
        Tell us what you are struggling with. Quinluma is designed to
        turn confusing technology into simple, understandable steps.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          placeholder="What do you need help with?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="min-h-12 flex-1 rounded-xl border border-slate-700 bg-white px-4 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />

        <button
          type="button"
          onClick={askQuinluma}
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
        >
          Ask Quinluma
        </button>
      </div>

      {answer && (
        <div className="mt-5 rounded-xl bg-white/10 p-4 text-sm leading-6 text-slate-200">
          {answer}
        </div>
      )}
    </div>
  </div>
</section>

{/* Personal Help */}
<section className="bg-white px-6 py-20">
  <div className="mx-auto max-w-5xl rounded-3xl border border-blue-100 bg-blue-50 p-8 text-center shadow-sm sm:p-12">
    <p className="font-semibold text-blue-600">
      NEED PERSONAL HELP?
    </p>

    <h2 className="mt-3 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
      Don't struggle with technology alone.
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
      Get personalized help with everyday technology problems,
      digital skills, online safety, and other technology challenges.
    </p>

    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <Link
        href="/contact"
        className="rounded-full bg-blue-600 px-7 py-3.5 font-bold text-white transition hover:bg-blue-700"
      >
        Get Personal Help →
      </Link>

      <Link
        href="/services"
        className="rounded-full border-2 border-blue-600 bg-white px-7 py-3.5 font-bold text-blue-700 transition hover:bg-blue-50"
      >
        View Services
      </Link>
    </div>
  </div>
</section>

      {/* Mission */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold text-green-700">OUR MISSION</p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Making digital knowledge accessible to everyone.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We believe people should not have to depend on others simply
            because technology feels complicated. Quinluma exists to make
            digital knowledge easier to understand, easier to use, and safer
            for everyday people.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-blue-900 px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Ready to understand technology better?
            </h2>
            <p className="mt-2 text-blue-200">
              Quinluma is here to make technology easier.
            </p>
          </div>

          <Link
  href="/contact"
  className="rounded-full bg-yellow-400 px-6 py-3 font-bold text-blue-950 transition hover:bg-yellow-300"
>
  Contact Quinluma
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