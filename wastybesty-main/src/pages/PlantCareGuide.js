// src/pages/PlantCareGuide.js
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsapAnimations } from '../utils/gsapAnimations';
import './PlantCareGuide.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const plants = [
  {
    name: 'Spider Plant',
    sunlight: 'AC Room Compatible',
    khad: 'Diluted Compost Tea',
    tip: 'AC room me bhi grow karta hai — easy propagation.',
    videoId: '-yoigRJ2LRg',
  },
  {
    name: 'Peace Lily',
    sunlight: 'Filtered Light',
    khad: 'Tea Compost',
    tip: 'Humidity pasand hai — bathroom me rakh sakte ho.',
    videoId: 'YNPp-zcH5wA',
  },
  {
    name: 'Begonia',
    sunlight: 'Partial Sun',
    khad: 'Banana Peel Mix',
    tip: 'Garmi, sardi, barish — har season me phool deta hai.',
    videoId: 'ohH9fofonQY',
  },
  {
    name: 'Low-Light Plants',
    sunlight: 'No Direct Sun',
    khad: 'Rice Water',
    tip: 'Perfect for Indian flats — no sunlight required.',
    videoId: 'QM3s-M2tHEU',
  },
  {
    name: 'Healthy Plants Routine',
    sunlight: 'Mixed',
    khad: 'Balanced Compost',
    tip: 'Sahi routine se har plant healthy rahega.',
    videoId: 'EhuGK8HOOr8',
  },
  {
    name: 'Budget Garden Shopping',
    sunlight: 'N/A',
    khad: 'N/A',
    tip: '₹10 me lush plants — Mam ke shopping hacks.',
    videoId: 'oojg8FjSEqY',
  },
  {
    name: 'Money Plant Hanging Basket',
    sunlight: 'Indirect Light',
    khad: 'Water Propagation',
    tip: 'Hanging basket me lagao — fast growth aur clean look.',
    videoId: 'zEz7WWVys_o',
  },
  {
    name: 'Thuja / Morpankhi Care',
    sunlight: 'Full Sun',
    khad: 'Dry Compost',
    tip: 'Hamesha hara bhara rahega — Mam ke proven tips.',
    videoId: 'mk4EHFgqMA8',
  },
  {
    name: '10 Plant Care Tips Nobody Tells You',
    sunlight: 'Mixed',
    khad: 'Various',
    tip: 'Humidity, soil reuse, cinnamon — sab kuch covered hai.',
    videoId: 'ET7Jix77njE',
  },
];

export default function PlantCareGuide() {
  const heroTl = useRef(null);
  const cleanupFunctions = useRef([]);

  useEffect(() => {
    // Hero animations
    heroTl.current = gsapAnimations.animateHero({
      title: document.querySelector('.hero-titlee'),
      subtitle: document.querySelector('.hero-subb')
    });

    // Section animations
    gsapAnimations.animateSections();

    // Card animations
    const cardCleanup = gsapAnimations.animateCards('.plant-card');
    cleanupFunctions.current = cardCleanup;

    return () => {
      gsapAnimations.cleanupAnimations(heroTl.current, cleanupFunctions.current);
    };
  }, []);

  return (
    <main className="plantcare-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-titlee">🌿 Plant Care Guide</h1>
        <p className="hero-subb">Mam ke trusted tips — Indian mitti, Indian plants, Indian love.</p>
        <p className="hero-desc">Simple routines, soulful care, and jugaadu ideas for your green space.</p>
      </section>

      {/* Plant Cards */}
      <section className="plant-section">
        {plants.map((plant, i) => (
          <div key={i} className="plant-card">
            <div className="video-wrap">
              <iframe
                src={`https://www.youtube.com/embed/${plant.videoId}`}
                title={plant.name}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="plant-info">
              <h2 className="plant-name">{plant.name}</h2>
              <p><strong>☀️ Sunlight:</strong> {plant.sunlight}</p>
              <p><strong>🧪 Khad:</strong> {plant.khad}</p>
              <p className="plant-tip">💡 {plant.tip}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Seasonal Tips */}
      <section className="seasonal-section">
        <h2 className="section-heading">📅 Seasonal Care Calendar</h2>
        <ul className="season-list">
          <li><strong>गर्मी:</strong> Mulching, shade nets, daily watering</li>
          <li><strong>बरसात:</strong> Drainage check, fungal control</li>
          <li><strong>सर्दी:</strong> Sunlight maximize, repotting</li>
          <li><strong>बसंत:</strong> Fertilizing, pruning, flowering boost</li>
        </ul>
      </section>

      {/* Bonus Tips */}
      <section className="bonus-section">
        <h2 className="section-heading">🌟 Mam’s Bonus Tips</h2>
        <ul className="bonus-list">
          <li>Neem ke patte daal ke spray bana lo — pest bhi gaya, khushboo bhi aayi.</li>
          <li>Plastic bottle ka bottom cut karo — self-watering ho jayega.</li>
          <li>Gudhal ko roz subah dhoop do, aur har 15 din me banana peel mix — phool guaranteed.</li>
          <li>Compost me agar smell aaye toh ek muthi mitti daal do — balance ho jayega.</li>
          <li>Repotting ke baad 3 din paani mat do — roots adjust karengi.</li>
        </ul>
      </section>

      {/* Suggest a Plant */}
      <section className="contact-section">
        <h2 className="section-heading">📬 Suggest a Plant</h2>
        <form
          className="contact-form"
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
        >
          <input type="text" name="plant" placeholder ="Apna plant ka naam likhiye" required />
          <input type="email" name="email" placeholder="Aapka email (optional)" />
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}
