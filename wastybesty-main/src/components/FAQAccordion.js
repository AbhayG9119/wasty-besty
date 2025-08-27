import React, { useState } from "react";

export default function FAQAccordion({ faq }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="faq-accordion">
      {faq.map((item, index) => (
        <div key={index} style={{ marginBottom: "1rem" }}>
          <button onClick={() => toggle(index)} style={{ width: "100%", textAlign: "left", padding: "0.5rem 1rem", background: "var(--card)", color: "var(--text)", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "1rem", fontWeight: "500" }}>
            {item.question}
          </button>
          {openIndex === index && (
              <div style={{ padding: "0.5rem 1rem", background: "rgba(255,255,255,0.03)", borderRadius: "6px", marginTop: "0.25rem" }}>
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
