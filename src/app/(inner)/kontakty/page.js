'use client';
import { Typography, Box, Paper, Grid, List, ListItem, ListItemIcon, ListItemText, Divider, Chip } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const offices = [
  {
    city: 'Алматы',
    label: 'Главный офис',
    highlight: true,
    address: '3 микрорайон, д. 44А',
    hours: 'Пн–Пт: 9:00 – 18:30',
    email: 'info@kazniisa.kz',
    phones: ['8 (727) 226 94 10'],
  },
  {
    city: 'Алматы',
    label: 'Офис №2',
    address: 'ул. Сатпаева, 88Г',
    hours: 'Пн–Пт: 9:00 – 18:00',
    email: 'info@kazniisa.kz',
    phones: ['8 (727) 338 30 22'],
  },
  {
    city: 'Тараз',
    label: 'Южный филиал',
    address: 'ул. Сулейманова, 19Б',
    hours: 'Пн–Пт: 9:00 – 18:00',
    email: 'yko@kazniisa.kz',
    phones: ['+7 (7262) 43-63-99'],
  },
  {
    city: 'Усть-Каменогорск',
    label: 'Восточный филиал',
    address: 'ул. М. Горького, 21',
    hours: 'Пн–Пт: 9:00 – 18:00',
    email: 'vko@kazniisa.kz',
    phones: ['8 (7232) 26-16-90'],
  },
  {
    city: 'Астана',
    label: 'Столичный филиал',
    address: 'ул. Бейбітшілік, 14',
    hours: 'Пн–Пт: 9:00 – 18:00',
    email: 'crn@kazniisa.kz',
    phones: ['8 (7172) 57-53-03'],
  },
];

export default function KontaktyPage() {
  return (
    <Box>
      <Paper
        elevation={0}
        sx={{
          background: 'linear-gradient(135deg, #0F172A 0%, #0369A1 100%)',
          color: '#fff',
          borderRadius: 3,
          p: { xs: 3, md: 5 },
          mb: 4,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <LocationOnIcon sx={{ fontSize: 40 }} />
          <Chip label="5 офисов по Казахстану" sx={{ bgcolor: '#F59E0B', color: '#0F172A', fontWeight: 700 }} />
        </Box>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
          Контакты
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.9, maxWidth: 680 }}>
          КазНИИСА располагает сетью офисов по всему Казахстану. Выберите ближайший офис
          для обращения или воспользуйтесь общим адресом электронной почты.
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        {offices.map((office, i) => (
          <Grid item xs={12} sm={6} md={i === 0 ? 12 : 6} key={i}>
            <Paper
              elevation={2}
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                height: '100%',
                border: office.highlight ? '2px solid #0369A1' : '1px solid #E2E8F0',
              }}
            >
              <Box
                sx={{
                  bgcolor: office.highlight ? '#0369A1' : '#0F172A',
                  px: 3, py: 1.5,
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#fff' }}>
                  {office.city}
                </Typography>
                <Chip
                  label={office.label}
                  size="small"
                  sx={{
                    bgcolor: office.highlight ? '#F59E0B' : 'rgba(255,255,255,0.15)',
                    color: office.highlight ? '#0F172A' : '#fff',
                    fontWeight: 700,
                  }}
                />
              </Box>

              <Box sx={{ p: 3 }}>
                <Grid container spacing={office.highlight ? 3 : 0}>
                  <Grid item xs={12} md={office.highlight ? 4 : 12}>
                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start', mb: 2 }}>
                      <LocationOnIcon sx={{ color: '#0369A1', mt: 0.2, flexShrink: 0 }} />
                      <Box>
                        <Typography variant="caption" sx={{ color: '#94A3B8', textTransform: 'uppercase', fontWeight: 600 }}>
                          Адрес
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#0F172A' }}>
                          {office.address}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={office.highlight ? 4 : 12}>
                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start', mb: 2 }}>
                      <AccessTimeIcon sx={{ color: '#0369A1', mt: 0.2, flexShrink: 0 }} />
                      <Box>
                        <Typography variant="caption" sx={{ color: '#94A3B8', textTransform: 'uppercase', fontWeight: 600 }}>
                          Режим работы
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#0F172A' }}>
                          {office.hours}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={office.highlight ? 4 : 12}>
                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start', mb: 2 }}>
                      <PhoneIcon sx={{ color: '#0369A1', mt: 0.2, flexShrink: 0 }} />
                      <Box>
                        <Typography variant="caption" sx={{ color: '#94A3B8', textTransform: 'uppercase', fontWeight: 600 }}>
                          Телефон
                        </Typography>
                        {office.phones.map((p, j) => (
                          <Typography key={j} variant="body2" sx={{ fontWeight: 600, color: '#0F172A' }}>
                            <a href={`tel:${p.replace(/\s/g, '')}`} style={{ color: 'inherit', textDecoration: 'none' }}>{p}</a>
                          </Typography>
                        ))}
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                      <EmailIcon sx={{ color: '#0369A1', mt: 0.2, flexShrink: 0 }} />
                      <Box>
                        <Typography variant="caption" sx={{ color: '#94A3B8', textTransform: 'uppercase', fontWeight: 600 }}>
                          E-mail
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#0369A1' }}>
                          <a href={`mailto:${office.email}`} style={{ color: 'inherit' }}>{office.email}</a>
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper elevation={0} sx={{ mt: 3, p: 3, borderRadius: 3, bgcolor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0F172A', mb: 1 }}>
          Общие обращения
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Для общих вопросов и корреспонденции используйте e-mail{' '}
          <a href="mailto:info@kazniisa.kz" style={{ color: '#0369A1', fontWeight: 600 }}>info@kazniisa.kz</a>.
          По вопросам нормирования и стандартизации вы также можете обратиться по телефонам
          главного офиса в Алматы в рабочее время.
        </Typography>
      </Paper>
    </Box>
  );
}
