'use client';
import {
  Typography, Box, Grid, Divider,
  Table, TableBody, TableCell, TableHead, TableRow,
} from '@mui/material';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

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
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Инновационные исследования
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 2 }} />

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
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 2 }}
      >
        Оборудование
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 1 }}
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
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 1 }}
          >
            Прибор 3M™ 1420E EMS ID Marker Finder
          </Typography>
          <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
            Портативный считыватель электронных маркеров. Позволяет обнаруживать, идентифицировать
            и считывать данные с маркеров 1421 XRiD на значительной глубине без проведения
            земляных работ, значительно сокращая затраты на обслуживание сетей.
          </Typography>
        </Grid>
      </Grid>

      <Typography
        variant="h5"
        sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 2 }}
      >
        Типы маркеров по стандартам APWA
      </Typography>
      <Divider sx={{ mb: 2 }} />
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
              <TableRow key={m.type} sx={{ bgcolor: i % 2 === 0 ? '#F8FAFC' : '#fff' }}>
                <TableCell sx={{ fontWeight: 600, color: NAVY }}>{m.type}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box
                      sx={{
                        width: 16,
                        height: 16,
                        borderRadius: '50%',
                        bgcolor: m.color,
                        border: '1px solid #E2E8F0',
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
