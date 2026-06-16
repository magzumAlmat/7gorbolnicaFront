"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function KazniisaAboutPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/kazniisa/pages');
        const aboutPage = res.data.find(p => p.slug === '/about-us' || p.slug === 'about-us');
        setData(aboutPage);
      } catch (err) {
        console.error("Error", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div style={{ padding: '100px', textAlign: 'center' }}>Загрузка...</div>;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 5%' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 style={{ color: '#1a365d', fontSize: '36px', marginBottom: '30px', borderBottom: '3px solid #e53e3e', paddingBottom: '15px', display: 'inline-block' }}>
          {data?.title?.ru || 'О нас'}
        </h1>
        
        <div 
          className="content-body-styled"
          style={{ 
            background: 'white', 
            padding: '40px', 
            borderRadius: '15px', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            lineHeight: 1.8,
            color: '#4a5568',
            fontSize: '16px'
          }}
          dangerouslySetInnerHTML={{ __html: data?.content?.ru || '<p>Информация скоро появится.</p>' }} 
        />
      </motion.div>
    </div>
  );
}
