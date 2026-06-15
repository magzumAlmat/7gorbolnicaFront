'use client';
import { Typography, Box, Grid, Divider } from '@mui/material';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

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
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Учёный секретарь
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 2 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        Учёный секретарь КазНИИСА обеспечивает организационную и документационную поддержку научной
        деятельности института. Осуществляет координацию между научными подразделениями, руководством
        и Учёным советом, а также взаимодействие с внешними научными и государственными организациями.
      </Typography>

      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 2 }}
      >
        Обязанности
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={4} sx={{ mb: 4 }}>
        {duties.map((d, i) => (
          <Grid item xs={12} md={4} key={d.title}>
            <Typography
              variant="h6"
              sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 1 }}
            >
              {i + 1}. {d.title}
            </Typography>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
              {d.desc}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ mb: 3 }} />

      <Box
        sx={{
          borderLeft: '4px solid #F59E0B',
          pl: 3,
          py: 2,
          bgcolor: '#FAFAFA',
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
