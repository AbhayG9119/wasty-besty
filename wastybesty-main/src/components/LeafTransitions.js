import { useEffect } from "react";
import "./LeafTransitions.css";

export default function LeafTransitions() {
  useEffect(() => {
    const leafLayer = document.createElement("div");
    leafLayer.id = "leaf-transition-layer";
    document.body.appendChild(leafLayer);

    const LEAF_SVG = `
      <svg viewBox="0 0 24 24" class="wb-leaf">
        <defs>
          <linearGradient id="wbLeafGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#b5efbd"/>
            <stop offset="100%" stop-color="#6fca78"/>
          </linearGradient>
        </defs>
        <path d="M12 2c4.2 0 8 3.8 8 8 0 6-5.5 9.8-10.1 11.8-.7.3-1.4-.4-1.1-1.1C10.8 16.9 8 14.5 8 10c0-4.2 3.8-8 8-8Z"/>
      </svg>`;

    function spawnLeafBurst() {
      const W = window.innerWidth;
      const H = window.innerHeight;
      const originX = W * 0.5;
      const originY = H * 0.85;

      for (let i = 0; i < 12; i++) {
        const wrap = document.createElement("div");
        wrap.innerHTML = LEAF_SVG.trim();
        const leaf = wrap.firstChild;
        const spread = Math.min(W, H) * 0.25;

        const x0 = originX + (Math.random() - 0.5) * 60;
        const y0 = originY + (Math.random() - 0.5) * 40;
        const x1 = x0 + (Math.random() * spread * 1.2 - spread * 0.6);
        const y1 = y0 - (spread + Math.random() * spread);

        const r0 = Math.floor(Math.random() * 60 - 30);
        const r1 = r0 + Math.floor(Math.random() * 160 + 80);
        const dur = Math.floor(1000 + Math.random() * 900);
        const spin = Math.floor(1200 + Math.random() * 1200);

        leaf.style.setProperty("--x0", `${x0}px`);
        leaf.style.setProperty("--y0", `${y0}px`);
        leaf.style.setProperty("--x1", `${x1}px`);
        leaf.style.setProperty("--y1", `${y1}px`);
        leaf.style.setProperty("--r0", `${r0}deg`);
        leaf.style.setProperty("--r1", `${r1}deg`);
        leaf.style.setProperty("--leaf-dur", `${dur}ms`);
        leaf.style.setProperty("--leaf-spin-dur", `${spin}ms`);

        leafLayer.appendChild(leaf);
        leaf.addEventListener("animationend", () => leaf.remove());
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) spawnLeafBurst();
        });
      },
      { threshold: 0.55 }
    );

    document.querySelectorAll("section").forEach((sec) => observer.observe(sec));

    return () => {
      leafLayer.remove();
      observer.disconnect();
    };
  }, []);

  return null;
}
