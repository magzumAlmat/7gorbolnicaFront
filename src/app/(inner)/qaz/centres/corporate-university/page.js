'use client';
import { Typography, Box, Divider } from '@mui/material';
import Link from 'next/link';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const courses = [
  { title: 'Основы сейсмостойкого строительства' },
  { title: 'Применение строительных норм СН РК EN, идентичных Еврокодам в проектировании и строительстве зданий и сооружений' },
  { title: 'Геодезические работы в строительстве с применением новых технологи' },
  { title: 'Техника безопасности на производстве' },
  { title: 'Автоматизированные системы проектирования и расчета зданий и сооружений' },
  { title: 'Обучение работе с автоматизированными комплексами по расчету зданий и сооружений' },
  { title: 'Нормативная база строительной отрасли в условиях реформирования системы технического регулирования' },
  { title: 'Проблемы энергосбережения и энергоэффективности в строительной сфере Республики Казахстан' },
  { title: 'Расчеты строительных конструкций' },
];

export default function CorporateUniversityPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Корпоративтік университет
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Корпоративтік университет сейсмикалық қауіптілігі жоғары аудандарда және жаңа еуропалық техникалық
        реттеу жүйесі бойынша жобалау, жобалау-іздестіру, сараптау және құрылыс-монтаждау ұйымдары саласында
        маманданған қызметкерлердің, ұйымдардың біліктілігін арттырумен және ИТҚ аттестаттауын өткізумен
        айналысады.
      </Typography>

      <Box sx={{ bgcolor: BLUE_LIGHT, border: '1px solid ' + BORDER, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 2.5, mb: 5 }}>
        <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1rem' }}>
          Оразбекова Найля Капановна
        </Typography>
        <Typography sx={{ fontSize: '0.85rem', color: GRAY_TEXT, mt: 0.5 }}>
          Директор - Корпоративный университет
        </Typography>
      </Box>

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 5 }}>
        <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#334155' }}>
          АО «КазНИИСА» аккредитовано Комитетом по делам строительства, жилищно-коммунального хозяйства и
          управления земельными ресурсами Министерства национальной экономики РК (далее КДС, ЖКХ и УЗР МНЭ РК)
          в качестве аттестационного центра по аттестации инженерно-технических работников участвующих в
          процессе проектирования и строительства.
        </Typography>
      </Box>

      <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 3 }}>
        Курстар
      </Typography>

      <Box sx={{ mb: 5 }}>
        {courses.map((c, i) => (
          <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
            <Typography sx={{ fontWeight: 800, fontSize: '0.8rem', color: BLUE, mt: '2px' }}>{String(i + 1).padStart(2, '0')}</Typography>
            <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#334155' }}>{c.title}</Typography>
          </Box>
        ))}
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ bgcolor: NAVY, borderRadius: '6px', p: 4, mb: 4 }}>
        <Typography sx={{ color: '#CBD5E1', fontSize: '0.9rem', lineHeight: 1.8, mb: 2 }}>
          «ҚазҚСҒЗИ» АҚ біліктілікті арттыру орталығында оқу жоспарларымен танысуға және барлық сұрақтарға
          жауап алуға болады
        </Typography>
        <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mb: 2 }} />
        <Typography sx={{ color: '#CBD5E1', fontSize: '0.92rem', mb: 0.5 }}>zhannet@kazniisa.kz</Typography>
        <Typography sx={{ color: '#CBD5E1', fontSize: '0.92rem', mb: 0.5 }}>8 (727) 338 30 22</Typography>
        <Typography sx={{ color: '#94A3B8', fontSize: '0.85rem' }}>Ул.Сатпаева 88Г г. Алматы</Typography>
      </Box>

      <Link href="/qaz/centres" style={{ color: NAVY, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', borderBottom: '2px solid ' + BORDER, paddingBottom: 1 }}>
        ← Орталықтар
      </Link>
    </Box>
  );
}
