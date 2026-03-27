import AnimatedSection from "./AnimatedSection";

const reasons = [
  {
    icon: "🩺",
    title: "Expert Doctor",
    desc: "10+ years of hands-on experience in general medicine and family healthcare.",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: "💰",
    title: "Affordable Care",
    desc: "Quality treatment at ₹100 consultation fee — no hidden charges, no unnecessary tests.",
    color: "from-teal-500 to-teal-700",
  },
  {
    icon: "⏰",
    title: "Convenient Hours",
    desc: "Morning & evening slots available. Open all days including weekends.",
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: "📍",
    title: "Easy to Reach",
    desc: "Located in Hebbal Kempapura — easily accessible from surrounding areas of Bengaluru.",
    color: "from-orange-500 to-orange-700",
  },
  {
    icon: "⚡",
    title: "Quick Consultation",
    desc: "Minimal wait time. Book via WhatsApp and walk in at your confirmed slot.",
    color: "from-rose-500 to-rose-700",
  },
  {
    icon: "❤️",
    title: "Patient-Friendly",
    desc: "Compassionate approach — every patient is treated with care, dignity, and respect.",
    color: "from-green-500 to-green-700",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-2">Why Patients Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">Why Choose Spurthi Clinic?</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Trusted by thousands of families in Hebbal Kempapura for quality, affordable healthcare</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <AnimatedSection key={r.title} delay={i * 0.08} direction="up">
              <div className="group bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-14 h-14 bg-gradient-to-br ${r.color} rounded-2xl flex items-center justify-center text-2xl mb-5 shadow group-hover:scale-110 transition-transform`}>
                  {r.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
