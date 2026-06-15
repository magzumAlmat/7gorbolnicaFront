'use client';
import { Typography, Box, Grid, Divider, Table, TableBody, TableCell, TableRow } from '@mui/material';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

const offices = [
  {
    title: 'Офис Алматы №1 — Главный офис',
    address: '3 микрорайон, д. 44А, г. Алматы',
    phone: '8 (727) 226 94 10',
    email: 'info@kazniisa.kz',
    hours: 'Пн–Пт: 9:00 – 18:30, обед 13:00 – 14:30',
    contact: 'Пресс-секретарь: Қапезова Тоғжан Болатқанқызы',
    primary: true,
  },
  {
    title: 'Офис Алматы №2',
    address: 'ул. Сатпаева, 88Г, г. Алматы',
    phone: '8 (727) 338 30 22',
    email: 'info@kazniisa.kz',
    hours: 'Пн–Пт: 9:00 – 18:30, обед 13:00 – 14:30',
  },
  {
    title: 'Южно-Казахстанский филиал — Тараз',
    address: 'ул. Сулейманова, 19Б, г. Тараз',
    phone: '+7 (7262) 43-63-99',
    email: 'yko@kazniisa.kz',
    hours: 'Пн–Пт: 9:00 – 18:30, обед 13:00 – 14:30',
    contact: 'Контактное лицо: Пак Наталия Александровна',
  },
  {
    title: 'Восточно-Казахстанский филиал — Усть-Каменогорск',
    address: 'ул. М. Горького, 21, оф. 203, г. Усть-Каменогорск',
    phone: '8 (7232) 26-16-90',
    email: 'vko@kazniisa.kz',
    hours: 'Пн–Пт: 9:00 – 18:30, обед 13:00 – 14:30',
  },
  {
    title: 'Астанинский филиал — Астана',
    address: 'р-н Сарыарқа, ул. Бейбітшілік, 14, оф. 1406, г. Астана',
    phone: '8 (7172) 57-53-03',
    email: 'crn@kazniisa.kz',
    hours: 'Пн–Пт: 9:00 – 18:30, обед 13:00 – 14:30',
  },
];

export default function KontaktyPage() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          fontFamily: '"Exo 2", sans-serif',
          fontWeight: 800,
          color: NAVY,
          mb: 1,
        }}
      >
        Контакты
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 2 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4, maxWidth: 760 }}>
        АО «КазНИИСА» располагает сетью офисов в ключевых городах Казахстана. Головной офис
        находится в Алматы. Региональные филиалы охватывают юг, восток и столицу страны.
        Единый режим работы всех офисов: <strong>понедельник–пятница, 9:00–18:30</strong>,
        обеденный перерыв 13:00–14:30.
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {offices.map((office, i) => (
          <Box key={i}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Exo 2", sans-serif',
                fontWeight: 700,
                color: office.primary ? NAVY : '#1E293B',
                mb: 0.5,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              {office.primary && (
                <Box
                  component="span"
                  sx={{
                    display: 'inline-block',
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    bgcolor: AMBER,
                    flexShrink: 0,
                  }}
                />
              )}
              {office.title}
            </Typography>

            <Table size="small" sx={{ maxWidth: 680, '& td': { border: 'none', py: 0.6, px: 0 } }}>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ width: 140, color: '#94A3B8', fontSize: '0.85rem', fontWeight: 600, verticalAlign: 'top' }}>
                    Адрес
                  </TableCell>
                  <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
                    {office.address}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ color: '#94A3B8', fontSize: '0.85rem', fontWeight: 600 }}>
                    Телефон
                  </TableCell>
                  <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
                    <a href={`tel:${office.phone.replace(/\s|-/g, '')}`} style={{ color: NAVY, textDecoration: 'none', fontWeight: 600 }}>
                      {office.phone}
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ color: '#94A3B8', fontSize: '0.85rem', fontWeight: 600 }}>
                    E-mail
                  </TableCell>
                  <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
                    <a href={`mailto:${office.email}`} style={{ color: NAVY, textDecoration: 'none', fontWeight: 600 }}>
                      {office.email}
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ color: '#94A3B8', fontSize: '0.85rem', fontWeight: 600 }}>
                    Режим работы
                  </TableCell>
                  <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
                    {office.hours}
                  </TableCell>
                </TableRow>
                {office.contact && (
                  <TableRow>
                    <TableCell sx={{ color: '#94A3B8', fontSize: '0.85rem', fontWeight: 600 }}>
                      Контакт
                    </TableCell>
                    <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
                      {office.contact}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>

            {i < offices.length - 1 && <Divider sx={{ mt: 3 }} />}
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          borderLeft: '4px solid #F59E0B',
          pl: 3,
          py: 2,
          bgcolor: '#FAFAFA',
          mt: 5,
          fontStyle: 'italic',
        }}
      >
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
          По вопросам, не связанным с конкретным филиалом, направляйте обращения на общий адрес{' '}
          <a href="mailto:info@kazniisa.kz" style={{ color: NAVY, fontWeight: 700, textDecoration: 'none' }}>
            info@kazniisa.kz
          </a>
          . Ответ предоставляется в течение 5 рабочих дней.
        </Typography>
      </Box>
    </Box>
  );
}
