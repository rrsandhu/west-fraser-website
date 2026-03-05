"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  message: string;
};

const PROJECT_TYPES = [
  "Design-Build",
  "General Contracting",
  "Pre-Construction",
  "Tenant Improvement / Fit-Out",
  "Renovation or Upgrade",
  "Not sure yet",
];

const empty: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate(): boolean {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Please describe your project.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-16 px-8">
        <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-6">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-green-600">
            <path d="M6 14L11 19L22 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#1a2e44] mb-3">Message Sent</h3>
        <p className="text-gray-500 leading-relaxed max-w-sm mx-auto">
          Thanks, {form.name.split(" ")[0]}. We&apos;ve received your inquiry and will be in touch within one business day.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm(empty); }}
          className="mt-8 text-sm text-[#c9973a] font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass = (field: keyof FormState) =>
    `w-full border ${errors[field] ? "border-red-400" : "border-gray-200"} bg-white px-4 py-3 text-sm text-[#1a2e44] placeholder:text-gray-400 focus:outline-none focus:border-[#1a2e44] transition-colors`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-[#1a2e44] uppercase tracking-[0.1em] mb-2">
            Full Name <span className="text-[#c9973a]">*</span>
          </label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputClass("name")}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#1a2e44] uppercase tracking-[0.1em] mb-2">
            Email <span className="text-[#c9973a]">*</span>
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className={inputClass("email")}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-[#1a2e44] uppercase tracking-[0.1em] mb-2">
            Phone
          </label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="604-000-0000"
            className={inputClass("phone")}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#1a2e44] uppercase tracking-[0.1em] mb-2">
            Company / Organization
          </label>
          <input
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="ABC Holdings Ltd."
            className={inputClass("company")}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#1a2e44] uppercase tracking-[0.1em] mb-2">
          Project Type
        </label>
        <select
          name="projectType"
          value={form.projectType}
          onChange={handleChange}
          className={`${inputClass("projectType")} cursor-pointer`}
        >
          <option value="">Select a service...</option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#1a2e44] uppercase tracking-[0.1em] mb-2">
          Project Description <span className="text-[#c9973a]">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your project — location, scope, timeline, and any other relevant details."
          className={`${inputClass("message")} resize-none`}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-[#1a2e44] text-white font-bold py-4 text-sm uppercase tracking-wider hover:bg-[#243d5a] transition-colors"
      >
        Send Request
      </button>
    </form>
  );
}
