"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

interface Service {
  id: string;
  label: string;
}

interface ContactInfo {
  icon: string;
  text: string;
  alt: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const services: Service[] = [
    { id: "consultation", label: "Consultation" },
    { id: "investment-banking", label: "Investment Banking" },
    { id: "financial-planning", label: "Financial Planning" },
  ];

  const contactInfo: ContactInfo[] = [
    { icon: "./call.svg", text: "+23 98281 9291", alt: "Phone" },
    { icon: "./message.svg", text: "laboxacc@domain.com", alt: "Email" },
    {
      icon: "./Location.svg",
      text: "150 Obafemi Awolowo Way, Allen, Ikeja.",
      alt: "Location",
    },
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log("Form submitted:", formData);
    }
  };

  return (
    <main className="min-h-screen flex flex-col lg:flex-row items-center justify-center w-full mt-16 bg-[#0D3B36] p-6">
      {/* Form Section */}
      <div className="max-w-5xl w-full lg:w-1/2 bg-white md:ml-16 shadow-xl rounded-lg flex flex-col gap-6 p-8 transition-all duration-300">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"
        >
          {/* Input Fields */}
          <div className="col-span-1">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={`w-full border text-black ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md p-2.5 mt-1 text-sm focus:ring-2 focus:ring-[#0D3B36]/20 focus:border-[#0D3B36] transition-colors`}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-xs text-red-500">
                {errors.name}
              </p>
            )}
          </div>

          <div className="col-span-1">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Your Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="ex: +234 468 734 829"
              className={`w-full border text-black ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded-md p-2.5 mt-1 text-sm focus:ring-2 focus:ring-[#0D3B36]/20 focus:border-[#0D3B36] transition-colors`}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1 text-xs text-red-500">
                {errors.phone}
              </p>
            )}
          </div>

          <div className="col-span-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ex: yourname@domain.com"
              className={`w-full border text-black ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md p-2.5 mt-1 text-sm focus:ring-2 focus:ring-[#0D3B36]/20 focus:border-[#0D3B36] transition-colors`}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-xs text-red-500">
                {errors.email}
              </p>
            )}
          </div>

          <div className="col-span-1">
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700"
            >
              Services
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full text-black border border-gray-300 rounded-md p-2.5 mt-1 text-sm focus:ring-2 focus:ring-[#0D3B36]/20 focus:border-[#0D3B36] transition-colors"
            >
              <option value="">Choose services</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.label}
                </option>
              ))}
            </select>
          </div>

          <div className="col-span-1 md:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={4}
              className={`w-full border text-black ${
                errors.message ? "border-red-500" : "border-gray-300"
              } rounded-md p-2.5 mt-1 text-sm focus:ring-2 focus:ring-[#0D3B36]/20 focus:border-[#0D3B36] transition-colors`}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-xs text-red-500">
                {errors.message}
              </p>
            )}
          </div>

          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full md:w-1/3 p-3 bg-[#0D3B36] text-white rounded-md mt-4 hover:bg-[#0A2C28] transition-colors duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-[#0D3B36]"
            >
              {"Let's Talk"}
            </button>
          </div>
        </form>{" "}
      </div>

      {/* Contact Information Section */}
      <div className="flex flex-col justify-center bg-[#0D3B36] text-white rounded-lg p-8 w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Get In Touch
        </h2>
        <p className="text-sm mb-6 leading-relaxed">
          To provide world-class investment banking services in a sustainable
          manner whilst ensuring adequate returns to our stakeholders.
        </p>
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-center space-x-3 group">
              <span className=" p-2 rounded-md">
                <Image
                  src={info.icon}
                  alt={info.alt}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </span>
              <p className="text-sm lg:text-base">{info.text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
