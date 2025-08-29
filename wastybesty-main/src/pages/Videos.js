import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsapAnimations } from '../utils/gsapAnimations';
import './Videos.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function VideoCard({ id, title, desc, link }) {
  return (
    <article className="video-card">
      <div className="video-frame">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <h3 className="video-title">{title}</h3>
      <p className="video-desc">{desc}</p>
      <a className="btn btn-yt" href={link} target="_blank" rel="noopener noreferrer">
        Watch on YouTube
      </a>
    </article>
  );
}

export default function Videos() {
  const heroTl = useRef(null);
  const cleanupFunctions = useRef([]);

  useEffect(() => {
    // Hero animations
    heroTl.current = gsapAnimations.animateHero({
      title: document.querySelector('.page-title'),
      subtitle: document.querySelector('.page-sub')
    });

    // Section animations
    gsapAnimations.animateSections();

    // Card animations
    const cardCleanup = gsapAnimations.animateCards('.video-card');
    cleanupFunctions.current = cardCleanup;

    return () => {
      gsapAnimations.cleanupAnimations(heroTl.current, cleanupFunctions.current);
    };
  }, []);

  const categories = [
    {
      name: "🌱 Gardening Hacks & Plant Care",
      videos: [
        {
          id: '11cRUXkeGnA',
          title: '100% कारगर Jugaadu Auto Watering, Selfwatering During ...',
          desc: 'Vacation ke time plants ko healthy rakhne ka simple aur effective jugaad.',
          link: 'https://www.youtube.com/watch?v=11cRUXkeGnA'
        },
        {
          id: '_9uFrKsDHZ8',
          title: 'फ़्री का अनोखा तरीका और छप्पर फाड़ ग्रोथ #Soilless',
          desc: 'Soilless gardening ka unique method jo growth ko boost karta hai.',
          link: 'https://www.youtube.com/watch?v=_9uFrKsDHZ8'
        },
        {
          id: 'ck9jxbOx5RE',
          title: 'सिर्फ 2 मिनट में Prunning खत्म || Lifetime Multi-purpose Tool ...',
          desc: 'Fast pruning technique using a multi‑purpose tool — time saver for gardeners.',
          link: 'https://www.youtube.com/watch?v=ck9jxbOx5RE'
        }
      ]
    },
    {
      name: "🛍️ Budget Shopping & Plant Hauls",
      videos: [
        {
          id: 'w0eIESQPEZs',
          title: 'Delhi NCR में सबसे सस्ते पौधे Buy Plants at rupees 10/- only',
          desc: 'Pocket‑friendly plant shopping guide for Delhi NCR area.',
          link: 'https://www.youtube.com/watch?v=w0eIESQPEZs'
        },
        {
          id: 'oojg8FjSEqY',
          title: 'देखो कैसे लाती हूं महंगे वाले पौधे भी सस्ते में ?',
          desc: 'High‑value plants ko budget me kaise laayein — Mam ka secret shopping style.',
          link: 'https://www.youtube.com/watch?v=oojg8FjSEqY'
        },
        {
          id: 'jHTwR3bDU0U',
          title: 'सस्ती Economical Shopping for Garden - Home Decoration ...',
          desc: 'Budget‑friendly shopping tips for garden decor aur plants.',
          link: 'https://www.youtube.com/watch?v=jHTwR3bDU0U'
        }
      ]
    },
    {
      name: "🎥 Channel Intro & Personal Vlogs",
      videos: [
        {
          id: 'dwE7avS74As',
          title: 'Here is My First Vlog on YouTube All About Wasty Besty मेरा ...',
          desc: 'Mam ka personal introduction aur channel ki kahani.',
          link: 'https://www.youtube.com/watch?v=dwE7avS74As'
        }
      ]
    },
    {
      name: "♻️ DIY & Best Out of Waste",
      videos: [
        {
          id: 'zi4X8KpQSfo',
          title: 'Beautiful Creation of Coconut Shell || नारियल का खोपरा एक ...',
          desc: 'Coconut shell se unique decor banana — best out of waste ka perfect example.',
          link: 'https://www.youtube.com/watch?v=zi4X8KpQSfo'
        },
        {
          id: 'IsSea5GT3uA',
          title: 'Beautiful Zero Cost Planter || Best out of Waste',
          desc: 'Zero cost me planter banane ka creative idea jo garden ko unique banata hai.',
          link: 'https://www.youtube.com/watch?v=IsSea5GT3uA'
        }
      ]
    },
    {
      name: "🌿 Garden Tours & Inspiration",
      videos: [
        {
          id: 'HKAvjZdghwM',
          title: 'Beautiful Garden View Garden Tour',
          desc: 'Mam ke garden ka full tour — lush greenery aur inspiration ka combo.',
          link: 'https://www.youtube.com/watch?v=HKAvjZdghwM'
        }
      ]
    }
  ];

  return (
    <main className="video-page">
      <section className="section hero-videos">
        <div className="container center">
          <h1 className="page-title">Our Video Library</h1>
          <p className="page-sub">
            Explore Wasty Besty’s most loved videos — DIY upcycling, garden tours, shopping hacks, and personal vlogs.
          </p>
        </div>
      </section>

      {categories.map((cat, idx) => (
        <section key={idx} className="section category-section">
          <div className="container">
            <h2 className="category-title">{cat.name}</h2>
            <div className="video-grid">
              {cat.videos.map(v => (
                <VideoCard key={v.id} {...v} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section cta-section">
        <div className="container center">
          <h2 className="cta-title">🌿 Explore More on Wasty Besty</h2>
          <p className="cta-desc">
            Gardening tips, DIY creations, budget shopping hacks aur inspiring vlogs — 
            sab kuch ek hi jagah. Hamare YouTube channel <strong>Wasty Besty</strong> par 
            aur bhi exclusive videos dekhiye.
          </p>
          <a
            href="https://www.youtube.com/@wastybesty"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-subscribe"
          >
            📺 Visit & Subscribe
          </a>
        </div>
      </section>

      
    </main>
  );
}
