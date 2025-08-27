import React, { useState, useEffect } from "react";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => setVisible(window.scrollY > 300);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        padding: "10px 14px",
        borderRadius: "50%",
        border: "none",
        background: "var(--accent)",
        color: "#fff",
        cursor: "pointer",
        display: visible ? "block" : "none",
        fontSize: "1.2rem",
        zIndex: 100,
      }}
    >
      ↑
    </button>
  );
}
