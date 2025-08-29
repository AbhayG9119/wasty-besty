import React, { useState, useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsapAnimations } from '../utils/gsapAnimations';
import "./Contact.css";
import FAQAccordion from "../components/FAQAccordion";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const initialForm = { name: "", email: "", phone: "", message: "" };

export default function Contact() {
  const heroTl = useRef(null);
  const cleanupFunctions = useRef([]);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    // Hero animations
    heroTl.current = gsapAnimations.animateHero({
      title: document.querySelector('h1'),
      subtitle: document.querySelector('p')
    });

    // Section animations
    gsapAnimations.animateSections();

    return () => {
      gsapAnimations.cleanupAnimations(heroTl.current, cleanupFunctions.current);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx_LvNyO0PO6nmKHEvUF6A6Yw-4nXezYds6t1gBowqNKDzcjLrJkVW6WcYSUtYtC5Il/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (response.ok) {
        setStatus("sent");
        setForm(initialForm);
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  const faqItems = [
    {
      question: "How quickly do you respond to messages?",
      answer: "I typically respond within 24-48 hours. Urgent matters get priority response.",
    },
    {
      question: "Do you offer personalized tutoring?",
      answer: "Yes! One-on-one tutoring sessions available for specific topics.",
    },
    {
      question: "Can I request tutorial topics?",
      answer: "Absolutely! Your suggestions help create content students need.",
    },
    {
      question: "Are tutorials free?",
      answer: "Yes, all YouTube tutorials are completely free for everyone.",
    },
  ];

  return (
    <main className="contact-page">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch — we'd love to hear from you!</p>
      </header>

      <section className="contact-grid">
        <FormSection
          form={form}
          status={status}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <MapSection />
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <FAQAccordion faq={faqItems} />
      </section>
    </main>
  );
}

function FormSection({ form, status, handleChange, handleSubmit }) {
  return (
    <div className="contact-form-section">
      <div className="form-container">
        <h2>Send Message</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            required
          />
          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sending" && <p className="status sending">Sending your message...</p>}
          {status === "sent" && <p className="status success">✓ Message sent successfully!</p>}
          {status === "error" && <p className="status error">✗ Failed to send. Try again.</p>}
        </form>
      </div>
    </div>
  );
}

function MapSection() {
  return (
    <div className="map-section">
      <h2>Our Location</h2>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        />
      </div>
    </div>
  );
}
