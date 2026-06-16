'use client';
import {
  Typography, Box, Grid,
  Table, TableBody, TableCell, TableHead, TableRow,
} from '@mui/material';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const markerTypes = [
  { type: 'Газ', color: '#EAB308', colorName: 'Жёлтый', freq: '83.0 кГц', apwa: 'Gas' },
  { type: 'Электричество', color: '#EF4444', colorName: 'Красный', freq: '169.8 кГц', apwa: 'Electric' },
  { type: 'Телеком', color: '#F97316', colorName: 'Оранжевый', freq: '101.4 кГц', apwa: 'Telecom' },
  { type: 'Общий', color: '#A855F7', colorName: 'Фиолетовый', freq: '66.35 кГц', apwa: 'General' },
  { type: 'Водопровод', color: '#3B82F6', colorName: 'Синий', freq: '145.7 кГц', apwa: 'Water' },
  { type: 'Канализация', color: '#22C55E', colorName: 'Зелёный', freq: '121.6 кГц', apwa: 'Sewer' },
  { type: 'Кабельное ТВ', color: '#78716C', colorName: 'Оранжевый+чёрный', freq: '77.0 кГц', apwa: 'Cable TV' },
];

export default function ResearchPage() {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Инновационные исследования
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Договор № 1558 от 29 декабря 2015 года
      </Typography>

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        В рамках договора № 1558 от 29 декабря 2015 года КазНИИСА реализует разработки в области
        электронного маркирования подземных инженерных коммуникаций. Применение пассивных электронных маркеров
        позволяет точно определять местоположение подземных трубопроводов, кабелей и других объектов
        инфраструктуры без вскрытия грунта.
      </Typography>

      <Typography
        variant="h5"
        sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}
      >
        Оборудование
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
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
              Маркер 3M™ 1421 XRiD
            </Typography>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
              Программируемый электронный маркер ёмкостью <strong>192 бита</strong>.
              Пассивное устройство, не требующее источника питания. Обеспечивает хранение информации
              об объекте коммуникации на весь срок службы подземной инфраструктуры.
            </Typography>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mt: 1 }}>
              Технология 3M.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
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
              Прибор 3M™ 1420E EMS ID Marker Finder
            </Typography>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
              Портативный считыватель электронных маркеров. Позволяет обнаруживать, идентифицировать
              и считывать данные с маркеров 1421 XRiD на значительной глубине без проведения
              земляных работ, значительно сокращая затраты на обслуживание сетей.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Typography
        variant="h5"
        sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}
      >
        Типы маркеров по стандартам APWA
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        Каждый тип коммуникации имеет собственный цвет и рабочую частоту согласно стандартам
        Американской ассоциации публичных работ (APWA).
      </Typography>

      <Box sx={{ overflowX: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: NAVY }}>
              <TableCell sx={{ color: '#fff', fontWeight: 700 }}>Тип коммуникации</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 700 }}>Цвет маркера</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 700 }}>Частота</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 700 }}>APWA</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {markerTypes.map((m, i) => (
              <TableRow key={m.type} sx={{ bgcolor: i % 2 === 0 ? GRAY_BG : '#fff' }}>
                <TableCell sx={{ fontWeight: 600, color: NAVY }}>{m.type}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box
                      sx={{
                        width: 16,
                        height: 16,
                        borderRadius: '50%',
                        bgcolor: m.color,
                        border: '1px solid ' + BORDER,
                        flexShrink: 0,
                      }}
                    />
                    {m.colorName}
                  </Box>
                </TableCell>
                <TableCell sx={{ fontFamily: 'monospace', color: '#334155', fontWeight: 600 }}>
                  {m.freq}
                </TableCell>
                <TableCell sx={{ color: '#334155' }}>{m.apwa}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}
