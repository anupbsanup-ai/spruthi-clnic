// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  CLINIC CONFIG — Change this ONE file to resell to any clinic
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const clinicConfig = {

  // ── Identity ──────────────────────────────────────────────────────────────
  name:       "Spurthi Clinic",
  shortName:  "Spurthi",
  tagline:    "Trusted Medical Clinic in Hebbal Kempapura",
  city:       "Hebbal Kempapura, Bengaluru",
  url:        "https://spurthi-clinic.vercel.app",

  // ── Contact ───────────────────────────────────────────────────────────────
  phone:      "+91 98440 06991",
  phoneRaw:   "+919844006991",
  whatsapp:   "919844006991",
  email:      "spurthiclinic@gmail.com",
  address:    "3J22+PG9, Hebbal Kempapura, Bengaluru, Karnataka 560024",
  addressShort: "Hebbal Kempapura, Bengaluru 560024",
  emergency:  "For emergencies outside clinic hours, please call 108 (ambulance) or visit the nearest hospital.",

  // ── Social Media ──────────────────────────────────────────────────────────
  social: {
    instagram: "",
    facebook:  "",
    google:    "",
  },

  // ── Hours ─────────────────────────────────────────────────────────────────
  hours:      "Morning: Till 1:30 PM · Evening: 6:00 PM onwards · Closed 1:30–6:00 PM",
  hoursShort: "9AM–1:30PM & 6PM–9PM",
  openDays:   "All Days" as string,

  // ── Weekly Schedule ───────────────────────────────────────────────────────
  schedule: [
    { day: "Monday",    time: "9:00 AM – 1:30 PM  |  6:00 PM – 9:00 PM", open: true },
    { day: "Tuesday",   time: "9:00 AM – 1:30 PM  |  6:00 PM – 9:00 PM", open: true },
    { day: "Wednesday", time: "9:00 AM – 1:30 PM  |  6:00 PM – 9:00 PM", open: true },
    { day: "Thursday",  time: "9:00 AM – 1:30 PM  |  6:00 PM – 9:00 PM", open: true },
    { day: "Friday",    time: "9:00 AM – 1:30 PM  |  6:00 PM – 9:00 PM", open: true },
    { day: "Saturday",  time: "9:00 AM – 1:30 PM  |  6:00 PM – 9:00 PM", open: true },
    { day: "Sunday",    time: "9:00 AM – 1:30 PM  |  6:00 PM – 9:00 PM", open: true },
  ],

  // ── Clinic Info ───────────────────────────────────────────────────────────
  established:        2015,
  registrationNumber: "KMC-XXXXX",

  // ── Doctor ────────────────────────────────────────────────────────────────
  doctor: {
    name:           "Dr. Spurthi",
    qualifications: "MBBS",
    specialty:      "General Physician",
    experience:     10,
    patients:       "12K+",
    rating:         "4.9★",
    fee:            100,
    photo:          "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&q=80",
    photoAlt:       "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=700&q=80",
    bio:            "With over 10 years of experience in general medicine, the doctor at Spurthi Clinic is dedicated to providing compassionate, patient-friendly care. Specializing in treating common illnesses, managing chronic conditions, and offering affordable preventive healthcare in Hebbal Kempapura.",
    tags:           ["10 Yrs Experience", "General Medicine", "Diabetes Care", "Family Medicine"],
    skills:         [
      "Treating common illnesses & infections",
      "Managing BP, diabetes & chronic conditions",
      "Preventive care & affordable consultations",
    ],
  },

  // ── Services ──────────────────────────────────────────────────────────────
  services: [
    {
      title: "General Consultation",
      desc:  "Expert advice for all general health concerns, day-to-day illnesses, and follow-up visits with personalised attention.",
      img:   "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
    },
    {
      title: "Fever & Infection Treatment",
      desc:  "Prompt diagnosis and effective treatment for viral and bacterial infections, typhoid, malaria, and fever-related conditions.",
      img:   "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80",
    },
    {
      title: "Diabetes Management",
      desc:  "Regular monitoring, medication review, and long-term management of blood sugar levels for diabetic patients.",
      img:   "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&q=80",
    },
    {
      title: "Blood Pressure Check",
      desc:  "Routine BP monitoring and management to keep hypertension under control and prevent complications.",
      img:   "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80",
    },
    {
      title: "Minor Injury Care",
      desc:  "Quick and effective treatment for cuts, wounds, sprains, and minor injuries with proper dressing and care.",
      img:   "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    },
    {
      title: "Health Checkups",
      desc:  "Routine screenings and health assessments to detect issues early and keep you and your family in good health.",
      img:   "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
    },
  ],

  // ── Stats ─────────────────────────────────────────────────────────────────
  stats: [
    { end: 10,    suffix: "+", label: "Years Experience" },
    { end: 12000, suffix: "+", label: "Patients Treated" },
    { end: 6,     suffix: "+", label: "Services Offered" },
    { end: 99,    suffix: "%", label: "Satisfaction Rate" },
  ],

  // ── Hero Images ───────────────────────────────────────────────────────────
  heroImage:    "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1800&q=90",
  ctaImage:     "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1600&q=80",
  contactImage: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=1600&q=80",

  // ── SEO ───────────────────────────────────────────────────────────────────
  seo: {
    title:       "Spurthi Clinic — Trusted Medical Clinic in Hebbal Kempapura, Bengaluru",
    description: "Spurthi Clinic in Hebbal Kempapura, Bengaluru. 4.9★ rated, 12+ reviews. General Physician with 10+ years experience. Book via WhatsApp. Morning & Evening slots available.",
    keywords:    "clinic in Hebbal, doctor near me Kempapura, general physician Hebbal Bengaluru, Spurthi Clinic, medical clinic Hebbal Kempapura, doctor Bengaluru 560024",
    ogImage:     "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80",
    geo: { lat: 13.0456, lng: 77.5967 },
  },

  // ── Branding ──────────────────────────────────────────────────────────────
  brand: {
    gradient: "linear-gradient(135deg,#0d9488,#0ea5e9)",
    primary:  "#0d9488",
    accent:   "#0ea5e9",
  },

} as const;

// ── Convenience helpers ───────────────────────────────────────────────────────
export const waLink = (msg = "I want to book an appointment at " + clinicConfig.name) =>
  `https://wa.me/${clinicConfig.whatsapp}?text=${encodeURIComponent(msg)}`;

export const mapEmbed = () =>
  `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4!2d${clinicConfig.seo.geo.lng}!3d${clinicConfig.seo.geo.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent(clinicConfig.address)}!5e0!3m2!1sen!2sin!4v1`;

export const mapLink = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinicConfig.address)}`;
