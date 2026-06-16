'use client';
import { Typography, Box, Grid, Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import ScienceIcon from '@mui/icons-material/Science';
import Link from 'next/link';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const services = [
  { title: 'Экспериментальные исследования', desc: 'Статические и вибродинамические испытания строительных конструкций. Более 60 вибродинамических испытаний выполнено в 2005–2019 гг.' },
  { title: 'Оперативное обследование', desc: 'Обследование зданий, пострадавших от землетрясений и техногенных катастроф, оценка пригодности к дальнейшей эксплуатации.' },
  { title: 'Оценка сейсмостойкости', desc: 'Комплексная оценка сейсмостойкости существующих зданий с разработкой рекомендаций по усилению конструкций.' },
  { title: 'Расчётные работы', desc: 'Разработка конструктивных решений, расчёт несущих конструкций на различные виды нагрузок, включая сейсмические воздействия.' },
  { title: 'Нормативная деятельность', desc: 'Совершенствование нормативно-технических документов в области сейсмостойкого строительства Казахстана.' },
  { title: 'Специальные технические условия', desc: 'Разработка СТУ для объектов повышенной этажности в сейсмичных зонах (9+ баллов).' },
];

const stats = [
  { value: '55', label: 'сотрудников' },
  { value: '9', label: 'с учёными степенями' },
  { value: '29', label: 'аттестованных экспертов по тех. обследованию' },
  { value: '4', label: 'лаборатории' },
  { value: '10', label: 'секторов' },
  { value: '17', label: 'натурных испытаний зданий' },
];

export default function SeismicCenterPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Центр сейсмостойкости, обследования зданий и сооружений
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Центр создан в 2010 году для координации работ в области сейсмостойкого строительства.
        Организация известна развитием науки сейсмостойкого строительства, основанной на инженерной
        сейсмологии и динамике сооружений.
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4, p: 2, bgcolor: BLUE_LIGHT, borderRadius: '6px', borderLeft: '4px solid ' + BLUE }}>
        <PersonIcon sx={{ color: BLUE, fontSize: 22 }} />
        <Box>
          <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.95rem' }}>Алдахов Еркен Сериков</Typography>
          <Typography sx={{ fontSize: '0.82rem', color: GRAY_TEXT }}>Директор центра</Typography>
        </Box>
      </Box>

      <Grid container spacing={2} sx={{ mb: 5 }}>
        {stats.map((s, i) => (
          <Grid item xs={6} sm={4} md={2} key={i}>
            <Box sx={{ textAlign: 'center', p: 2, bgcolor: GRAY_BG, borderRadius: '6px', border: '1px solid ' + BORDER }}>
              <Typography sx={{ fontWeight: 800, fontSize: '1.8rem', color: BLUE, lineHeight: 1 }}>{s.value}</Typography>
              <Typography sx={{ fontSize: '0.72rem', color: GRAY_TEXT, mt: 0.5, lineHeight: 1.3 }}>{s.label}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 3 }}>
        Услуги центра
      </Typography>

      <Grid container spacing={3} sx={{ mb: 5 }}>
        {services.map((s, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Box sx={{ p: 2.5, border: '1px solid ' + BORDER, borderRadius: '6px', height: '100%', transition: 'box-shadow 0.2s', '&:hover': { boxShadow: '0 4px 16px rgba(0,0,0,0.06)' } }}>
              <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.95rem', mb: 1 }}>{s.title}</Typography>
              <Typography sx={{ fontSize: '0.92rem', lineHeight: 1.8, color: '#334155' }}>{s.desc}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ mb: 4 }} />

      <Box sx={{ bgcolor: NAVY, borderRadius: '6px', p: 4, mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', mb: 1 }}>Экспериментальная база</Typography>
        <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mb: 2 }} />
        <Typography sx={{ color: '#CBD5E1', fontSize: '1rem', lineHeight: 1.9, mb: 1 }}>
          Специальный экспериментальный стенд — двухэтажный стальной каркас размером 6×6×6,6 м
          для проведения натурных динамических испытаний строительных конструкций.
        </Typography>
        <Typography sx={{ color: '#94A3B8', fontSize: '0.88rem', lineHeight: 1.8 }}>
          17 натурных испытаний построенных зданий в Алматы, Шымкенте и Капшагае.
          Более 60 вибродинамических испытаний конструкций в период 2005–2019 гг.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Link href="/centres" style={{ color: NAVY, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', borderBottom: '2px solid ' + BLUE, paddingBottom: 1 }}>
          ← Все центры
        </Link>
      </Box>
    </Box>
  );
}
