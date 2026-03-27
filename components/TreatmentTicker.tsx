import { motion } from "framer-motion";

const treatments = [
  "Fever & Flu", "Diabetes Management", "Blood Pressure", "General Consultation",
  "Minor Injuries", "Cold & Cough", "Thyroid Check", "Skin Allergies",
  "Stomach Issues", "Headache & Migraine", "Joint Pain", "Back Pain",
  "Women's Health", "Child Healthcare", "Preventive Checkups", "Wound Dressing",
  "ECG & Reports", "Health Certificates",
];

const doubled = [...treatments, ...treatments];

export default function TreatmentTicker() {
  return (
    <div className="bg-teal-700 py-3 overflow-hidden">
      <div className="flex items-center gap-3 overflow-hidden">
        <motion.div
          className="flex gap-8 whitespace-nowrap flex-shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((t, i) => (
            <span key={i} className="flex items-center gap-2 text-white text-sm font-semibold">
              <span className="text-teal-300">✦</span>
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
