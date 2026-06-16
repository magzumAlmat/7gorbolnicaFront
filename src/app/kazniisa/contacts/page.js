"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function KazniisaContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/kazniisa/contacts');
        setContacts(res.data);
      } catch (err) {
        console.error("Error", err);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  if (loading) return <div style={{ padding: '100px', textAlign: 'center' }}>Загрузка контактов...</div>;

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 5%' }}>
      <h1 style={{ color: '#1a365d', fontSize: '36px', marginBottom: '10px' }}>Контакты и филиалы</h1>
      <p style={{ color: '#718096', fontSize: '18px', marginBottom: '50px' }}>Мы представлены в ключевых регионах Казахстана.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
        {contacts.map((contact, idx) => (
          <motion.div 
            key={contact.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            style={{ 
              background: 'white', 
              padding: '40px', 
              borderRadius: '20px', 
              boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
              borderTop: idx === 0 ? '5px solid #e53e3e' : '5px solid #3182ce'
            }}
          >
            <h2 style={{ color: '#2d3748', fontSize: '22px', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              {idx === 0 ? '📍 Головной офис:' : '🏢 Филиал:'} {contact.officeName.ru}
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <ContactRow icon="📌" label="Адрес:" value={contact.address.ru} />
              <ContactRow icon="📞" label="Телефон:" value={contact.phone} />
              <ContactRow icon="✉️" label="Email:" value={contact.email} />
              <ContactRow icon="🕒" label="Режим работы:" value={contact.workHours.ru} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const ContactRow = ({ icon, label, value }) => {
  if (!value) return null;
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
      <span style={{ fontSize: '20px' }}>{icon}</span>
      <div>
        <span style={{ color: '#a0aec0', fontSize: '13px', display: 'block', marginBottom: '2px' }}>{label}</span>
        <span style={{ color: '#4a5568', fontSize: '16px', fontWeight: 500 }}>{value}</span>
      </div>
    </div>
  );
};
