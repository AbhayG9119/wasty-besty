import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollTopButton from "./components/ScrollTopButton";

import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Shorts from "./pages/Shorts";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Blogs from "./pages/Blog";

export default function App() {
  useEffect(() => { document.title = "Wasty Besty • Official Website"; }, []);

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blogs />} />  
        </Routes>
      </main>
      <Footer />
      <ScrollTopButton />
    </Router>
  );
}
