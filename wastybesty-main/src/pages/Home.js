import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Home.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function VideoCard({ id, title, desc }) {
  return (
    <motion.article 
      className="card video-card"
      whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.5)" }}
    >
      <div className="video-frame">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={`Video: ${title}`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{desc}</p>
      <a
        className="btn btn-yt"
        href={`https://www.youtube.com/watch?v=${id}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Watch ${title} on YouTube`}
      >
        Watch on YouTube
      </a>
    </motion.article>
  );
}

function CategoryCard({ title, link }) {
  return (
    <motion.a
      className="card category-card"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open playlist ${title}`}
      whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.5)" }}
    >
      <span className="category-title">{title}</span>
      <span className="category-arrow">→</span>
    </motion.a>
  );
}

export default function Home() {
  const featuredVideos = [
    {
      id: '11cRUXkeGnA',
      title: '100% कारगर Jugaadu Auto Watering',
      desc: 'Vacation-friendly self-watering setup—simple, effective, and budget-friendly.',
    },
    {
      id: 'jHTwR3bDU0U',
      title: 'Economical Garden Shopping Tips',
      desc: 'Build a lush garden on a budget with smart shopping ideas.',
    },
    {
      id: 'zw6BA1KWHgE',
      title: 'Garden Tour — Visual Inspiration',
      desc: 'A soothing tour for design ideas and nature vibes.',
    },
  ];

  const tipsAndHacks = [
    {
      id: 'mAfGDwAu7Xs',
      title: 'Wasty Besty ke Uss Paar',
      desc: 'Creative gardening ideas and inspiration to spark your next project.',
    },
    {
      id: 'xfCQOJiIu94',
      title: 'Quick DIY Tool Tips',
      desc: 'Small changes, big convenience—make garden work easier.',
    },
    {
      id: 'pE-HJM6AKy8',
      title: 'Relaxing Green Moments',
      desc: 'Let the garden calm your mind while you learn simple hacks.',
    },
  ];

  const series = [
    { title: 'Changeri khatti booti benefits', link: 'https://www.youtube.com/watch?v=kHztpvHa3Xg&list=PLaovYovF0U2z4FkZXi8BRF0VfuCr_Q3R7' },
    { title: 'Herbal Plants', link: 'https://www.youtube.com/watch?v=5Sg2DQrGpZg&list=PLaovYovF0U2w_pgtsbUjT2X0oesUIY4DM' },
    { title: 'Vegetable Plants', link: 'https://www.youtube.com/watch?v=E6Pwfura4Nk&list=PLaovYovF0U2xSgQIJLkZko50bqsZ9goci' },
    { title: 'Flowering Plants', link: 'https://www.youtube.com/watch?v=DXYTof1pyEc&list=PLaovYovF0U2ykpDgz7ej4atlbqAY-KWt5' },
    { title: 'Cactus & Succulents', link: 'https://www.youtube.com/watch?v=UreS4jz3cdI&list=PLaovYovF0U2z5KRYft7liTrSYhsZ6oqL9' },
  ];

  // GSAP Animations
  useEffect(() => {
    const heroTl = gsap.timeline();

    // Hero section
    heroTl.fromTo(".hero-logo", 
      { scale: 0, opacity: 0, rotationY: -180 },
      { scale: 1, opacity: 1, rotationY: 0, duration: 1.5, ease: "elastic.out(1, 0.8)" }
    )
    .fromTo(".hero-title", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" }, 
      "-=0.8"
    )
    .fromTo(".hero-tagline", 
      { y: 30, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }, 
      "-=0.6"
    )
    .fromTo(".hero-sub", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, 
      "-=0.5"
    );

    // Section animations
    gsap.utils.toArray(".section").forEach(section => {
      gsap.fromTo(section, 
        { y: 50, opacity: 0, rotationX: -15 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          ease: "power3.out"
        }
      );
    });

    // Cards with 3D effect
    const cards = gsap.utils.toArray(".video-card, .category-card");

    cards.forEach((card) => {
      gsap.set(card, { transformPerspective: 1000 });

      gsap.fromTo(card, 
        { y: 30, opacity: 0, rotationY: -15, rotationX: 10 },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          rotationX: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse"
          },
          ease: "power3.out"
        }
      );

      // Handlers
      const handleEnter = () => {
        gsap.to(card, { rotationY: 5, rotationX: 5, scale: 1.03, duration: 0.3 });
      };
      const handleLeave = () => {
        gsap.to(card, { rotationY: 0, rotationX: 0, scale: 1, duration: 0.3 });
      };
      const handleMove = (e) => {
       cards.forEach((card) => {
  const handleEnter = () => {
    gsap.to(card, { scale: 1.05, duration: 0.3 });
  };

  const handleLeave = () => {
    gsap.to(card, { scale: 1, rotateX: 0, rotateY: 0, duration: 0.3 });
  };

  const handleMove = (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // ✅ define rotation inside handler
    const rotationY = ((x - centerX) / centerX) * 10; // tilt left/right
    const rotationX = -((y - centerY) / centerY) * 10; // tilt up/down

    gsap.to(card, {
      rotateY: rotationY,
      rotateX: rotationX,
      duration: 0.3,
    });
  };

  card.addEventListener("mouseenter", handleEnter);
  card.addEventListener("mouseleave", handleLeave);
  card.addEventListener("mousemove", handleMove);

  // cleanup properly
  return () => {
    card.removeEventListener("mouseenter", handleEnter);
    card.removeEventListener("mouseleave", handleLeave);
    card.removeEventListener("mousemove", handleMove);
  };
});

      };

      card.addEventListener("mouseenter", handleEnter);
      card.addEventListener("mouseleave", handleLeave);
      card.addEventListener("mousemove", handleMove);

      // Cleanup per card
      card._cleanup = () => {
        card.removeEventListener("mouseenter", handleEnter);
        card.removeEventListener("mouseleave", handleLeave);
        card.removeEventListener("mousemove", handleMove);
      };
    });

    return () => {
      heroTl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
      cards.forEach(card => card._cleanup && card._cleanup());
    };
  }, []);

  return (
    <motion.main className="home-page">
      {/* Hero */}
      <section className="hero hero-bg" aria-labelledby="hero-heading">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <motion.img
            className="hero-logo"
            src="https://yt3.googleusercontent.com/ytc/AIdro_kzc2V698OvpFqD4ojbU_HLMF-DRk8FMJ9aPuUESWYMYBQ=s160-c-k-c0x00ffffff-no-rj"
            alt="Wasty Besty Logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          />
          <h1 id="hero-heading" className="hero-title">Wasty Besty</h1>
          <p className="hero-tagline">
            Entertainment | Fun | Creativity — All in One Place!
          </p>
          <p className="hero-sub">
            Hosted by Mam — your DIY gardening guide for upcycled projects, plant care, and calm green vibes.
          </p>
          <div className="hero-cta">
            <a
              className="btn btn-yt"
              href="https://www.youtube.com/@WastyBesty"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe on YouTube
            </a>
            <a
              className="btn btn-ghost"
              href="https://www.youtube.com/@WastyBesty/videos"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Latest Videos
            </a>
          </div>
        </div>

      </section>

      {/* About */}
      <section className="section section-alt" aria-labelledby="about-heading">
        <div className="container">
          <h2 id="about-heading" className="section-title">Who We Are</h2>
          <p className="section-text">
            We spread smiles, laughter, and creativity through nature. From DIY “Best Out of Waste” to plant care and
            garden tours, our videos make learning feel soothing and fun.
          </p>
          <p className="section-text">
            Whether you are a beginner or a plant lover, you’ll find quick hacks, relatable content, and community vibes
            that bring you closer to nature.
          </p>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="section" aria-labelledby="featured-heading">
        <div className="container">
          <h2 id="featured-heading" className="section-title">Featured Videos</h2>
          <div className="grid">
            {featuredVideos.map(v => (
              <VideoCard key={v.id} {...v} />
            ))}
          </div>
        </div>
      </section>

      {/* Series / Playlists */}
      <section className="section section-alt" aria-labelledby="series-heading">
        <div className="container">
          <h2 id="series-heading" className="section-title">Explore Our Series</h2>
          <div className="grid grid-categories">
            {series.map(s => (
              <CategoryCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Tips & Hacks */}
      <section className="section" aria-labelledby="tips-heading">
        <div className="container">
          <h2 id="tips-heading" className="section-title">Gardening Tips & Hacks</h2>
          <div className="grid">
            {tipsAndHacks.map(v => (
              <VideoCard key={v.id} {...v} />
            ))}
          </div>

          <div className="usp">
            <div className="usp-item">
              <span className="usp-icon">🌱</span>
              <div>
                <h3 className="usp-title">Relatable Fun</h3>
                <p className="usp-desc">Real-life gardening that fits your space, time, and budget.</p>
              </div>
            </div>
            <div className="usp-item">
              <span className="usp-icon">⚡</span>
              <div>
                <h3 className="usp-title">Quick Wins</h3>
                <p className="usp-desc">Shorts and bite-sized tips for instant results.</p>
              </div>
            </div>
            <div className="usp-item">
              <span className="usp-icon">🤝</span>
              <div>
                <h3 className="usp-title">Community Vibes</h3>
                <p className="usp-desc">Troubleshooting together—ask, learn, and grow with us.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vlog & Personal Touch */}
      <section className="section section-alt" aria-labelledby="vlog-heading">
        <div className="container">
          <h2 id="vlog-heading" className="section-title">From the Creator</h2>
          <div className="vlog-wrap">
            <div className="video-frame vlog-frame">
              <iframe
                src="https://www.youtube.com/embed/dwE7avS74As"
                title="Here is My First Vlog — All About Wasty Besty"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="section-text center">
              Get to know the story behind Wasty Besty—why we started, what we love, and where we’re going next.
            </p>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
