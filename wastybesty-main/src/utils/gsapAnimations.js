import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const gsapAnimations = {
  // Hero section animations
  animateHero: (heroElements) => {
    const tl = gsap.timeline();
    
    if (heroElements.logo) {
      tl.fromTo(heroElements.logo, 
        { scale: 0, opacity: 0, rotationY: -180 },
        { scale: 1, opacity: 1, rotationY: 0, duration: 1.5, ease: "elastic.out(1, 0.8)" }
      );
    }
    
    if (heroElements.title) {
      tl.fromTo(heroElements.title, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" }, 
        heroElements.logo ? "-=0.8" : "+=0"
      );
    }
    
    if (heroElements.tagline) {
      tl.fromTo(heroElements.tagline, 
        { y: 30, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }, 
        "-=0.6"
      );
    }
    
    if (heroElements.subtitle) {
      tl.fromTo(heroElements.subtitle, 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, 
        "-=0.5"
      );
    }
    
    return tl;
  },

  // Section scroll animations
  animateSections: (selector = ".section") => {
    const sections = gsap.utils.toArray(selector);
    
    sections.forEach(section => {
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
  },

  // Card animations with 3D effects
  animateCards: (selector = ".video-card, .category-card, .blog-card") => {
    const cards = gsap.utils.toArray(selector);
    const cleanupFunctions = [];

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

        const rotationY = ((x - centerX) / centerX) * 10;
        const rotationX = -((y - centerY) / centerY) * 10;

        gsap.to(card, {
          rotateY: rotationY,
          rotateX: rotationX,
          duration: 0.3,
        });
      };

      card.addEventListener("mouseenter", handleEnter);
      card.addEventListener("mouseleave", handleLeave);
      card.addEventListener("mousemove", handleMove);

      const cleanup = () => {
        card.removeEventListener("mouseenter", handleEnter);
        card.removeEventListener("mouseleave", handleLeave);
        card.removeEventListener("mousemove", handleMove);
      };

      cleanupFunctions.push(cleanup);
    });

    return cleanupFunctions;
  },

  // Cleanup function
  cleanupAnimations: (timeline, cleanupFunctions = []) => {
    if (timeline) timeline.kill();
    ScrollTrigger.getAll().forEach(t => t.kill());
    cleanupFunctions.forEach(cleanup => cleanup());
  }
};
