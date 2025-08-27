// src/pages/Home.js
import React from 'react';
import Footer from '../components/Footer';
import LeafTransitions from '../components/LeafTransitions';
import '../components/LeafTransitions.css';
import './Home.css';

function VideoCard({ id, title, desc }) {
  return (
    <article className="card video-card">
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
    </article>
  );
}

function CategoryCard({ title, link }) {
  return (
    <a
      className="card category-card"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open playlist ${title}`}
    >
      <span className="category-title">{title}</span>
      <span className="category-arrow">→</span>
    </a>
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

  return (
    <main className="home-page">
      {/* Hero */}
      <section className="hero hero-bg" aria-labelledby="hero-heading">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <img
            className="hero-logo"
            src="https://yt3.googleusercontent.com/ytc/AIdro_kzc2V698OvpFqD4ojbU_HLMF-DRk8FMJ9aPuUESWYMYBQ=s160-c-k-c0x00ffffff-no-rj"
            alt="Wasty Besty Logo"
          />
          <h1 id="hero-heading" className="hero-title">Wasty Besty</h1>
          <p className="hero-tagline">Entertainment | Fun | Creativity — All in One Place!</p>
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
        {/* Decorative leaves (already styled by LeafTransitions.css) */}
        <LeafTransitions />
      </section>

      {/* About */}
      <section className="section section-alt" aria-labelledby="about-heading">
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
          <p className="section-note">
            Tip: Replace these links with your exact playlist URLs for Herbal, Vegetables, Flowers, Succulents, and Gardening ki पाठशाला.
          </p>
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

      {/* Footer */}
      <Footer />
    </main>
  );
}
