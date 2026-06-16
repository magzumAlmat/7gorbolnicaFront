'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, Paper, Collapse, IconButton, Grid } from '@mui/material';
import { ExpandMore, HelpOutline } from '@mui/icons-material';

const faqs = [
  {
    q: 'Как заказать техническое обследование здания?',
    a: 'Для заказа технического обследования здания необходимо подать заявку через форму обратной связи на сайте или позвонить в ближайший филиал. Наши специалисты свяжутся с вами для уточнения деталей и формирования коммерческого предложения.',
  },
  {
    q: 'Какие документы нужны для проведения экспертизы?',
    a: 'Для проведения экспертизы потребуются: техническое задание, проектная документация объекта, правоустанавливающие документы на здание или сооружение, а также результаты предыдущих обследований (при наличии).',
  },
  {
    q: 'Сколько времени занимает разработка нормативного документа?',
    a: 'Сроки разработки нормативного документа зависят от его сложности и объёма. В среднем процесс занимает от 3 до 12 месяцев, включая этапы разработки, согласования, публичного обсуждения и утверждения.',
  },
  {
    q: 'Как получить сертификат о повышении квалификации?',
    a: 'Корпоративный университет КазНИИСА предлагает программы повышения квалификации для специалистов строительной отрасли. После успешного прохождения курса и сдачи итоговой аттестации выдаётся сертификат государственного образца.',
  },
  {
    q: 'Какие услуги предоставляет Центр BIM и цифровизации?',
    a: 'Центр науки и цифровизации строительства предоставляет услуги по внедрению BIM-технологий, разработке информационных моделей зданий, обучению специалистов работе с BIM-инструментами и консультированию по цифровизации строительных процессов.',
  },
  {
    q: 'Есть ли у КазНИИСА филиалы в регионах?',
    a: 'Да, помимо головного офиса в Алматы, АО «КазНИИСА» имеет филиалы в Астане, Таразе и Усть-Каменогорске. Контактные данные филиалов представлены в разделе «Контакты» на нашем сайте.',
  },
];

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <Paper
      elevation={0}
      sx={{
        border: '1px solid',
        borderColor: isOpen ? '#0891B2' : '#e2e8f0',
        borderRadius: 2.5,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        bgcolor: isOpen ? 'rgba(8,145,178,0.03)' : 'white',
        '&:hover': { borderColor: '#0891B2' },
      }}
    >
      <Box
        onClick={onToggle}
        sx={{
          p: 2.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          gap: 2,
        }}
      >
        <Typography sx={{ fontWeight: 600, color: '#0C2340', fontSize: { xs: 14, md: 15 }, lineHeight: 1.5, flex: 1 }}>
          {q}
        </Typography>
        <IconButton
          size="small"
          sx={{
            bgcolor: isOpen ? '#0891B2' : '#f1f5f9',
            color: isOpen ? 'white' : '#64748b',
            transition: 'all 0.3s',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            flexShrink: 0,
            '&:hover': { bgcolor: isOpen ? '#0e7490' : '#e2e8f0' },
          }}
        >
          <ExpandMore fontSize="small" />
        </IconButton>
      </Box>
      <Collapse in={isOpen} timeout={300}>
        <Box sx={{ px: 2.5, pb: 2.5 }}>
          <Typography sx={{ color: '#475569', fontSize: 14, lineHeight: 1.7 }}>
            {a}
          </Typography>
        </Box>
      </Collapse>
    </Paper>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#F8FAFC' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="flex-start">
          <Grid item xs={12} md={4}>
            <Box sx={{ position: { md: 'sticky' }, top: { md: 100 } }}>
              <Box sx={{
                width: 56, height: 56, borderRadius: 3,
                bgcolor: '#0891B214', display: 'flex',
                alignItems: 'center', justifyContent: 'center', mb: 3,
              }}>
                <HelpOutline sx={{ color: '#0891B2', fontSize: 28 }} />
              </Box>
              <Typography variant="overline" sx={{ color: '#0891B2', fontWeight: 700, letterSpacing: 3, fontSize: 13 }}>
                FAQ
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, color: '#0C2340', mt: 1, mb: 2, fontSize: { xs: '1.6rem', md: '2rem' } }}>
                Часто задаваемые вопросы
              </Typography>
              <Typography sx={{ color: '#64748b', lineHeight: 1.7, fontSize: 15 }}>
                Ответы на самые популярные вопросы о деятельности АО «КазНИИСА» и наших услугах.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  q={faq.q}
                  a={faq.a}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
