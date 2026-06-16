"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function KazniisaCentresPage() {
  const [centres, setCentres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCentres = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/kazniisa/centres');
        setCentres(res.data);
      } catch (err) {
        console.error("Error", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCentres();
  }, []);

  if (loading) return <div style={{ padding: '100px', textAlign: 'center' }}>Загрузка центров...</div>;

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 5%' }}>
      <h1 style={{ color: '#1a365d', fontSize: '36px', marginBottom: '10px' }}>
        Научно-исследовательские центры
      </h1>
      <p style={{ color: '#718096', fontSize: '18px', marginBottom: '50px', maxWidth: '800px' }}>
        КазНИИСА располагает передовыми исследовательскими центрами для решения сложнейших задач в области строительства.
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {centres.map((centre, idx) => (
          <motion.div 
            key={centre.id}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            style={{ 
              background: 'white', 
              borderRadius: '20px', 
              overflow: 'hidden', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid #edf2f7'
            }}
          >
            <div style={{ padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                <div style={{ width: '60px', height: '60px', background: '#ebf8ff', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: '#3182ce' }}>
                  🏢
                </div>
                <h2 style={{ margin: 0, color: '#2d3748', fontSize: '24px' }}>{centre.name.ru}</h2>
              </div>
              <p style={{ color: '#4a5568', fontSize: '16px', lineHeight: 1.7, margin: 0 }}>
                {centre.description.ru}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
