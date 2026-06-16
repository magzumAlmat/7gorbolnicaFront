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

const branches = [
  {
    name: 'Головной офис — Алматы №1',
    address: '3 микрорайон 44А, г. Алматы',
    zip: '',
    phone: '8 (727) 226 94 10',
    email: 'info@kazniisa.kz',
    hours: 'Пн-Пт 9:00-18:30, обед 13:00-14:30',
    director: null,
    desc: 'Головной офис АО «КазНИИСА» — административный центр, научные лаборатории, Центр науки и цифровизации.',
    main: true,
  },
  {
    name: 'Офис Алматы №2',
    address: 'Ул. Сатпаева 88Г, г. Алматы',
    zip: '',
    phone: '8 (727) 338 30 22',
    email: 'info@kazniisa.kz',
    hours: 'Пн-Пт 9:00-18:30, обед 13:00-14:30',
    director: null,
    desc: 'Центр сейсмостойкости, Центр типового проектирования, Корпоративный университет.',
  },
  {
    name: 'Южно-Казахстанский филиал (Тараз)',
    address: 'ул. Сулейманова, 19 Б, г. Тараз',
    zip: '080000',
    phone: '+7 (7262) 43-63-99',
    email: 'yko@kazniisa.kz',
    hours: 'Пн-Пт 9:00-18:30, обед 13:00-14:30',
    director: 'Байтемиров Мухан Назарович',
    directorRole: 'Директор филиала',
    desc: 'Обследование зданий, проектные работы и экспертиза в Жамбылской, Туркестанской и Кызылординской областях.',
  },
  {
    name: 'Восточно-Казахстанский филиал (Усть-Каменогорск)',
    address: 'ул. М. Горького, 21, оф. 203, г. Усть-Каменогорск',
    zip: '070004',
    phone: '8 (7232) 26-16-90',
    email: 'vko@kazniisa.kz',
    hours: 'Пн-Пт 9:00-18:30, обед 13:00-14:30',
    director: 'Бегимханова Асфира Акзамовна',
    directorRole: 'Директор филиала',
    desc: 'Обследование зданий, испытания стройматериалов в Восточно-Казахстанской и Абайской областях.',
  },
  {
    name: 'Филиал в Астане',
    address: 'ул. Бейбитшилик, 14, БЦ «MARDEN», оф. 1406, г. Астана',
    zip: '010000',
    phone: '+7 (7172) 57-53-03',
    email: 'crn@kazniisa.kz',
    hours: 'Пн-Пт 9:00-18:30, обед 13:00-14:30',
    director: 'Хасен Арман Ақылбекұлы',
    directorRole: 'Руководитель филиала',
    desc: 'Центр нормирования в строительстве, мониторинг цен на стройматериалы, разработка сметных нормативов.',
  },
];

export default function BranchesPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Филиалы и офисы
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        АО «КазНИИСА» имеет два офиса в Алматы и три региональных филиала, обеспечивая
        покрытие всех регионов Казахстана — от запада до востока страны.
      </Typography>

      {branches.map((b, i) => (
        <Box key={i} sx={{ mb: 4 }}>
          <Box sx={{
            p: 3, border: '1px solid ' + BORDER, borderRadius: '6px',
            bgcolor: b.main ? BLUE_LIGHT : 'white',
            borderLeft: b.main ? '4px solid ' + BLUE : undefined,
            transition: 'box-shadow 0.2s',
            '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)' },
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 1, mb: 2 }}>
              <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1.1rem' }}>{b.name}</Typography>
              {b.zip && (
                <Typography sx={{ fontSize: '0.75rem', color: GRAY_TEXT, bgcolor: '#F1F5F9', px: 1.5, py: 0.3, borderRadius: '4px' }}>
                  {b.zip}
                </Typography>
              )}
            </Box>

            <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#334155', mb: 2 }}>{b.desc}</Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                  <LocationOnIcon sx={{ color: BLUE, fontSize: 18, mt: 0.3 }} />
                  <Typography sx={{ fontSize: '0.88rem', color: '#334155' }}>{b.address}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <PhoneIcon sx={{ color: BLUE, fontSize: 18 }} />
                  <Typography sx={{ fontSize: '0.88rem', color: '#334155', fontWeight: 600 }}>{b.phone}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <EmailIcon sx={{ color: BLUE, fontSize: 18 }} />
                  <Typography sx={{ fontSize: '0.88rem', color: '#334155' }}>{b.email}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <AccessTimeIcon sx={{ color: BLUE, fontSize: 18 }} />
                  <Typography sx={{ fontSize: '0.88rem', color: GRAY_TEXT }}>{b.hours}</Typography>
                </Box>
              </Grid>
            </Grid>

            {b.director && (
              <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid ' + BORDER, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <PersonIcon sx={{ color: BLUE, fontSize: 20 }} />
                <Box>
                  <Typography sx={{ fontWeight: 600, color: NAVY, fontSize: '0.9rem' }}>{b.director}</Typography>
                  <Typography sx={{ fontSize: '0.78rem', color: GRAY_TEXT }}>{b.directorRole}</Typography>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
