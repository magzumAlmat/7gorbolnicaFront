"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function KazniisaNewsArticlePage({ params }) {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/kazniisa/news');
        const found = res.data.find(n => n.slug === params.slug || n.slug.includes(params.slug));
        setArticle(found);
      } catch (err) {
        console.error("Error", err);
      } finally {
        setLoading(false);
      }
    };
    if (params.slug) {
      fetchArticle();
    }
  }, [params.slug]);

  if (loading) return <div style={{ padding: '100px', textAlign: 'center' }}>Загрузка статьи...</div>;
  if (!article) return <div style={{ padding: '100px', textAlign: 'center' }}>Статья не найдена</div>;

  return (
    <div style={{ background: '#f7fafc', minHeight: '100vh', paddingBottom: '60px' }}>
      {/* Article Header with Parallax-like effect */}
      <div style={{ 
        height: '50vh', 
        background: `linear-gradient(rgba(26, 54, 93, 0.7), rgba(26, 54, 93, 0.9)), url(${article.image || '/default-news.jpg'}) center/cover no-repeat`,
        display: 'flex',
        alignItems: 'center',
        padding: '0 5%'
      }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
          <Link href="/kazniisa/news" style={{ color: '#fc8181', textDecoration: 'none', fontWeight: 600, display: 'inline-block', marginBottom: '20px' }}>
            &larr; Назад к новостям
          </Link>
          <h1 style={{ color: 'white', fontSize: '2.5rem', lineHeight: 1.2, margin: '0 0 20px' }}>
            {article.title.ru}
          </h1>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <span style={{ background: '#e53e3e', color: 'white', padding: '5px 12px', borderRadius: '15px', fontSize: '13px', fontWeight: 600 }}>
              {article.category === 'uncategorized' ? 'Новости' : article.category}
            </span>
            <span style={{ color: '#cbd5e0', fontSize: '14px' }}>
              {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString('ru-RU') : ''}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Article Content */}
      <div style={{ maxWidth: '1000px', margin: '-50px auto 0', padding: '0 5%', position: 'relative', zIndex: 10 }}>
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          style={{ background: 'white', padding: '50px', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', fontSize: '17px', lineHeight: 1.8, color: '#4a5568' }}
        >
          <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content.ru }} />
        </motion.div>
      </div>
    </div>
  );
}
