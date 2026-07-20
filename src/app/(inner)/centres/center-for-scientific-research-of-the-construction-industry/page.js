'use client';
import { Typography, Box, Divider } from '@mui/material';
import ScienceIcon from '@mui/icons-material/Science';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Link from 'next/link';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const BORDER = '#E2E8F0';

const goals = [
  'Проведение научно-исследовательских работ и инновационных исследований в строительной отрасли Республики Казахстан с привлечением ученых и практиков страны',
  'Создание условий для инновационной деятельности, распространения и реализации научно-технических и технологических знаний прикладного характера, полученных в результате научных исследований',
  'Поиск партнеров и установление долгосрочных отношений с предприятиями и организациями, а также содействие внедрению наукоемких разработок на внутренние и зарубежные рынки; аналитические исследования; разработка методов исследований и технологии их применения; разработка научно-исследовательских программ',
  'Подготовка заявок на участие в конкурсах по грантовому финансированию научных исследований',
  'Переработка строительных норм и правил в целях гармонизации отечественных норм с международными нормами и стандартами; экспериментальные и теоретические исследования зданий, сооружений, конструкций и строительных материалов; разработка методических указаний, инструкций, пособий и др. нормативных документов; расчеты зданий и сооружений и анализ результатов, разработка новых конструктивных решений',
  'Разработка Технических Условий (в развитие нормативной документации) и выполнение научно-технического сопровождения на стадии проектирования',
  'Анализ проектных решений и составление заключений',
  'Разработка и анализ методов усиления (восстановления конструкций) зданий',
  'Оказание инжиниринговых услуг проектным и строительным организациям в сфере обследования технического состояния зданий и сооружений, расчету несущих конструкций, разработке рекомендаций по усилению и восстановлению строительных конструкций',
  'Создание программно-аппаратного обеспечения для экспериментально-теоретических исследований',
];

export default function CenterForScientificResearchOfTheConstructionIndustryPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Центр научных исследований строительной отрасли
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Box sx={{ bgcolor: BLUE_LIGHT, border: '1px solid ' + BORDER, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 2.5, mb: 3 }}>
        <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: BLUE, textTransform: 'uppercase', letterSpacing: '0.05em', mb: 0.5 }}>
          Руководитель
        </Typography>
        <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1rem' }}>
          Лапин Владимир Алексеевич
        </Typography>
        <Typography sx={{ color: '#334155', fontSize: '0.9rem', mt: 0.25 }}>
          Ученый секретарь
        </Typography>
        <Typography sx={{ color: '#64748B', fontSize: '0.85rem', mt: 0.5, lineHeight: 1.6 }}>
          Кандидат технических наук, член-корреспондент Международной инженерной академии.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1.5, bgcolor: BLUE_LIGHT, borderRadius: '6px' }}>
          <ScienceIcon sx={{ color: BLUE, fontSize: 20 }} />
          <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.9rem' }}>Служба Ученого Секретаря</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1.5, bgcolor: BLUE_LIGHT, borderRadius: '6px' }}>
          <AssignmentIcon sx={{ color: BLUE, fontSize: 20 }} />
          <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.9rem' }}>10 направлений деятельности</Typography>
        </Box>
      </Box>

      <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 2 }}>
        Основные цели и задачи Службы Ученого Секретаря
      </Typography>
      {goals.map((g, i) => (
        <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
          <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: BLUE, mt: '9px', flexShrink: 0 }} />
          <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#334155' }}>{g}</Typography>
        </Box>
      ))}

      <Divider sx={{ my: 4 }} />

      <Box sx={{ bgcolor: NAVY, borderRadius: '6px', p: 4, mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', mb: 1 }}>Контакты центра</Typography>
        <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mb: 2 }} />
        <Typography sx={{ color: '#CBD5E1', fontSize: '0.92rem', mb: 0.5 }}>Email: vlapin@kazniisa.kz</Typography>
        <Typography sx={{ color: '#CBD5E1', fontSize: '0.92rem', mb: 0.5 }}>Тел.: 8 (727) 392-68-96</Typography>
        <Typography sx={{ color: '#94A3B8', fontSize: '0.85rem' }}>г. Алматы, ул. Солодовникова 21, кабинет 22</Typography>
      </Box>

      <Link href="/centres" style={{ color: NAVY, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', borderBottom: '2px solid ' + BORDER, paddingBottom: 1 }}>
        ← Все центры
      </Link>
    </Box>
  );
}
