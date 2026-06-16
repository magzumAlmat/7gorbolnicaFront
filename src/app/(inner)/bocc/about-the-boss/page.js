'use client';
import { Typography, Box, Grid } from '@mui/material';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

export default function AboutTheBoss() {
  return (
    <Box>
      <Typography variant="h3" sx={{ fontWeight: 800, color: NAVY, mb: 1 }}>
        О БОСС
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 4 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        Организация занимается развитием сотрудничества между государствами для обеспечения безопасности при строительстве на сейсмоопасных территориях стран СНГ. Статус Базовой организации государств — участников СНГ по сейсмостойкому строительству (БОСС) присвоен АО «КазНИИСА» в 2019 году.
      </Typography>

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 4 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          Решение Экономического совета СНГ от 21 июня 2019 года
        </Typography>
      </Box>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Руководство
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[
          { name: 'Бегман Кульбаев', role: 'Председатель Базовой организации' },
          { name: 'Ералы Шокбаров', role: 'Заместитель председателя' },
          { name: 'Гани Темиралиулы', role: 'Секретарь' },
        ].map((person) => (
          <Grid item xs={12} sm={4} key={person.name}>
            <Box sx={{
              p: 2,
              border: '1px solid ' + BORDER,
              borderRadius: '6px',
              transition: 'box-shadow 0.2s ease, transform 0.2s ease',
              '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
            }}>
              <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1rem' }}>{person.name}</Typography>
              <Typography sx={{ fontSize: '0.9rem', color: GRAY_TEXT, lineHeight: 1.6 }}>{person.role}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Документы
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Box component="ul" sx={{ pl: 3, mb: 4 }}>
        {[
          'Решение Экономического совета СНГ от 21 июня 2019',
          'Положение о Базовой организации',
          'План работы БОСС 2019–2020',
          'План работы БОСС 2021',
        ].map((doc) => (
          <Box component="li" key={doc} sx={{ mb: 1 }}>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>{doc}</Typography>
          </Box>
        ))}
      </Box>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Состав наблюдательного совета
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        В состав Базовой организации входят 13 представителей от стран СНГ: Казахстан, Армения, Беларусь, Кыргызстан, Молдавия, Россия, Таджикистан, Туркменистан и Узбекистан.
      </Typography>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Направления деятельности
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Box component="ul" sx={{ pl: 3, mb: 4 }}>
        {[
          'Подготовка и повышение квалификации кадров',
          'Совместные научные исследования',
          'Гармонизация нормативных документов',
          'Международные конференции и семинары',
          'Научные публикации',
        ].map((item) => (
          <Box component="li" key={item} sx={{ mb: 1 }}>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>{item}</Typography>
          </Box>
        ))}
      </Box>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Проведённые мероприятия
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Box component="ul" sx={{ pl: 3 }}>
        {[
          '1-е заседание: 13 ноября 2019 года, г. Алматы',
          '2-е заседание: 25 декабря 2020 года, г. Алматы',
        ].map((event) => (
          <Box component="li" key={event} sx={{ mb: 1 }}>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>{event}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
