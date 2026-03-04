"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "Warranty / Deficiency Claim",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `${form.inquiryType} — ${form.firstName} ${form.lastName}`
    );
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone}\nInquiry Type: ${form.inquiryType}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:customercare@wfdev.ca?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start justify-center h-64 gap-4">
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900">Message prepared</h3>
        <p className="text-gray-500 text-sm">
          Your email client should have opened with your message addressed to{" "}
          <span className="font-semibold text-gray-700">customercare@wfdev.ca</span>.
          If it didn&apos;t open, please email us directly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm text-gray-500 underline hover:text-gray-900 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            required
            value={form.firstName}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900"
            placeholder="Jane"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            required
            value={form.lastName}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900"
            placeholder="Smith"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900"
          placeholder="jane@example.com"
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900"
          placeholder="604-555-0100"
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Inquiry Type</label>
        <select
          name="inquiryType"
          value={form.inquiryType}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-gray-900 bg-white"
        >
          <option>Warranty / Deficiency Claim</option>
          <option>New Home Purchase</option>
          <option>Rental Inquiry</option>
          <option>Commercial Leasing</option>
          <option>General Inquiry</option>
        </select>
      </div>
      <div>
        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900 resize-none"
          placeholder="Tell us how we can help..."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gray-900 text-white py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gray-700 transition-colors"
      >
        Submit Inquiry
      </button>
    </form>
  );
}
