'use client';
import { Typography, Box, Grid, Divider } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const offices = [
  {
    city: 'Офис Алматы №1',
    address: '3 микрорайон 44А, г. Алматы',
    phone: '8 (727) 226 94 10',
    email: 'info@kazniisa.kz',
    hours: 'Пн-Пт 9:00-18:30, обед 13:00-14:30',
    contact: 'Қапезова Тоғжан Болатқанқызы',
    contactRole: 'Пресс-секретарь',
    contactPhone: '8 (727) 226 94 10, 11',
    contactEmail: 't.kapezova@kazniisa.kz',
  },
  {
    city: 'Офис Алматы №2',
    address: 'Ул. Сатпаева 88Г, г. Алматы',
    phone: '8 (727) 338 30 22',
    email: 'info@kazniisa.kz',
    hours: 'Пн-Пт 9:00-18:30, обед 13:00-14:30',
    contact: 'Қапезова Тоғжан Болатқанқызы',
    contactRole: 'Пресс-секретарь',
  },
  {
    city: 'Южно-Казахстанский филиал (Тараз)',
    address: 'ул. Сулейманова, 19 Б, г. Тараз, 080000',
    phone: '+7 (7262) 43-63-99',
    email: 'yko@kazniisa.kz',
    hours: 'Пн-Пт 9:00-18:30, обед 13:00-14:30',
    contact: 'Пак Наталия Александровна',
    contactRole: 'Ст. инженер',
    contactPhone: '+7 777 745 4709',
  },
  {
    city: 'Восточно-Казахстанский филиал (Усть-Каменогорск)',
    address: 'ул. М. Горького, 21, оф. 203, г. Усть-Каменогорск, 070004',
    phone: '8 (7232) 26-16-90',
    email: 'vko@kazniisa.kz',
    hours: 'Пн-Пт 9:00-18:30, обед 13:00-14:30',
    contact: 'Амангелдинова Анель',
    contactPhone: '+7 777 633 9420',
  },
  {
    city: 'Филиал в Астане',
    address: 'р-н Сарыарқа, ул. Бейбітшілік 14, БЦ «MARDEN», оф. 1406, г. Астана, 010000',
    phone: '8 (7172) 57-53-03',
    email: 'crn@kazniisa.kz',
    hours: 'Пн-Пт 9:00-18:30, обед 13:00-14:30',
    contact: 'Бикеева Айжан',
    contactRole: 'Главный специалист',
  },
];

export default function ContactsPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Контакты
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        АО «КазНИИСА» имеет головной офис в Алматы и филиалы в Таразе, Усть-Каменогорске и Астане.
        Обращайтесь в ближайший офис по любым вопросам сотрудничества, экспертизы и нормативной документации.
      </Typography>

      <Grid container spacing={3}>
        {offices.map((office, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Box sx={{
              p: 3, border: '1px solid ' + BORDER, borderRadius: '6px',
              height: '100%', boxSizing: 'border-box',
              bgcolor: i === 0 ? BLUE_LIGHT : 'white',
              borderLeft: i === 0 ? '4px solid ' + BLUE : undefined,
              transition: 'box-shadow 0.2s ease',
              '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)' },
            }}>
              <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1.05rem', mb: 2 }}>
                {office.city}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
                <LocationOnIcon sx={{ color: BLUE, fontSize: 18, mt: 0.3 }} />
                <Typography sx={{ fontSize: '0.92rem', lineHeight: 1.6, color: '#334155' }}>{office.address}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                <PhoneIcon sx={{ color: BLUE, fontSize: 18 }} />
                <Typography sx={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>{office.phone}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                <EmailIcon sx={{ color: BLUE, fontSize: 18 }} />
                <Typography sx={{ fontSize: '0.92rem', color: '#334155' }}>{office.email}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <AccessTimeIcon sx={{ color: BLUE, fontSize: 18 }} />
                <Typography sx={{ fontSize: '0.92rem', color: GRAY_TEXT }}>{office.hours}</Typography>
              </Box>

              {office.contact && (
                <Box sx={{ pt: 1.5, borderTop: '1px solid ' + BORDER }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                    <PersonIcon sx={{ color: BLUE, fontSize: 18 }} />
                    <Typography sx={{ fontWeight: 600, color: NAVY, fontSize: '0.88rem' }}>
                      {office.contact}
                    </Typography>
                  </Box>
                  {office.contactRole && (
                    <Typography sx={{ fontSize: '0.8rem', color: GRAY_TEXT, ml: 3.5 }}>{office.contactRole}</Typography>
                  )}
                  {office.contactPhone && (
                    <Typography sx={{ fontSize: '0.8rem', color: '#334155', ml: 3.5, mt: 0.3 }}>
                      тел. {office.contactPhone}
                    </Typography>
                  )}
                  {office.contactEmail && (
                    <Typography sx={{ fontSize: '0.8rem', color: '#334155', ml: 3.5, mt: 0.3 }}>
                      {office.contactEmail}
                    </Typography>
                  )}
                </Box>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 5 }} />

      <Box sx={{ bgcolor: NAVY, borderRadius: '6px', p: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', mb: 2 }}>
          Корпоративный секретарь-омбудсмен
        </Typography>
        <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mb: 2 }} />
        <Typography sx={{ color: '#CBD5E1', fontSize: '1rem', fontWeight: 600, mb: 0.5 }}>
          Суханкулов Нуркен Кунанбаевич
        </Typography>
        <Typography sx={{ color: '#94A3B8', fontSize: '0.9rem', mb: 0.3 }}>
          тел. +7 701 747 68 30
        </Typography>
        <Typography sx={{ color: '#94A3B8', fontSize: '0.9rem' }}>
          nsukhankulov@mail.ru
        </Typography>
      </Box>
    </Box>
  );
}
