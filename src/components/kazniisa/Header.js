"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  const [lang, setLang] = useState('ru');

  return (
    <header style={{
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)',
      padding: '15px 5%'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1400px', margin: '0 auto' }}>
        <Link href="/kazniisa" style={{ textDecoration: 'none' }}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <h1 style={{ margin: 0, color: '#1a365d', fontSize: '28px', fontWeight: 800, letterSpacing: '-0.5px' }}>
              <span style={{ color: '#e53e3e' }}>KAZ</span>NIISA
            </h1>
            <p style={{ margin: 0, fontSize: '10px', color: '#718096', textTransform: 'uppercase', letterSpacing: '1px' }}>
              КазНИИ строительства и архитектуры
            </p>
          </motion.div>
        </Link>
        <nav style={{ display: 'flex', gap: '35px', alignItems: 'center' }}>
          <NavLink href="/kazniisa/about-us">О нас</NavLink>
          <NavLink href="/kazniisa/centres">Центры</NavLink>
          <NavLink href="/kazniisa/news">Новости</NavLink>
          <NavLink href="/kazniisa/contacts">Контакты</NavLink>
          
          <div style={{ display: 'flex', gap: '10px', background: '#f7fafc', padding: '5px 10px', borderRadius: '20px', marginLeft: '20px' }}>
            {['RU', 'KZ', 'EN'].map((l) => (
              <button 
                key={l}
                onClick={() => setLang(l.toLowerCase())}
                style={{
                  border: 'none',
                  background: lang === l.toLowerCase() ? '#1a365d' : 'transparent',
                  color: lang === l.toLowerCase() ? 'white' : '#4a5568',
                  padding: '6px 12px',
                  borderRadius: '15px',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '13px',
                  transition: 'all 0.3s ease'
                }}
              >
                {l}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }) => (
  <Link href={href} style={{ textDecoration: 'none', color: '#2d3748', fontWeight: 600, fontSize: '16px' }}>
    <motion.div whileHover={{ color: '#e53e3e', y: -2 }} transition={{ duration: 0.2 }}>
      {children}
    </motion.div>
  </Link>
);

export default Header;
