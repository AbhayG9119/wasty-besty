import React from 'react';
import Footer from '../components/Footer';
import './Shorts.css';

function ShortCard({ id, title, desc, link }) {
  return (
    <article className="short-card">
      <div className="short-frame">
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=0&mute=1&loop=1&playlist=${id}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <h3 className="short-title">{title}</h3>
      <p className="short-desc">{desc}</p>
      <a
        className="btn btn-yt"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Watch on YouTube
      </a>
    </article>
  );
}

export default function Shorts() {
  const categories = [
    {
      name: '🌱 Quick Plant Care Tips',
      videos: [
        {
           id: 'q9YdZBkzXQ0',
        title: 'बड़े इंतजार के बाद... 😍 #footballlily',
        desc: 'Mam के वीडियोज़ में लेटेस्ट फुटबॉल लिली अपडेट देखें।',
        link: 'https://www.youtube.com/watch?v=q9YdZBkzXQ0'
        },


        
        {
         id: '8r0bCXqaovc',
        title: 'भुलाए नहीं भूलते वो दिन ... बहुत मिस करती हूं ... 🥲',
        desc: 'Mam पुराने दिनों की यादें और जुगाड़ शेयर करती हैं।',
        link: 'https://www.youtube.com/watch?v=8r0bCXqaovc'
        },
        {
           id: 'GAhoWqy7COs',
        title: 'सही टाइम बताने वाला पौधा 😅 #4oclock',
        desc: 'Gulabbas (4 o’clock) पौधा कैसे बताता है सही दिन का टाइम।',
        link: 'https://www.youtube.com/watch?v=GAhoWqy7COs'
        }
      ]
    },
    {
      name: '♻️ DIY Upcycle Projects',
      videos: [
        {
           id: 'kjYJU4henmw',
        title: 'Gardening की सबसे बड़ी गलती.. आप भी यही करते हैं क्या ?',
        desc: 'Composting और खाद लगाने में सबसे आम चूक—और इसे कैसे ठीक करें।',
        link: 'https://www.youtube.com/shorts/kjYJU4henmw'
        },
        {
           id: 'n9IlYiF0ICE',
        title: 'बेकार पड़े कप का कमाल देखो...',
        desc: 'स्टक कप को कैसे बनाएं ओर्गेनिक प्लांटर में—स्टेप बाय स्टेप DIY।',
        link: 'https://www.youtube.com/shorts/n9IlYiF0ICE'
        },
        {
          id: '2Nq4gaIa8K8',
        title: 'तुमसे मिलना, बड़ा अच्छा लगता है 😍',
        desc: 'पंछियों से मिलने का खूबसूरत एहसास—nature vibes!',
        link: 'https://www.youtube.com/shorts/2Nq4gaIa8K8'
        }
      ]
    },
    {
      name: '🎥 Quick Vlogs & Tours',
      videos: [
        {
          id: 'CLJwAkz3OwU',
        title: 'मेरे जाने के बाद भी इसको रहने देना.... Please 🙏',
        desc: 'चलते चलते…एक इच्छा तो पूरी हुई 😁',
        link: 'https://www.youtube.com/watch?v=CLJwAkz3OwU'
        },
        {
          id: 'WwFw2Vvd5Ag',
        title: 'सर्दियों में भर भर के फूल आते हैं इसमें 😍',
        desc: '#winterflower #pansy #dwarf #shorts #shortvideo',
        link: 'https://www.youtube.com/watch?v=WwFw2Vvd5Ag'
        },
        {
          id: '4Vg5io2-sJA',
        title: '💯 फूल खिले ... 👌🥰',
        desc: '#Winterbestflower #flowers #petunia #shorts #shortvideo #WastyBesty',
        link: 'https://www.youtube.com/watch?v=4Vg5io2-sJA'
        }
      ]
    }
  ];

  return (
    <main className="shorts-page">
      {/* Hero Section */}
      <section className="hero-shorts section">
        <div className="container center">
          <h1 className="page-title">Wasty Besty Shorts</h1>
          <p className="page-sub">
            60 सेकंड में DIY, गार्डन टिप्स और अपसायक्लिंग मैजिक!
          </p>
        </div>
      </section>

      {/* Category Sections */}
      {categories.map((cat, i) => (
        <section key={i} className="section category-section">
          <div className="container">
            <h2 className="category-title">{cat.name}</h2>
            <div className="shorts-grid">
              {cat.videos.map(v => (
                <ShortCard key={v.id} {...v} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section className="section cta-section">
        <div className="container center">
          <h2 className="cta-title">और भी Shorts देखने के लिए</h2>
          <p className="cta-desc">
            हर दिन नए Quick Tips और Tricks के लिए हमारे YouTube Shorts पेज को विज़िट करें।
          </p>
          <a
            href="https://www.youtube.com/@WastyBesty/shorts"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-subscribe"
          >
            📺 Visit Shorts
          </a>
        </div>
      </section>

      
    </main>
  );
}
