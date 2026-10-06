"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSending(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus(data.error || "Failed to send message.");
        return;
      }

      setStatus("Your message has been sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };
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
          className="text-slate-600 transition hover:text-blue-700"
        >
          About
        </Link>

        <Link
          href="/contact"
          className="font-semibold text-blue-700"
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
            <p className="font-semibold text-yellow-400">CONTACT QUINLUMA</p>
  
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
              We are here to help.
            </h1>
  
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Have a question, suggestion or technology problem? Get in touch
              with the Quinluma team.
            </p>
          </div>
        </section>
  
        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">
                Tell us what you need.
              </h2>
  
              <p className="mt-5 leading-8 text-slate-600">
                We believe asking for help should be simple. Send us your
                question and we will use it to understand how Quinluma can
                better serve its community.
              </p>
            </div>
  
            <form
  onSubmit={handleSubmit}
  className="rounded-3xl bg-white p-8 shadow-sm"
>
              <label className="block text-sm font-semibold">
                Your name
              </label>
  
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
              />
  
              <label className="mt-5 block text-sm font-semibold">
                Email address
              </label>
  
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
              />
  
              <label className="mt-5 block text-sm font-semibold">
                Message
              </label>
  
              <textarea
                placeholder="How can Quinluma help you?"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
              />
  
              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
              >
                Send Message
              </button>
              {status && (
  <p className="mt-4 text-center text-sm font-medium text-slate-600">
    {status}
  </p>
)}
            </form>
          </div>
        </section>
        {/* Footer */}
      <footer className="bg-blue-950 px-6 py-8 text-center text-sm text-blue-200">
        <p>© 2026 Quinluma. Making technology easy to understand.</p>
      </footer>
      </main>
    );
  }