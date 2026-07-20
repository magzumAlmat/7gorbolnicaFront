'use client';
import { Typography, Box, Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const services = [
  { title: 'Ғимараттар мен құрылыстардың конструкцияларын эксперименттік және теориялық зерттеу', desc: 'Статикалық және вибродинамикалық сынақтар.' },
  { title: 'Жер сілкінісінен зардап шеккен объектілерді жедел тексеру', desc: 'Жер сілкінісі, техногендік зілзалалар мен апаттар салдарынан зардап шеккен ғимараттар мен құрылыстарды жедел тексеру.' },
  { title: 'Қолданыстағы ғимараттардың сейсмикаға төзімділігін зерттеу', desc: 'Қолданыстағы құрылыс ғимараттарының сейсмикаға төзімділігін зерттеу және бағалау, нығайту ұсынымдарымен.' },
  { title: 'Есептеу және жаңа құрылымдық шешімдер әзірлеу', desc: 'Ғимараттарды есептеу және ғимараттар мен құрылыстардың жаңа құрылымдық шешімдерін әзірлеу.' },
  { title: 'Нормативтік-техникалық құжаттарды әзірлеу', desc: 'Нормативтік-техникалық құжаттарды әзірлеу және жетілдіру.' },
  { title: 'Жоғары объектілер үшін техникалық шарттар', desc: 'Жоғары қабатты объектілерді, сондай-ақ сейсмикалық 9 және одан жоғары балл алаңдарында орналасқан объектілерді жобалауға техникалық шарттарды әзірлеу.' },
];

export default function SeismicCenterPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Сейсмикаға төзімділік, ғимараттар мен құрылыстарды тексеру орталығы
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        СҒҚТО тарихи тұрғыдан сейсмикаға төзімді құрылыс саласындағы үздік қазақстандық ғалымдар мен ғылыми
        зерттеулердің орталығына айналды.
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4, p: 2, bgcolor: BLUE_LIGHT, borderRadius: '6px', borderLeft: '4px solid ' + BLUE }}>
        <PersonIcon sx={{ color: BLUE, fontSize: 22 }} />
        <Box>
          <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.95rem' }}>Алдахов Еркен Серикович</Typography>
          <Typography sx={{ fontSize: '0.82rem', color: GRAY_TEXT }}>Директор – сейсмикалық төзімділік, ғимараттар мен құрылыстарды тексеру орталығы</Typography>
        </Box>
      </Box>

      <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 3 }}>
        Орталық қызметтері
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

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Link href="/qaz/centres" style={{ color: NAVY, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', borderBottom: '2px solid ' + BLUE, paddingBottom: 1 }}>
          ← Орталықтар
        </Link>
      </Box>
    </Box>
  );
}
