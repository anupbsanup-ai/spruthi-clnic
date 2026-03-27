import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedCounter from "../components/AnimatedCounter";
import LeadForm from "../components/LeadForm";
import TestimonialsSection from "../components/TestimonialsColumns";
import AppointmentPrompt from "../components/AppointmentPrompt";
import TreatmentTicker from "../components/TreatmentTicker";
import WhyUs from "../components/WhyUs";
import StickyBar from "../components/StickyBar";
import { clinicConfig, waLink } from "../config/clinic";

const steps = [
  { num: "01", title: "Book in Seconds", desc: "Fill the quick form or message us on WhatsApp. No lengthy registration needed.", icon: "📋" },
  { num: "02", title: "Get Confirmed", desc: "We confirm your slot within minutes. You'll receive a WhatsApp message instantly.", icon: "✅" },
  { num: "03", title: "Visit & Feel Better", desc: "Walk in at your time, skip the queue, and get expert care you can trust.", icon: "🏥" },
];

const faqs = [
  { q: "Do I need to register before visiting?", a: "No. Just book via WhatsApp or the form on our website and come in at your time. No paperwork, no queues." },
  { q: "What are the clinic hours?", a: `Spurthi Clinic is open ${clinicConfig.hoursShort}, All Days including weekends. Morning slots till 1:30 PM and evening slots from 6:00 PM.` },
  { q: "What is the consultation fee?", a: `The consultation fee is just ₹${clinicConfig.doctor.fee}. No hidden charges, no unnecessary tests.` },
  { q: "How quickly will I get a confirmed slot?", a: "Usually within 5–10 minutes of messaging us on WhatsApp. We're available all days." },
  { q: "Where is Spurthi Clinic located?", a: `We are located at ${clinicConfig.address}. Easily accessible from the surrounding areas of Bengaluru.` },
  { q: "Can I consult online/virtually?", a: "Yes, we offer tele-consultations for follow-up visits and minor concerns. Book via WhatsApp." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all ${open ? "border-teal-200 shadow-sm" : "border-gray-100"}`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-4 text-left">
        <span className="font-semibold text-gray-800 pr-4">{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xl font-light ${open ? "bg-teal-500 text-white" : "bg-gray-100 text-gray-500"}`}>
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
            <p className="px-6 pb-5 text-gray-500 leading-relaxed text-sm">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>{clinicConfig.seo.title}</title>
        <meta name="description" content={clinicConfig.seo.description} />
        <link rel="canonical" href={clinicConfig.url} />
      </Head>

      <Navbar />
      <TreatmentTicker />

      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={clinicConfig.heroImage} alt={`${clinicConfig.name} clinic`} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#041830]/95 via-[#0a2540]/85 to-[#0a2540]/40" />
        </div>

        <div className="absolute top-32 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-24 right-1/3 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Open Today · {clinicConfig.hoursShort} · {clinicConfig.openDays}
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-[4.5rem] font-extrabold text-white leading-[1.08] mb-5 tracking-tight">
              Trusted Family Clinic<br />
              <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-200 bg-clip-text text-transparent">
                in Hebbal Kempapura.
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-blue-200/90 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
              {clinicConfig.doctor.experience}+ years of experience in general medicine.<br />
              Quick consultation at just ₹{clinicConfig.doctor.fee}. No hidden charges.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${clinicConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-white text-blue-900 font-bold text-lg px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition-all">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer"
                className="btn-brand group inline-flex items-center justify-center gap-3 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-teal-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-white flex-shrink-0">
                  <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.477 2.027 7.784L0 32l8.437-2.006A15.94 15.94 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.293 19.346c-.4-.2-2.362-1.166-2.728-1.3-.366-.133-.633-.2-.9.2s-1.033 1.3-1.266 1.566c-.233.267-.466.3-.866.1-.4-.2-1.69-.623-3.22-1.986-1.19-1.062-1.993-2.374-2.227-2.774-.234-.4-.025-.616.175-.815.18-.179.4-.467.6-.7.2-.234.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.967-.325-.78-.656-.674-.9-.686l-.767-.013c-.267 0-.7.1-1.067.5S8 12.667 8 14.633c0 1.967 1.434 3.867 1.634 4.134.2.267 2.82 4.3 6.833 6.033.954.412 1.698.658 2.278.843.957.305 1.828.262 2.517.159.768-.115 2.362-.966 2.695-1.9.334-.933.334-1.733.234-1.9-.1-.166-.366-.266-.766-.466z" />
                </svg>
                Book Appointment
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
              className="flex items-center gap-6 mt-10">
              <div className="flex -space-x-2">
                {["bg-blue-400","bg-teal-400","bg-purple-400","bg-rose-400"].map((c, i) => (
                  <div key={i} className={`w-9 h-9 rounded-full ${c} border-2 border-white/30 flex items-center justify-center text-white text-xs font-bold`}>
                    {["R","A","K","P"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">{[...Array(5)].map((_,i) => <span key={i} className="text-yellow-400">★</span>)}</div>
                <p className="text-blue-300 text-xs">Trusted by families in {clinicConfig.city}</p>
              </div>
            </motion.div>
          </div>

          {/* Right — Doctor card */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-blue-500/20 rounded-3xl blur-2xl scale-110" />
              <div className="relative bg-white/8 backdrop-blur-xl rounded-3xl border border-white/15 p-6 shadow-2xl">
                <div className="relative w-full h-72 rounded-2xl overflow-hidden mb-5">
                  <Image src={clinicConfig.doctor.photo} alt={clinicConfig.doctor.name} fill className="object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" /> Accepting Patients Today
                  </div>
                </div>
                <h3 className="text-white font-bold text-xl">{clinicConfig.doctor.name}</h3>
                <p className="text-teal-300 text-sm font-medium mb-4">{clinicConfig.doctor.qualifications} · {clinicConfig.doctor.specialty}</p>
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[[`${clinicConfig.doctor.experience}+`,"Years"],[clinicConfig.doctor.patients,"Patients"],[clinicConfig.doctor.rating,"Rating"]].map(([v,l]) => (
                    <div key={l} className="bg-white/8 rounded-xl p-3 text-center border border-white/10">
                      <p className="text-white font-bold">{v}</p>
                      <p className="text-blue-300 text-xs mt-0.5">{l}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white/10 rounded-xl p-3 mb-4 text-center">
                  <p className="text-teal-300 text-xs font-medium">Consultation Fee</p>
                  <p className="text-white font-extrabold text-xl">₹{clinicConfig.doctor.fee}</p>
                </div>
                <a href={waLink()} target="_blank" rel="noopener noreferrer"
                  className="btn-brand block w-full text-center text-white font-bold py-3 rounded-xl">
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div animate={{ y: [0,8,0] }} transition={{ repeat: Infinity, duration: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>

      {/* ── RATING STRIP ── */}
      <section className="bg-[#0a1f44] py-4 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-6 justify-center items-center text-sm">
          {[
            { icon: "⭐", text: `${clinicConfig.doctor.rating} Google Rating` },
            { icon: "🏥", text: `${clinicConfig.doctor.experience}+ Years of Experience` },
            { icon: "💰", text: `₹${clinicConfig.doctor.fee} Consultation Fee` },
            { icon: "📅", text: `Open ${clinicConfig.openDays} · ${clinicConfig.hoursShort}` },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-blue-200">
              <span>{item.icon}</span>
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-gradient-to-r from-[#0a1f44] to-blue-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {clinicConfig.stats.map((s) => (
            <AnimatedSection key={s.label} direction="up">
              <p className="text-4xl md:text-5xl font-extrabold text-teal-300">
                <AnimatedCounter end={s.end} suffix={s.suffix} />
              </p>
              <p className="text-blue-300 text-sm mt-2 font-medium">{s.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── URGENCY BANNER ── */}
      <section className="py-4 px-6 text-center" style={{ background: "linear-gradient(135deg,#0d9488,#0ea5e9)" }}>
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
          <div>
            <p className="font-extrabold text-white text-lg leading-tight">Limited Appointments Available Today</p>
            <p className="text-teal-100 text-sm font-medium">Book now via WhatsApp — confirmed in minutes.</p>
          </div>
          <a href={waLink("I want to book an appointment today")} target="_blank" rel="noopener noreferrer"
            className="flex-shrink-0 bg-white text-teal-700 font-bold px-6 py-2.5 rounded-xl hover:bg-teal-50 transition text-sm">
            Book Now →
          </a>
        </div>
      </section>

      {/* ── BOOKING FORM ── */}
      <section id="booking" className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Fast Booking</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
              Book in <span className="text-teal-600">30 Seconds.</span><br />
              Skip the Queue.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-7 text-lg">
              Fill the quick form — we save your details and open WhatsApp instantly so the doctor confirms your slot in minutes.
            </p>
            <div className="space-y-3 mb-6">
              {["No registration, no paperwork", "WhatsApp confirmation in minutes", "Same-day appointments available", `Just ₹${clinicConfig.doctor.fee} consultation fee`].map((item) => (
                <div key={item} className="flex items-center gap-3 text-gray-600">
                  <span className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4">
              <p className="text-teal-800 text-sm font-semibold">📍 {clinicConfig.addressShort}</p>
              <p className="text-teal-600 text-sm mt-1">📞 {clinicConfig.phone}</p>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="font-bold text-gray-800 text-xl mb-6">Enter Your Details</h3>
              <LeadForm />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── ABOUT DOCTOR ── */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-teal-100 rounded-full -z-10" />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-full -z-10" />
              <div className="relative w-full h-[480px] rounded-3xl overflow-hidden shadow-2xl">
                <Image src={clinicConfig.doctor.photoAlt} alt={clinicConfig.doctor.name} fill className="object-cover object-top" />
              </div>
              <div className="absolute -bottom-5 -right-4 bg-gradient-to-br from-teal-600 to-blue-700 text-white px-6 py-5 rounded-2xl shadow-2xl text-center">
                <p className="text-3xl font-extrabold">{clinicConfig.doctor.patients}</p>
                <p className="text-blue-200 text-xs mt-1">Patients Treated</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-2">Meet the Expert</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2 leading-tight">{clinicConfig.doctor.name}</h2>
            <p className="text-blue-700 font-semibold mb-2">{clinicConfig.doctor.qualifications} — {clinicConfig.doctor.specialty}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {clinicConfig.doctor.tags.map(tag => (
                <span key={tag} className="text-xs bg-teal-50 text-teal-700 border border-teal-200 px-3 py-1 rounded-full font-semibold">{tag}</span>
              ))}
            </div>
            <p className="text-gray-500 leading-relaxed mb-6 text-base">
              {clinicConfig.doctor.bio}
            </p>
            <div className="space-y-3 mb-8">
              {clinicConfig.doctor.skills.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <Link href="/about" className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 py-3.5 rounded-2xl transition hover:shadow-lg">
                Full Profile →
              </Link>
              <a href={waLink()} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-teal-200 hover:border-teal-400 text-teal-700 font-semibold px-7 py-3.5 rounded-2xl transition">
                Book Appointment
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-2">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">Our Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">Quality treatment for you and your family, all under one roof</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {clinicConfig.services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.07}>
                <div className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:border-teal-200 transition-all duration-300 hover:-translate-y-1 flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform" style={{ background: "linear-gradient(135deg,#0d9488,#0ea5e9)" }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-800 text-base mb-1">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <a href={waLink()} target="_blank" rel="noopener noreferrer"
              className="btn-brand inline-flex items-center gap-3 text-white font-bold px-8 py-3.5 rounded-2xl">
              Book Appointment on WhatsApp →
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHY US ── */}
      <WhyUs />

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-2">Simple Process</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">How It Works</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[calc(33%+20px)] right-[calc(33%+20px)] h-0.5 bg-gradient-to-r from-teal-300 to-blue-300" />
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.15}>
                <div className="bg-white border border-gray-100 rounded-3xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1 group relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition text-4xl shadow-sm">
                    {step.icon}
                  </div>
                  <div className="absolute top-6 right-6 text-6xl font-extrabold text-gray-100 leading-none select-none">{step.num}</div>
                  <h3 className="font-bold text-gray-800 text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-12">
            <a href={waLink()} target="_blank" rel="noopener noreferrer"
              className="btn-brand inline-flex items-center gap-3 text-white font-bold text-lg px-10 py-4 rounded-2xl">
              Book Now on WhatsApp
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <TestimonialsSection />

      {/* ── FAQ ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-2">Common Questions</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">Frequently Asked</h2>
          </AnimatedSection>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <AnimatedSection key={faq.q}>
                <FAQItem q={faq.q} a={faq.a} />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <p className="text-gray-500 mb-4">Still have questions?</p>
            <a href={waLink(`I have a question about ${clinicConfig.name}`)} target="_blank" rel="noopener noreferrer"
              className="btn-brand inline-flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-xl">
              Ask on WhatsApp
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ── AI PROMPT BOOKING ── */}
      <AppointmentPrompt />

      {/* ── CTA BANNER ── */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={clinicConfig.ctaImage} alt={clinicConfig.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#041830]/95 to-[#0a2540]/90" />
        </div>
        <div className="relative text-center text-white max-w-2xl mx-auto">
          <AnimatedSection>
            <p className="text-teal-300 font-semibold text-sm uppercase tracking-widest mb-3">Ready to Start?</p>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              Book Your Visit<br />
              <span className="text-teal-300">Today.</span>
            </h2>
            <p className="text-blue-200 text-lg mb-10">
              Same-day appointments available. Just ₹{clinicConfig.doctor.fee}. No queues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={waLink()} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-teal-700 font-bold text-lg px-10 py-4 rounded-2xl hover:bg-slate-50 transition hover:scale-105 shadow-2xl">
                Book on WhatsApp
              </a>
              <a href={`tel:${clinicConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold text-lg px-10 py-4 rounded-2xl hover:bg-white/10 transition">
                Call {clinicConfig.phone}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <StickyBar />
    </>
  );
}
