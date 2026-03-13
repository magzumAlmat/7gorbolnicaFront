'use client';

import { Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

export default function HistoryPage() {
  const milestones = [
    { year: '1931', title: 'Основание института', desc: 'Институт был создан как Казахский филиал Всесоюзного института сооружений.' },
    { year: '1956', title: 'Развитие сейсмостойкого строительства', desc: 'Начало широкомасштабных исследований в области сейсмостойкости зданий в Казахстане.' },
    { year: '2015', title: 'Цифровизация', desc: 'Внедрение технологий информационного моделирования (BIM) в нормирование и проектирование.' },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        История КазНИИСА
      </Typography>
      
      <Typography variant="body1" paragraph>
        История АО «КазНИИСА» — это история развития строительной науки Казахстана. За десятилетия работы 
        институтом были разработаны тысячи проектов и сотни нормативных документов.
      </Typography>

      <Box sx={{ mt: 4 }}>
        {milestones.map((item, index) => (
          <Accordion key={index} elevation={0} sx={{ border: '1px solid #eee', mb: 1 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography sx={{ fontWeight: 700, color: '#2887B6', mr: 2 }}>{item.year}</Typography>
              <Typography fontWeight={600}>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ bgcolor: '#fafafa' }}>
              <Typography variant="body2" sx={{ lineHeight: 1.6 }}>{item.desc}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}
