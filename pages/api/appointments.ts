import type { NextApiRequest, NextApiResponse } from "next";

interface AppointmentBody {
  name?: string;
  phone?: string;
  email?: string;
  reason?: string;
  source?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, email, reason, source }: AppointmentBody = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: "Name and phone are required" });
  }

  // Log appointment (in production, save to DB or send email)
  console.log("New appointment:", { name, phone, email, reason, source, timestamp: new Date().toISOString() });

  // Return success — frontend handles WhatsApp redirect
  return res.status(200).json({ success: true, message: "Appointment received" });
}
