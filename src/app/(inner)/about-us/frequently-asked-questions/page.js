'use client';
import { Typography, Box, Paper, Chip, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const NAVY = '#0F172A';
const ACCENT = '#0369A1';
const AMBER = '#F59E0B';
const BG = '#F8FAFC';

const sections = [
  {
    section: 'BIM-центр',
    color: ACCENT,
    faqs: [
      { q: 'Что такое BIM-центр КазНИИСА?', a: 'BIM-центр — подразделение института, занимающееся внедрением технологий информационного моделирования зданий (BIM) в проектную и строительную практику Казахстана.' },
      { q: 'Какие услуги предоставляет BIM-центр?', a: 'Разработка BIM-моделей, обучение специалистов, консультации по стандартам OpenBIM, сопровождение проектов.' },
    ],
  },
  {
    section: 'Корпоративный университет',
    color: '#7C3AED',
    faqs: [
      { q: 'Какие программы обучения доступны?', a: 'Повышение квалификации инженеров-строителей, курсы по BIM, сейсмостойкому строительству, нормативному регулированию в строительстве.' },
      { q: 'Выдаются ли удостоверения?', a: 'Да, по завершении курсов выдаются удостоверения установленного образца, признаваемые в Республике Казахстан.' },
    ],
  },
  {
    section: 'Научно-исследовательский центр',
    color: '#059669',
    faqs: [
      { q: 'Чем занимается НИЦ?', a: 'Проводит прикладные исследования в области строительных материалов, конструкций, сейсмологии и информационных технологий в строительстве.' },
      { q: 'Как заказать научное исследование?', a: 'Обратитесь в отдел договорных работ по электронной почте или телефону, указав тему и техническое задание.' },
    ],
  },
  {
    section: 'Техническое регулирование',
    color: '#DC2626',
    faqs: [
      { q: 'Участвует ли КазНИИСА в разработке нормативов?', a: 'Да, институт активно участвует в разработке и актуализации строительных норм и правил Республики Казахстан.' },
      { q: 'Где можно ознакомиться с актуальными нормативами?', a: 'На официальных ресурсах Министерства промышленности и строительства РК и на сайте КазНИИСА.' },
    ],
  },
  {
    section: 'Ценообразование в строительстве',
    color: '#D97706',
    faqs: [
      { q: 'Что делает центр ценообразования?', a: 'Осуществляет мониторинг цен на строительные материалы, работы и услуги, разрабатывает сметные нормативы.' },
      { q: 'Как получить данные мониторинга цен?', a: 'Данные публикуются ежеквартально и доступны по запросу через официальные каналы института.' },
    ],
  },
  {
    section: 'Проектный центр',
    color: '#0891B2',
    faqs: [
      { q: 'Какие проекты выполняет институт?', a: 'Гражданское, промышленное и жилищное строительство, проекты в сейсмоопасных зонах, реконструкция существующих объектов.' },
      { q: 'Работает ли институт по государственным контрактам?', a: 'Да, КазНИИСА является аккредитованным исполнителем государственных заказов в сфере строительного проектирования.' },
    ],
  },
];

export default function FaqPage() {
  return (
    <Box>
      <Chip label="FAQ" size="small" sx={{ bgcolor: AMBER, color: NAVY, fontWeight: 700, mb: 1.5, fontFamily: '"Roboto Mono", monospace' }} />
      <Typography variant="h4" sx={{ fontWeight: 800, color: NAVY, mb: 1, fontFamily: '"Exo 2", sans-serif' }}>
        Часто задаваемые вопросы
      </Typography>
      <Box sx={{ width: 60, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 4 }} />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {sections.map((sec, si) => (
          <Box key={si}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box sx={{ width: 4, height: 24, bgcolor: sec.color, borderRadius: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontFamily: '"Exo 2", sans-serif' }}>
                {sec.section}
              </Typography>
            </Box>
            {sec.faqs.map((faq, fi) => (
              <Accordion key={fi} elevation={0} disableGutters sx={{ border: '1px solid #E2E8F0', borderRadius: '12px !important', mb: 1.5, '&:before': { display: 'none' }, bgcolor: BG }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: sec.color }} />} sx={{ px: 2.5 }}>
                  <Typography sx={{ fontWeight: 600, color: NAVY, fontSize: '0.95rem' }}>{faq.q}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 2.5, pt: 0, pb: 2 }}>
                  <Typography sx={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.7 }}>{faq.a}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
