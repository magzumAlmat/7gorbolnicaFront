"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Link from 'next/link';

export default function KazniisaHomePage() {
  const [data, setData] = useState(null);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pagesRes, newsRes] = await Promise.all([
          axios.get('http://localhost:8000/api/kazniisa/pages'),
          axios.get('http://localhost:8000/api/kazniisa/news')
        ]);
        
        const homepage = pagesRes.data.find(p => p.slug === '/');
        setData(homepage);
        setNews(newsRes.data.slice(0, 3)); // Get top 3 news
      } catch (err) {
        console.error("Error fetching KazNIISA data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '3px solid #e2e8f0', borderTopColor: '#e53e3e', animation: 'spin 1s linear infinite' }} />
        <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '80vh',
        background: 'linear-gradient(rgba(26, 54, 93, 0.8), rgba(26, 54, 93, 0.7)), url("/uploads/kazniisa/img_1.jpg") center/cover no-repeat',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%', position: 'relative', zIndex: 1 }}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '20px', maxWidth: '800px', lineHeight: 1.1 }}
          >
            {data?.title?.ru || 'Казахский научно-исследовательский и проектный институт строительства и архитектуры'}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '40px', opacity: 0.9 }}
          >
            Единственный в Казахстане государственный научно-исследовательский и проектный институт в области развития строительства и архитектуры.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/kazniisa/about-us" style={{
              background: '#e53e3e',
              color: 'white',
              padding: '15px 30px',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '16px',
              display: 'inline-block',
              boxShadow: '0 4px 15px rgba(229, 62, 62, 0.4)'
            }}>
              Подробнее о нас
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div style={{ maxWidth: '1400px', margin: '-50px auto 0', position: 'relative', zIndex: 2, padding: '0 5%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          
          <Card icon="🏛️" title="Инновации и стандарты" desc="Разработка национальных стандартов, СНиПов и внедрение Еврокодов." />
          <Card icon="🏗️" title="Сейсмостойкое строительство" desc="Уникальные испытания конструкций и обследование зданий на сейсмостойкость." />
          <Card icon="💻" title="Цифровизация (BIM/ТИМСО)" desc="Внедрение технологий информационного моделирования в строительство." />
          
        </div>
      </div>

      {/* Extracted DB Content */}
      <section style={{ padding: '80px 5%', maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}
        >
          <h2 style={{ color: '#1a365d', fontSize: '32px', marginBottom: '30px', borderBottom: '2px solid #e2e8f0', paddingBottom: '15px' }}>О КазНИИСА</h2>
          {/* We assume data.content.ru has HTML content or simple text. Since it's HTML, we'll use dangerouslySetInnerHTML */}
          <div 
            className="content-body"
            style={{ lineHeight: 1.8, color: '#4a5568' }}
            dangerouslySetInnerHTML={{ __html: data?.content?.ru || 'Контент временно недоступен.' }} 
          />
        </motion.div>
      </section>

      {/* Latest News */}
      <section style={{ background: '#f7fafc', padding: '80px 5%' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
            <h2 style={{ color: '#1a365d', fontSize: '36px', margin: 0 }}>Последние новости</h2>
            <Link href="/kazniisa/news" style={{ color: '#e53e3e', textDecoration: 'none', fontWeight: 600 }}>Все новости &rarr;</Link>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {news.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
              >
                <div style={{ height: '200px', background: '#e2e8f0', backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div style={{ padding: '25px' }}>
                  <p style={{ color: '#e53e3e', fontSize: '12px', fontWeight: 600, margin: '0 0 10px' }}>
                    {new Date(item.publishedAt).toLocaleDateString('ru-RU')}
                  </p>
                  <h3 style={{ margin: '0 0 15px', color: '#2d3748', fontSize: '18px', lineHeight: 1.4 }}>
                    <Link href={`/kazniisa/news/${item.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {item.title.ru}
                    </Link>
                  </h3>
                  <Link href={`/kazniisa/news/${item.slug}`} style={{ color: '#4299e1', textDecoration: 'none', fontWeight: 500, fontSize: '14px' }}>
                    Читать далее
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const Card = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    style={{ 
      background: 'white', 
      padding: '30px', 
      borderRadius: '20px', 
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
      textAlign: 'center'
    }}
  >
    <div style={{ fontSize: '40px', marginBottom: '20px' }}>{icon}</div>
    <h3 style={{ color: '#1a365d', marginBottom: '15px', fontSize: '20px' }}>{title}</h3>
    <p style={{ color: '#718096', margin: 0, lineHeight: 1.6 }}>{desc}</p>
  </motion.div>
);
