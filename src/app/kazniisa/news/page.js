"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function KazniisaNewsListPage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/kazniisa/news');
        setNews(res.data);
      } catch (err) {
        console.error("Error", err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) return <div style={{ padding: '100px', textAlign: 'center' }}>Загрузка новостей...</div>;

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 5%' }}>
      <h1 style={{ color: '#1a365d', fontSize: '36px', marginBottom: '40px', borderBottom: '3px solid #e53e3e', paddingBottom: '15px', display: 'inline-block' }}>
        Новости и события
      </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
        {news.map((item, idx) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            style={{ 
              background: 'white', 
              borderRadius: '15px', 
              overflow: 'hidden', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ height: '220px', background: '#e2e8f0', backgroundImage: `url(${item.image || '/default-news.jpg'})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <span style={{ 
                background: '#ebf8ff', 
                color: '#3182ce', 
                padding: '5px 10px', 
                borderRadius: '10px', 
                fontSize: '12px', 
                fontWeight: 600, 
                alignSelf: 'flex-start',
                marginBottom: '15px'
              }}>
                {item.category === 'uncategorized' ? 'Новости' : item.category}
              </span>
              <h3 style={{ margin: '0 0 15px', color: '#2d3748', fontSize: '18px', lineHeight: 1.4 }}>
                <Link href={`/kazniisa/news/${item.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {item.title.ru}
                </Link>
              </h3>
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #edf2f7', paddingTop: '15px' }}>
                <p style={{ color: '#a0aec0', fontSize: '13px', margin: 0 }}>
                  {item.publishedAt ? new Date(item.publishedAt).toLocaleDateString('ru-RU') : ''}
                </p>
                <Link href={`/kazniisa/news/${item.slug}`} style={{ color: '#e53e3e', textDecoration: 'none', fontWeight: 600, fontSize: '14px' }}>
                  Подробнее &rarr;
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
