import React from 'react';
import { Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

export default function UslugiPage() {
  return (
    <Box>
      <Typography variant="body1" paragraph>
        Клиника оказывает широкий спектр медицинских услуг в рамках ОСМС, ГОБМП, а также на платной основе.
      </Typography>
      <Box sx={{ mt: 3 }}>
        {[
          { title: 'Консультация специалистов', content: 'Прием ведут врачи высшей категории по всем направлениям.' },
          { title: 'Лабораторная диагностика', content: 'Более 500 видов анализов в собственной лаборатории.' },
          { title: 'Инструментальная диагностика', content: 'МРТ, КТ, УЗИ экспертного класса.' },
        ].map((item, index) => (
          <Accordion key={index} elevation={0} sx={{ '&:before': { display: 'none' }, borderBottom: '1px solid #eee' }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography sx={{ fontWeight: 600 }}>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">{item.content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}