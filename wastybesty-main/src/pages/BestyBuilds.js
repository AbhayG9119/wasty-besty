import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsapAnimations } from '../utils/gsapAnimations';
import './BestyBuilds.css';
// import Footer from '../components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Reusable Section Wrapper
const Section = ({ title, children, id }) => (
  <section className="section" aria-labelledby={id}>
    <div className="container">
      <h2 id={id} className="section-title">{title}</h2>
      {children}
    </div>
  </section>
);

// DIY Project Card
const ProjectCard = ({ id, title, description, image, videoId }) => (
  <article className="card project-card">
    <div className="video-frame">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
    <h3 className="card-title">{title}</h3>
    <p className="card-desc">{description}</p>
    <a
      className="btn btn-outline"
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch ${title} on YouTube`}
    >
      Watch Tutorial
    </a>
  </article>
);

// Stat Card
const StatCard = ({ icon, stat, desc }) => (
  <div className="stat-card">
    <span className="stat-icon">{icon}</span>
    <h3 className="stat-value">{stat}</h3>
    <p className="stat-desc">{desc}</p>
  </div>
);

// Category Card
const CategoryCard = ({ title, link }) => (
  <a
    className="card category-card"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Explore ${title} projects`}
  >
    <span className="category-title">{title}</span>
    <span className="category-arrow">→</span>
  </a>
);

