'use client';
import { Typography, Box, Grid, Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const directions = [
  { title: 'Цифрлау (ТИМСО/BIM)' },
  { title: 'Ғылыми зерттеулер' },
  { title: 'Техникалық сараптама' },
  { title: 'Инженерлік-сейсмометрлік қызмет' },
  { title: 'Ақпараттық жүйелер' },
  { title: 'Оқыту және коммуникациялар' },
];

const services = [
  'Разработка специальных технических условий',
  'Оценка готовности организации к внедрению ТИМСО',
  'Научно-техническое сопровождение',
  'Обучение и сертификация',
  'Сопровождение отраслевых ИТ-проектов',
  'Аудит BIM-проектов',
];

const standards = [
  'ҚР ЕЖ «Жобалау ұйымында ақпараттық модельдеуді қолдану»',
  'ҚР ЕЖ «Құрылыс объектілерінің өмірлік циклі. 1-бөлім. Жалпы ұғымдар»',
  'ҚР ЕЖ «Құрылыс объектілерінің өмірлік циклі. 2-бөлім. Құрылысты жобалау алдындағы дайындау сатысындағы ақпараттық модельдерге қойылатын талаптар»',
  'ҚР ЕЖ «Құрылыс объектілерінің өмірлік циклі. 3-бөлім. Құрылысты жобалық дайындау сатысындағы ақпараттық модельдерге қойылатын талаптар»',
  'ҚР ҚБҚ «Құрылыстағы ақпараттық модельдеу. Негізгі ережелер»',
  'ҚР ЕЖ «Ақпараттық модельдеуді пайдалана отырып алынатын жобалық құжаттаманы ресімдеуге қойылатын талаптар»',
  'ҚР ЕЖ «Ақпараттық модельдерге сараптама жүргізу тәртібі»',
];

export default function ScienceDigitalizationPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Центр науки и цифровизации строительства
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Центр науки и цифровизации строительства — это новое подразделение АО «КазНИИСА», которое объединяет
        экспертизу в области научных исследований, нормативно-технического регулирования и цифровых технологий.
        Мы сопровождаем проекты на всех стадиях жизненного цикла объектов: от фундаментальной науки и разработки
        стандартов до внедрения информационного моделирования (ТИМСО/BIM) и управления данными.
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2, p: 2, bgcolor: BLUE_LIGHT, borderRadius: '6px', borderLeft: '4px solid ' + BLUE }}>
        <PersonIcon sx={{ color: BLUE, fontSize: 22 }} />
        <Box>
          <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.95rem' }}>Косым Ансатбаев</Typography>
          <Typography sx={{ fontSize: '0.82rem', color: GRAY_TEXT }}>Зам директора</Typography>
        </Box>
      </Box>

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 5, fontStyle: 'italic' }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
          Внедрение ТИМСО осуществляется в рамках «Плана мероприятий по внедрению технологии информационного
          моделирования в строительную отрасль Республики Казахстан».
        </Typography>
      </Box>

      <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 3 }}>
        Орталық қызметінің негізгі бағыттары
      </Typography>

      <Grid container spacing={3} sx={{ mb: 5 }}>
        {directions.map((d, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Box sx={{ p: 2.5, border: '1px solid ' + BORDER, borderRadius: '6px', height: '100%', transition: 'box-shadow 0.2s', '&:hover': { boxShadow: '0 4px 16px rgba(0,0,0,0.06)' } }}>
              <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.95rem' }}>{d.title}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4} sx={{ mb: 5 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.05rem', mb: 2 }}>Компетенции и услуги центра</Typography>
          {services.map((s, i) => (
            <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.2 }}>
              <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: BLUE, mt: '9px', flexShrink: 0 }} />
              <Typography sx={{ fontSize: '0.92rem', lineHeight: 1.8, color: '#334155' }}>{s}</Typography>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.05rem', mb: 2 }}>Біз дамыттық</Typography>
          {standards.map((s, i) => (
            <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.2 }}>
              <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: NAVY, mt: '9px', flexShrink: 0 }} />
              <Typography sx={{ fontSize: '0.88rem', lineHeight: 1.8, color: '#334155' }}>{s}</Typography>
            </Box>
          ))}
        </Grid>
      </Grid>

      <Divider sx={{ mb: 4 }} />

      <Box sx={{ bgcolor: NAVY, borderRadius: '6px', p: 4, mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', mb: 1 }}>Байланыс</Typography>
        <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mb: 2 }} />
        <Typography sx={{ color: '#CBD5E1', fontSize: '0.92rem', mb: 0.5 }}>Тел.: 8 (727) 226 94 10 (вн. 118)</Typography>
        <Typography sx={{ color: '#CBD5E1', fontSize: '0.92rem', mb: 0.5 }}>Email: cim@kazniisa.kz</Typography>
        <Typography sx={{ color: '#94A3B8', fontSize: '0.85rem' }}>3 шағынауданы 44А, Алматы қ.</Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 3 }}>
        <Link href="/qaz/centres/center-for-science-and-digitalization-of-construction/projects" style={{ color: BLUE, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', borderBottom: '2px solid ' + BLUE, paddingBottom: 1 }}>
          Жобалар →
        </Link>
        <Link href="/qaz/centres" style={{ color: NAVY, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', borderBottom: '2px solid ' + BORDER, paddingBottom: 1 }}>
          ← Орталықтар
        </Link>
      </Box>
    </Box>
  );
}
