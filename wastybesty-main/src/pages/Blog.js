import React from 'react';
import Footer from '../components/Footer';
import './Blog.css';

// Blog Card Component
function BlogCard({ cover, title, date, summary, link, tags }) {
  return (
    <article className="blog-card">
      <div className="blog-cover">
        <img src={cover} alt={title} loading="lazy" />
      </div>
      <div className="blog-body">
        <h3 className="blog-title">{title}</h3>
        <div className="blog-meta">
          <span>{new Date(date).toLocaleDateString()}</span>
          {tags && tags.length > 0 && (
            <span className="blog-tags">
              {tags.map((t, i) => (
                <em key={i}>#{t}</em>
              ))}
            </span>
          )}
        </div>
        <p className="blog-summary">{summary}</p>
        <a className="btn btn-read" href={link}>
          Read More →
        </a>
      </div>
    </article>
  );
}

export default function Blog() {
  const posts = [
    {
      cover:
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80',
      title: 'Welcome to Wasty Besty 🌿',
      date: '2025-08-20',
      summary:
        'Mam ke garden se — compost, cuttings, aur upcycling ke dil‑se tips. Yeh blog videos ka companion hai.',
      link: '/blog/welcome-to-wasty-besty',
      tags: ['Gardening', 'Upcycling']
    },
    {
      cover:
        'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80',
      title: 'Monsoon Plant Care Guide ☔',
      date: '2025-07-15',
      summary:
        'Barsaat me paudhon ko fungal infection se kaise bachayein aur growth boost karein.',
      link: '/blog/monsoon-plant-care',
      tags: ['Gardening', 'Seasonal Tips']
    },
    {
      cover:
        'https://images.unsplash.com/photo-1598965402089-897ce52e65d4?w=800&q=80',
      title: 'DIY Coconut Shell Planter 🥥',
      date: '2025-07-02',
      summary:
        'Waste coconut shell ka upcycling project jo garden me ek rustic charm laata hai.',
      link: '/blog/coconut-shell-planter',
      tags: ['DIY', 'Best out of Waste']
    }
  ];

  return (
    <main className="blog-page">
      <section className="section hero-blog">
        <div className="container center">
          <h1 className="page-title">Wasty Besty Blogs</h1>
          <p className="page-sub">
            Tips, DIY guides, seasonal plant care aur Mam ke garden se inspiration.
          </p>
        </div>
      </section>

      <section className="section blog-list">
        <div className="container blog-grid">
          {posts.map((post, idx) => (
            <BlogCard key={idx} {...post} />
          ))}
        </div>
      </section>

      <section className="section cta-section">
        <div className="container center">
          <h2 className="cta-title">📩 Get Fresh Tips Directly</h2>
          <p className="cta-desc">
            Hamare blog ko regular check karein ya newsletter subscribe karein — taaki har season me garden kare perfect bloom.
          </p>
          <a href="/contact" className="btn btn-subscribe">
            Subscribe Now
          </a>
        </div>
      </section>

      
    </main>
  );
}
