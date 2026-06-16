'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { EmojiEvents, MenuBook, LocationCity, Groups } from '@mui/icons-material';

const achievements = [
  { icon: EmojiEvents, value: 150, suffix: '+', label: 'Государственных наград', color: '#0369A1' },
  { icon: MenuBook, value: 3500, suffix: '+', label: 'Нормативных документов', color: '#0891B2' },
  { icon: LocationCity, value: 10000, suffix: '+', label: 'Обследованных зданий', color: '#10b981' },
  { icon: Groups, value: 200, suffix: '+', label: 'Квалифицированных специалистов', color: '#8b5cf6' },
];

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };
    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [target, duration, start]);

  return count;
}

function CounterCard({ icon: Icon, value, suffix, label, color, started, delay }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!started) return;
    const t = setTimeout(() => setActive(true), delay);
    return () => clearTimeout(t);
  }, [started, delay]);

  const count = useCountUp(value, 2200, active);

  return (
    <Box sx={{
      textAlign: 'center',
      opacity: active ? 1 : 0,
      transform: active ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
    }}>
      <Box sx={{
        width: 72, height: 72, borderRadius: '50%',
        bgcolor: `${color}18`, mx: 'auto', mb: 2,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'transform 0.3s',
        '&:hover': { transform: 'scale(1.1) rotate(5deg)' },
      }}>
        <Icon sx={{ fontSize: 34, color }} />
      </Box>
      <Typography sx={{
        fontSize: { xs: '2.2rem', md: '2.8rem' }, fontWeight: 800, color: '#0C2340', lineHeight: 1,
        fontVariantNumeric: 'tabular-nums',
      }}>
        {count.toLocaleString()}{suffix}
      </Typography>
      <Typography sx={{ color: '#64748b', fontSize: 14, mt: 1, fontWeight: 500 }}>
        {label}
      </Typography>
    </Box>
  );
}

export default function AchievementsBanner() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box ref={ref} sx={{
      py: { xs: 8, md: 12 },
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #F8FAFC 100%)',
    }}>
      <Box sx={{
        position: 'absolute', top: -100, right: -100,
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(8,145,178,0.06) 0%, transparent 70%)',
      }} />
      <Box sx={{
        position: 'absolute', bottom: -80, left: -80,
        width: 300, height: 300, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(3,105,161,0.06) 0%, transparent 70%)',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="overline" sx={{ color: '#0369A1', fontWeight: 700, letterSpacing: 3, fontSize: 13 }}>
            Достижения
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, color: '#0C2340', mt: 1, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
            Институт в цифрах
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {achievements.map((a, i) => (
            <Grid item xs={6} md={3} key={i}>
              <CounterCard {...a} started={started} delay={i * 150} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
