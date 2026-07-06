"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { submitLead } from "@/app/actions";

const budgets = [
  "Under $100",
  "$100 – $300",
  "$300 – $600",
  "$600 – $1,000",
  "Over $1,000",
  "Not sure yet",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", budget: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setLoading(true);
    setError(null);

    try {
      const res = await submitLead(form);
      if (res.success) {
        setSent(true);
      } else {
        setError(res.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to database. Please check your internet connection.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ── Heading ────────────────────────────────── */}
      <section className="relative max-w-[1280px] mx-auto px-5 md:px-8 py-20 md:py-28 overflow-hidden">
        <span className="floating-key top-16 right-10 text-4xl hidden lg:block" style={{ transform: "rotate(7deg)" }}>@</span>
        <span className="floating-key bottom-8 left-8 text-3xl hidden lg:block" style={{ transform: "rotate(-9deg)" }}>✉</span>

        <p className="text-sm font-bold tracking-widest uppercase text-on-surface-variant mb-5">Contact</p>
        <h1 className="brand-font text-[44px] md:text-[60px] font-extrabold leading-tight tracking-tight text-primary mb-5">
          Let&apos;s talk.
        </h1>
        <p className="text-on-surface-variant text-base max-w-md leading-relaxed">
          Tell me about your project. I&apos;ll read every message and reply within 24 hours.
          No automated replies, no sales pitch — just a real conversation.
        </p>
      </section>

      <hr className="section-divider" />

      {/* ── Form + Info ────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* Form — 2 columns wide */}
          <div className="md:col-span-2 sketchy-card p-8 md:p-10 bg-white">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-accent-green border-2 border-primary flex items-center justify-center">
                  <CheckCircle size={32} className="text-primary" />
                </div>
                <h2 className="brand-font text-3xl font-bold text-primary">Message sent!</h2>
                <p className="text-on-surface-variant text-sm max-w-xs">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", budget: "", message: "" }); }}
                  className="keycap-button px-6 py-2.5 text-sm border-2 border-primary mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-semibold">Your name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Arjun Sharma"
                      value={form.name}
                      onChange={handle}
                      className="sketch-input text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold">Email address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handle}
                      className="sketch-input text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="budget" className="text-sm font-semibold">Rough budget (optional)</label>
                  <div className="relative">
                    <select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={handle}
                      className="sketch-select text-sm"
                    >
                      <option value="">Select a range…</option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-semibold">Tell me about your project</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="What are you building? What do you need help with? The more detail the better."
                    value={form.message}
                    onChange={handle}
                    className="sketch-textarea text-sm"
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border-2 border-red-400 text-red-700 text-xs font-bold rounded-lg p-3 text-center">
                    ❌ {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="keycap-button keycap-button-primary py-4 text-base justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>Saving Inquiry...</>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div className="flex flex-col gap-6">
            {[
              {
                icon: "📩",
                label: "Email",
                value: "2005aryankumar333@gmail.com",
                sub: "Best way to reach us",
                color: "bg-accent-yellow",
              },
              {
                icon: "⏰",
                label: "Timezone",
                value: "IST (UTC+5:30)",
                sub: "India — available Mon–Sat",
                color: "bg-accent-blue",
              },
              {
                icon: "⚡",
                label: "Response time",
                value: "< 24 hours",
                sub: "Usually much faster",
                color: "bg-accent-green",
              },
            ].map((info) => (
              <div key={info.label} className="sketchy-card p-6 flex items-start gap-5">
                <div className={`w-12 h-12 ${info.color} border-2 border-primary rounded-full flex items-center justify-center text-xl shrink-0`}>
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-0.5">{info.label}</p>
                  <p className="font-bold text-primary text-sm">{info.value}</p>
                  <p className="text-xs text-on-surface-variant">{info.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
