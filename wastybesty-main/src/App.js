import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollTopButton from "./components/ScrollTopButton";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Shorts from "./pages/Shorts";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blog";
import BestyBuilds from "./pages/BestyBuilds";
import PlantCareGuide from "./pages/PlantCareGuide";

export default function App() {
  useEffect(() => { document.title = "Wasty Besty • Official Website"; }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/bestybuilds" element={<BestyBuilds />} />
          <Route path="/plantcareguide" element={<PlantCareGuide />} />
        </Routes>
      </main>
      <Footer />
      <ScrollTopButton />
    </Router>
  );
}
