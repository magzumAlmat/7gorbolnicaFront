"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer style={{
      background: '#1a202c',
      color: '#cbd5e0',
      padding: '60px 5% 30px',
      marginTop: '80px'
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', maxWidth: '1400px', margin: '0 auto' }}>
        <div>
          <h2 style={{ color: 'white', margin: '0 0 20px', fontSize: '24px' }}>
            <span style={{ color: '#fc8181' }}>KAZ</span>NIISA
          </h2>
          <p style={{ lineHeight: '1.6', fontSize: '14px' }}>
            Ведущий научно-исследовательский и проектный институт в области строительства и архитектуры Казахстана.
          </p>
        </div>
        <div>
          <h3 style={{ color: 'white', marginBottom: '20px', fontSize: '18px' }}>Быстрые ссылки</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '2' }}>
            <li><FooterLink href="/kazniisa/about-us">О компании</FooterLink></li>
            <li><FooterLink href="/kazniisa/centres">Наши центры</FooterLink></li>
            <li><FooterLink href="/kazniisa/news">Новости и события</FooterLink></li>
            <li><FooterLink href="/kazniisa/contacts">Контакты</FooterLink></li>
          </ul>
        </div>
        <div>
          <h3 style={{ color: 'white', marginBottom: '20px', fontSize: '18px' }}>Контакты</h3>
          <p style={{ margin: '0 0 10px', fontSize: '14px' }}>📍 Алматы, 3 микрорайон, 44А</p>
          <p style={{ margin: '0 0 10px', fontSize: '14px' }}>📞 8 (727) 226 94 10</p>
          <p style={{ margin: '0 0 10px', fontSize: '14px' }}>✉️ info@kazniisa.kz</p>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #2d3748', marginTop: '40px', paddingTop: '20px', textAlign: 'center', fontSize: '14px' }}>
        <p>© {new Date().getFullYear()} АО «КазНИИСА». Все права защищены.</p>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }) => (
  <a href={href} style={{ color: '#a0aec0', textDecoration: 'none', transition: 'color 0.2s' }}>
    {children}
  </a>
);

export default Footer;
