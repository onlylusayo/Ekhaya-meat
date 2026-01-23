"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    category: "",
    quantity: "",
    delivery: "Delivery",
    notes: "",
  });

  const contactItems = [
    {
      icon: <Mail className="w-6 h-6 text-[#D4AF37]" />,
      title: "Email",
      lines: ["info@ekhayameat.com"],
      desc: "Send us your inquiries",
    },
    {
      icon: <Phone className="w-6 h-6 text-[#D4AF37]" />,
      title: "Phone",
      lines: ["+265 988 96 60 20"], 
      desc: "Reach out directly for questions",
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#D4AF37]" />,
      title: "Location",
      lines: ["123 Market Street", "Blantyre, Malawi"],
      desc: "Visit our facility for product selection",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#D4AF37]" />,
      title: "Business Hours",
      lines: [
        "Mon – Fri: 07:30 – 17:00",
        "Saturday: 07:30 – 15:00",
        "Public Holidays: 07:30 – 12:30",
        "Sunday: Closed",
      ],
      desc: "Visit during business hours",
    },
  ];

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle WhatsApp submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "265988966020";
    const message = `Hello, I would like to request a quote:
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Company: ${form.company}
Product Category: ${form.category}
Quantity (kg): ${form.quantity}
Delivery Preference: ${form.delivery}
Notes: ${form.notes}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* HERO */}
      <header className="relative w-full h-[320px]">
        <Image
          src="/images/contact-hero.jpg"
          alt="Ekhaya Meat Contact"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-3xl lg:text-4xl font-bold text-white">Contact Us</h1>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <main className="min-h-screen bg-white px-4 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT: CONTACT INFO */}
          <section className="space-y-10">
            <h2 className="text-3xl font-bold text-black">Get in Touch</h2>
            <p className="text-gray-600">
              Reach out to our team for inquiries, quotes, or assistance.
            </p>

            <div className="space-y-6">
              {contactItems.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div>{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                    <p className="text-gray-600 mb-1">{item.desc}</p>
                    {item.lines.map((line, idx) => (
                      <p key={idx} className="text-black font-medium">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Delivery Options */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Delivery and Pickup</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong className="text-black">Delivery Available</strong> – Orders delivered to your location</li>
                <li><strong className="text-black">Pickup Available</strong> – Same-day pickup for pre-orders</li>
              </ul>
            </div>
          </section>

          {/* RIGHT: REQUEST QUOTE FORM */}
          <section className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-bold text-black mb-4">Request a Quote</h2>
            <p className="text-gray-600 mb-6">Fill out the form and we’ll send it directly to our WhatsApp.</p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="input" placeholder="Full Name *" name="name" value={form.name} onChange={handleChange} />
                <input className="input" placeholder="Email Address *" name="email" value={form.email} onChange={handleChange} />
                <input className="input" placeholder="Phone Number *" name="phone" value={form.phone} onChange={handleChange} />
                <input className="input" placeholder="Company / Business Name" name="company" value={form.company} onChange={handleChange} />
              </div>

              <div className="space-y-4">
                <select className="input w-full" name="category" value={form.category} onChange={handleChange}>
                  <option value="">Select a product category *</option>
                  <option>Beef</option>
                  <option>Lamb</option>
                  <option>Pork</option>
                </select>
                <input className="input w-full" placeholder="Estimated Quantity (kg) *" name="quantity" value={form.quantity} onChange={handleChange} />
              </div>

              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input type="radio" name="delivery" value="Delivery" checked={form.delivery === "Delivery"} onChange={handleChange} />
                  Delivery
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="delivery" value="Pickup" checked={form.delivery === "Pickup"} onChange={handleChange} />
                  Pickup
                </label>
              </div>

              <textarea
                rows={4}
                className="input w-full"
                placeholder="Special cuts, preparation notes, or extra details..."
                name="notes"
                value={form.notes}
                onChange={handleChange}
              />

              <label className="flex items-start gap-2 text-sm text-gray-600">
                <input type="checkbox" className="mt-1" />
                I agree to receive updates and quotes from Ekhaya Meat
              </label>

              <button
                type="submit"
                className="w-full bg-[#D4AF37] text-black py-3 rounded-lg font-semibold hover:bg-black hover:text-[#D4AF37] transition"
              >
                Send Quote Request via WhatsApp
              </button>
            </form>
          </section>
        </div>
      </main>
    </>
  );
}
