import React from 'react';
import './Footer.css';
import { FaYoutube, FaInstagram, FaFacebook, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding & Tagline Section */}
        <div className="footer-section">
          <div className="brand-section">
            <h3 className="brand-name">Wasty Besty</h3>
            <p className="tagline">
              Transforming waste into valuable resources through innovative solutions and sustainable practices.
            </p>
          </div>
        </div>

        {/* Quick Navigation Links */}
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/videos">Tutorials</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="footer-section">
          <h4 className="footer-title">Legal</h4>
          <ul className="footer-links">
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/cookies">Cookie Policy</a></li>
            <li><a href="/disclaimer">Disclaimer</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h4 className="footer-title">Contact Us</h4>
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href="mailto:info@wastybesty.com">info@wastybesty.com</a>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <a href="tel:+911234567890">+91 12345 67890</a>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>123 Eco Street, Green City, India</span>
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="footer-section">
          <h4 className="footer-title">Stay Connected</h4>
          
          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://youtube.com" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>

          {/* Newsletter Subscription */}
          <div className="newsletter-section">
            <p className="newsletter-text">
              Get updates, tutorials, and news directly in your inbox.
            </p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="footer-section">
          <h4 className="footer-title">Resources</h4>
          <ul className="footer-links">
            <li><a href="/documentation">Documentation</a></li>
            <li><a href="/guides">Guides</a></li>
            <li><a href="/press">Press Kit</a></li>
            <li><a href="/community">Community Forum</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="copyright-bar">
        <div className="copyright-container">
          <p>
            © {currentYear} Wasty Besty — All Rights Reserved
          </p>
          <p className="credit-line">
            Designed & Developed with ❤️ for a sustainable future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