const BestyBuilds = () => {
  const heroTl = useRef(null);
  const cleanupFunctions = useRef([]);

  useEffect(() => {
    // Hero animations
    heroTl.current = gsapAnimations.animateHero({
      title: document.querySelector('.hero-title'),
      subtitle: document.querySelector('.hero-tagline')
    });

    // Section animations
    gsapAnimations.animateSections();

    // Card animations
    const cardCleanup = gsapAnimations.animateCards('.project-card, .category-card, .stat-card');
    cleanupFunctions.current = cardCleanup;

    return () => {
      gsapAnimations.cleanupAnimations(heroTl.current, cleanupFunctions.current);
    };
  }, []);

  const featuredProjects = [
    {
      id: 'bottle-planters',
      title: 'Bottle Planters Masterclass',
      description: 'Transform plastic bottles into beautiful vertical gardens for herbs and flowers. Perfect for small spaces and urban gardening.',
      image: 'https://source.unsplash.com/featured/?plants',
      videoId: '11cRUXkeGnA'
    },
    {
      id: 'cardboard-organizers',
      title: 'Cardboard Organizers DIY',
      description: 'Repurpose old packaging into stylish drawer dividers and desk organizers. Reduce clutter while being eco-friendly.',
      image: 'https://source.unsplash.com/featured/?cardboard',
      videoId: 'jHTwR3bDU0U'
    },
    {
      id: 'fabric-tote-bags',
      title: 'Fabric Tote Bags Guide',
      description: 'Upcycle torn clothes into reusable shopping bags. Help reduce plastic waste with stylish, handmade alternatives.',
      image: 'https://source.unsplash.com/featured/?fabric',
      videoId: 'zw6BA1KWHgE'
    }
  ];

  const projectCategories = [
    { title: 'Plastic Upcycling', link: 'https://www.youtube.com/watch?v=kHztpvHa3Xg&list=PLaovYovF0U2z4FkZXi8BRF0VfuCr_Q3R7' },
    { title: 'Cardboard Crafts', link: 'https://www.youtube.com/watch?v=5Sg2DQrGpZg&list=PLaovYovF0U2w_pgtsbUjT2X0oesUIY4DM' },
    { title: 'Fabric Recycling', link: 'https://www.youtube.com/watch?v=E6Pwfura4Nk&list=PLaovYovF0U2xSgQIJLkZko50bqsZ9goci' },
    { title: 'Wood Pallet Projects', link: 'https://www.youtube.com/watch?v=DXYTof1pyEc&list=PLaovYovF0U2ykpDgz7ej4atlbqAY-KWt5' }
  ];

  const impactStats = [
    {
      icon: '🌿',
      stat: '5,774 kWh Saved',
      desc: 'Energy saved through plastic recycling initiatives'
    },
    {
      icon: '🌎',
      stat: '30% Less CO₂',
      desc: 'Reduction in carbon footprint from upcycled materials'
    },
    {
      icon: '🧵',
      stat: '2.5 Tons Saved',
      desc: 'Textile waste diverted from landfills annually'
    }
  ];

  const uspItems = [
    {
      icon: '♻️',
      title: 'Zero Waste Philosophy',
      desc: 'Every project starts with materials that would otherwise be discarded'
    },
    {
      icon: '💰',
      title: 'Budget Friendly',
      desc: 'Create beautiful items without spending money on new materials'
    },
    {
      icon: '🎨',
      title: 'Creative Freedom',
      desc: 'Unleash your creativity while making a positive environmental impact'
    }
  ];

  return (
    <main className="besty-builds-page">
      {/* Hero Section */}
      <section className="hero hero-bestybuilds" aria-labelledby="hero-heading">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <h1 id="hero-heading" className="hero-title">Wasty Besty 🛠️</h1>
          <p className="hero-tagline">Transforming Waste into Wonder</p>
          <p className="hero-sub">
            Join our movement to creatively repurpose materials, reduce waste, and build a sustainable future through DIY projects.
          </p>
          <div className="hero-cta">
            <a
              className="btn btn-yt"
              href="https://www.youtube.com/@WastyBesty"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe for Tutorials
            </a>
            <a
              className="btn btn-ghost"
              href="#featured-projects"
              aria-label="Explore featured projects"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <Section title="Our Story - How Wasty Besty Began" id="story-heading">
        <div className="story-content">
          <p className="section-text">
            Wasty Besty started as a simple passion project by a creative individual who saw potential in everyday waste materials. 
            What began as small DIY experiments in a home workshop quickly grew into a movement that inspires thousands of people 
            across the country.
          </p>
          <p className="section-text">
            The journey started when our founder noticed how much usable material was being discarded daily. Instead of seeing trash, 
            they saw opportunities - plastic bottles could become planters, old clothes could transform into beautiful bags, and 
            cardboard could be reborn as organizational solutions.
          </p>
          <p className="section-text">
            Through YouTube tutorials and social media sharing, Wasty Besty evolved from a personal hobby into a community-driven 
            platform. Today, we're proud to have inspired countless individuals to look at waste differently and discover the joy 
            of creating something beautiful from materials that would otherwise end up in landfills.
          </p>
        </div>
      </Section>

      {/* Mission Section */}
      <Section title="Our Mission" id="mission-heading">
        <div className="mission-content">
          <p className="section-text">
            Wasty Besty is dedicated to empowering individuals and communities to transform waste materials into 
            beautiful, functional creations. We believe that every discarded item has potential, and through creativity 
            and innovation, we can reduce our environmental footprint while fostering artistic expression.
          </p>
          <p className="section-text">
            Our platform provides step-by-step tutorials, inspiration, and a supportive community for eco-conscious 
            makers who want to make a difference—one upcycled project at a time.
          </p>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section title="Featured DIY Projects" id="featured-projects">
        <div className="grid">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </Section>

      {/* Project Categories */}
      <Section title="Explore Project Categories" id="categories-heading">
        <div className="grid grid-categories">
          {projectCategories.map(category => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </Section>

      {/* Impact Statistics */}
      <Section title="Our Environmental Impact" id="impact-heading">
        <div className="stats-grid">
          {impactStats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
        <p className="section-note">
          *Statistics based on community contributions and project completions
        </p>
      </Section>

      {/* USP Section */}
      <Section title="Why Choose Wasty Besty" id="usp-heading">
        <div className="usp">
          {uspItems.map((item, index) => (
            <div key={index} className="usp-item">
              <span className="usp-icon">{item.icon}</span>
              <div>
                <h3 className="usp-title">{item.title}</h3>
                <p className="usp-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Community CTA */}
      <Section title="Join Our Community" id="community-heading">
        <div className="community-cta">
          <p className="section-text center">
            Become part of our growing community of eco-conscious creators. Share your projects, 
            get inspired, and learn from fellow upcycling enthusiasts.
          </p>
          <div className="cta-actions">
            <a
              className="btn btn-yt"
              href="https://www.youtube.com/@WastyBesty"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe on YouTube
            </a>
            <a
              className="btn btn-outline"
              href="https://www.instagram.com/wastybesty"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow on Instagram
            </a>
            <a
              className="btn btn-ghost"
              href="#contact"
              aria-label="Contact us"
            >
              Share Your Project
            </a>
          </div>
        </div>
      </Section>

      
    </main>
  );
};

export default BestyBuilds;
