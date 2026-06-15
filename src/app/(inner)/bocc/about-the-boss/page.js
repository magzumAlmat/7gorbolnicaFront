'use client';
import { Typography, Box, Grid, Divider } from '@mui/material';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

export default function AboutTheBoss() {
  return (
    <Box>
      <Typography variant="h3" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 1 }}>
        О БОСС
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 4 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        Организация занимается развитием сотрудничества между государствами для обеспечения безопасности при строительстве на сейсмоопасных территориях стран СНГ. Статус Базовой организации государств — участников СНГ по сейсмостойкому строительству (БОСС) присвоен АО «КазНИИСА» в 2019 году.
      </Typography>

      <Box
        sx={{
          borderLeft: '4px solid #F59E0B',
          pl: 3,
          py: 2,
          bgcolor: '#FAFAFA',
          fontStyle: 'italic',
          mb: 4,
        }}
      >
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          Решение Экономического совета СНГ от 21 июня 2019 года
        </Typography>
      </Box>

      <Typography variant="h5" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}>
        Руководство
      </Typography>
      <Divider sx={{ borderColor: AMBER, mb: 3 }} />

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[
          { name: 'Бегман Кульбаев', role: 'Председатель Базовой организации' },
          { name: 'Ералы Шокбаров', role: 'Заместитель председателя' },
          { name: 'Гани Темиралиулы', role: 'Секретарь' },
        ].map((person) => (
          <Grid item xs={12} sm={4} key={person.name}>
            <Box sx={{ p: 2, border: '1px solid #E2E8F0', borderRadius: 2 }}>
              <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1rem' }}>{person.name}</Typography>
              <Typography sx={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6 }}>{person.role}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}>
        Документы
      </Typography>
      <Divider sx={{ borderColor: AMBER, mb: 3 }} />

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

      <Typography variant="h5" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}>
        Состав наблюдательного совета
      </Typography>
      <Divider sx={{ borderColor: AMBER, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        В состав Базовой организации входят 13 представителей от стран СНГ: Казахстан, Армения, Беларусь, Кыргызстан, Молдавия, Россия, Таджикистан, Туркменистан и Узбекистан.
      </Typography>

      <Typography variant="h5" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}>
        Направления деятельности
      </Typography>
      <Divider sx={{ borderColor: AMBER, mb: 3 }} />

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

      <Typography variant="h5" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}>
        Проведённые мероприятия
      </Typography>
      <Divider sx={{ borderColor: AMBER, mb: 3 }} />

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
