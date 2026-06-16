'use client';
import { Typography, Box, Grid } from '@mui/material';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const duties = [
  { title: 'Подготовка заседаний', desc: 'Организационная подготовка заседаний Учёного совета: формирование повестки, сбор материалов, уведомление членов совета.' },
  { title: 'Документооборот', desc: 'Ведение протоколов и решений Учёного совета, хранение архива научной документации института.' },
  { title: 'Координация', desc: 'Взаимодействие с научными подразделениями, внешними организациями и государственными органами по вопросам научной деятельности.' },
];

export default function SecretaryPage() {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Учёный секретарь
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        Учёный секретарь КазНИИСА обеспечивает организационную и документационную поддержку научной
        деятельности института. Осуществляет координацию между научными подразделениями, руководством
        и Учёным советом, а также взаимодействие с внешними научными и государственными организациями.
      </Typography>

      <Typography
        variant="h5"
        sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}
      >
        Обязанности
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Grid container spacing={4} sx={{ mb: 4 }}>
        {duties.map((d, i) => (
          <Grid item xs={12} md={4} key={d.title}>
            <Box
              sx={{
                p: 3,
                border: '1px solid ' + BORDER,
                borderRadius: '6px',
                height: '100%',
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 800, color: NAVY, mb: 1 }}
              >
                {i + 1}. {d.title}
              </Typography>
              <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
                {d.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          bgcolor: BLUE_LIGHT,
          borderLeft: '4px solid ' + BLUE,
          borderRadius: '0 6px 6px 0',
          p: 3,
          fontStyle: 'italic',
        }}
      >
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          Для получения актуальной контактной информации об учёном секретаре и записи на консультацию
          обращайтесь в приёмную КазНИИСА по телефону или электронной почте, указанным в разделе «Контакты».
        </Typography>
      </Box>
    </Box>
  );
}
