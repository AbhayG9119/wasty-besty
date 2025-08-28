import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LeafTransitions from '../components/LeafTransitions';
import '../components/LeafTransitions.css';
import './Home.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function VideoCard({ id, title, desc }) {
  return (
    <motion.article 
      className="card video-card"
      whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.5)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="video-frame">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
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
    // Hero section animations with 3D effects
    const heroTl = gsap.timeline();
    
    heroTl.fromTo(".hero-logo", 
      { scale: 0, opacity: 0, rotationY: -180 },
      { scale: 1, opacity: 1, rotationY: 0, duration: 1.5, ease: "elastic.out(1, 0.8)" }
    )
    .fromTo(".hero-title", 
      { y: 50, opacity: 0, rotationX: -90 },
      { y: 0, opacity: 1, rotationX: 0, duration: 1, ease: "back.out(1.7)" }, 
      "-=0.8"
    )
    .fromTo(".hero-tagline", 
      { y: 30, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }, 
      "-=0.6"
    )
    .fromTo(".hero-sub", 
      { y: 30, opacity: 0, skewX: 10 },
      { y: 0, opacity: 1, skewX: 0, duration: 0.8, ease: "power2.out" }, 
      "-=0.5"
    )
    .fromTo(".hero-cta .btn", 
      { y: 20, opacity: 0, scale: 0.5 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.2, ease: "back.out(1.7)" }, 
      "-=0.4"
    );

    // Section animations with 3D flip effect
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
            toggleActions: "play none none reverse",
            once: false
          },
          ease: "power3.out"
        }
      );
    });

    // Video card animations with 3D tilt effect
    gsap.utils.toArray(".video-card, .category-card").forEach((card, i) => {
      // Initial state for cards
      gsap.set(card, { transformPerspective: 1000 });
      
      // Entrance animation
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
            toggleActions: "play none none reverse",
            once: false
          },
          ease: "power3.out"
        }
      );
      
      // Hover effect with 3D tilt
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          rotationY: 5,
          rotationX: 5,
          scale: 1.03,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotationY: 0,
          rotationX: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      // Mouse move effect for subtle 3D tilt
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateY = (x - centerX) / 10;
        const rotateX = (centerY - y) / 10;
        
        gsap.to(card, {
          rotationY: rotateY,
          rotationX: rotateX,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    // Cleanup function
    return () => {
      heroTl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      // Remove event listeners
      document.querySelectorAll(".video-card, .category-card").forEach(card => {
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
        card.removeEventListener("mousemove", () => {});
      });
    };
  }, []);

  return (
    <motion.main 
      className="home-page"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
      }}
    >
      {/* Hero */}
      <motion.section 
        className="hero hero-bg" 
        aria-labelledby="hero-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-overlay" />
        <motion.div className="hero-inner" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
          <motion.img
            className="hero-logo"
            src="https://yt3.googleusercontent.com/ytc/AIdro_kzc2V698OvpFqD4ojbU_HLMF-DRk8FMJ9aPuUESWYMYBQ=s160-c-k-c0x00ffffff-no-rj"
            alt="Wasty Besty Logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          />
          <motion.h1 
            id="hero-heading" 
            className="hero-title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Wasty Besty
          </motion.h1>
          <motion.p 
            className="hero-tagline"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Entertainment | Fun | Creativity — All in One Place!
          </motion.p>
          <motion.p 
            className="hero-sub"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Hosted by Mam — your DIY gardening guide for upcycled projects, plant care, and calm green vibes.
          </motion.p>
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
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
          </motion.div>
        </motion.div>
        {/* Decorative leaves (already styled by LeafTransitions.css) */}
        <LeafTransitions />
      </motion.section>

      {/* About */}
      <motion.section 
        className="section section-alt" 
        aria-labelledby="about-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h2 id="about-heading" className="section-title">Who We Are</h2>
          <p className="section-text">
            We spread smiles, laughter, and creativity through nature. From DIY “Best Out of Waste” to plant care and
            garden tours, our videos make learning feel soothing and fun. Every week we share fresh ideas, practical tips,
            and joyful moments to grow your green space.
          </p>
          <p className="section-text">
            Whether you are a beginner or a plant lover, you’ll find quick hacks, relatable content, and community vibes
            that bring you closer to nature.
          </p>
        </div>
      </motion.section>

      {/* Featured Videos */}
      <motion.section 
        className="section" 
        aria-labelledby="featured-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h2 id="featured-heading" className="section-title">Featured Videos</h2>
          <div className="grid">
            {featuredVideos.map(v => (
              <VideoCard key={v.id} {...v} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Series / Playlists */}
      <motion.section 
        className="section section-alt" 
        aria-labelledby="series-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h2 id="series-heading" className="section-title">Explore Our Series</h2>
          <div className="grid grid-categories">
            {series.map(s => (
              <CategoryCard key={s.title} {...s} />
            ))}
          </div>
          <p className="section-note">
            Tip: Replace these links with your exact playlist URLs for Herbal, Vegetables, Flowers, Succulents, and Gardening ki पाठशाला.
          </p>
        </div>
      </motion.section>

      {/* Tips & Hacks */}
      <motion.section 
        className="section" 
        aria-labelledby="tips-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
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
      </motion.section>

      {/* Vlog & Personal Touch */} 
      <motion.section 
        className="section section-alt" 
        aria-labelledby="vlog-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
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
      </motion.section>

      
    </motion.main>
  );
}

