'use client';

import { Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQPage() {
  const faqs = [
    { q: 'Как получить консультацию по сейсмостойкости?', a: 'Вы можете обратиться в наш Центр сейсмостойкости по телефону или через форму обратной связи на странице контактов.' },
    { q: 'Где найти актуальные строительные нормы?', a: 'Нормативные документы доступны в разделе «Центр нормирования» или на официальном портале нормативно-технических документов.' },
    { q: 'Как записаться на курсы BIM?', a: 'Запись на обучение проводится через Корпоративный университет АО «КазНИИСА».' },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        Вопросы и ответы
      </Typography>
      
      <Box sx={{ mt: 2 }}>
        {faqs.map((faq, i) => (
          <Accordion key={i} elevation={0} sx={{ border: '1px solid #eee', mb: 1, '&:before': { display: 'none' } }}>
            <AccordionSummary expandMoreIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={700} color="#002e5b">{faq.q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">{faq.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}
