import React from 'react';
import Footer from '../components/Footer';
import './About.css';

export default function About() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="section hero-about">
        <div className="container center">
          <h1 className="page-title">About Wasty Besty</h1>
          <p className="page-sub">
            Turning waste into wonder 🌿 — Wasty Besty is all about creative upcycling, 
            smart gardening, and inspiring a greener lifestyle.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section story-section">
        <div className="container">
          <h2>Our Journey</h2>
          <p>
            Wasty Besty started with a simple idea — to share the joy of gardening, 
            DIY creations, and sustainable living with the world. From humble beginnings 
            in our first vlog 
            <a href="https://www.youtube.com/watch?v=dwE7avS74As" target="_blank" rel="noopener noreferrer">
              {" "}Here is My First Vlog on YouTube All About Wasty Besty मेरा ...
            </a> 
            to reaching thousands of viewers, our mission has always been to inspire 
            creativity and care for nature.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section highlights-section">
        <div className="container">
          <h2>What We Do</h2>
          <ul>
            <li>
              <strong>Smart Gardening Hacks:</strong> Learn time‑saving tips like 
              <a href="https://www.youtube.com/watch?v=11cRUXkeGnA" target="_blank" rel="noopener noreferrer">
                {" "}100% कारगर Jugaadu Auto Watering, Selfwatering During ...
              </a>
            </li>
            <li>
              <strong>Budget Plant Shopping:</strong> Discover affordable finds in 
              <a href="https://www.youtube.com/watch?v=w0eIESQPEZs" target="_blank" rel="noopener noreferrer">
                {" "}Delhi NCR में सबसे सस्ते पौधे Buy Plants at rupees 10/- only
              </a> 
              and 
              <a href="https://www.youtube.com/watch?v=oojg8FjSEqY" target="_blank" rel="noopener noreferrer">
                {" "}देखो कैसे लाती हूं महंगे वाले पौधे भी सस्ते में ?
              </a>
            </li>
            <li>
              <strong>Creative Upcycling:</strong> Turn waste into beauty with ideas like 
              <a href="https://www.youtube.com/watch?v=zi4X8KpQSfo" target="_blank" rel="noopener noreferrer">
                {" "}Beautiful Creation of Coconut Shell || नारियल का खोपरा एक ...
              </a>
            </li>
            <li>
              <strong>Garden Inspiration:</strong> Take a virtual stroll in 
              <a href="https://www.youtube.com/watch?v=HKAvjZdghwM" target="_blank" rel="noopener noreferrer">
                {" "}Beautiful Garden View Garden Tour
              </a>
            </li>
            <li>
              <strong>Decor & Design:</strong> Get tips from 
              <a href="https://www.youtube.com/watch?v=jHTwR3bDU0U" target="_blank" rel="noopener noreferrer">
                {" "}सस्ती Economical Shopping for Garden - Home Decoration ...
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container center">
          <h2 className="cta-title">Join Our Green Journey</h2>
          <p className="cta-desc">
            Explore more videos, tips, and inspiration on our YouTube channel 
            <strong> Wasty Besty</strong>. Let’s grow together — one plant, one idea at a time.
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
            {/* Mam Section */}
      <section className="section mam-section">
        <div className="container mam-container">
          <div className="mam-photo">
            <img 
              src="/images/anju-mam.jpg" // yahan Mam ki photo ka correct path lagana
              alt="Anju Sachan - Wasty Besty" 
            />
          </div>
          <div className="mam-text">
            <h2>Meet <span className="highlight">Anju Sachan</span></h2>
            <p>
              <strong>Anju Sachan</strong> — the creative mind and caring heart behind 
              <em> Wasty Besty</em> — ek passionate gardener, DIY upcycler, aur nature lover hain.  
              Unka mission hai: <em>"Waste ko wonder me badalna aur har ghar me greenery ka magic le aana."</em>
            </p>
            <p>
              Mam apne videos me audience ko inspire karti hain unique upcycling ideas, 
              practical gardening hacks aur budget‑friendly tips ke saath.  
              Popular videos jaise 
              <a href="https://www.youtube.com/watch?v=11cRUXkeGnA" target="_blank" rel="noopener noreferrer">
                {" "}Auto Watering Hack
              </a> 
              aur 
              <a href="https://www.youtube.com/watch?v=w0eIESQPEZs" target="_blank" rel="noopener noreferrer">
                {" "}Plants at ₹10
              </a>  
              unki creativity ka perfect example hain.
            </p>
            <p>
              **Vision:** Wasty Besty ko ek aise green community me badalna jahan har insaan apne 
              ideas, gardens, aur creativity share kar sake — aur hum sab milkar 
              ek sustainable, beautiful world banayen.
            </p>
          </div>
        </div>
      </section>

      
    </main>
  );
}
