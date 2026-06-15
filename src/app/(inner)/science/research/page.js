'use client';
import { Typography, Box, Paper, Grid, Chip, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

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
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: '#0F172A' }}>
        Инновационные исследования
      </Typography>
      <Chip label="Договор № 1558 от 29.12.2015" sx={{ bgcolor: '#0369A1', color: '#fff', mb: 3, fontWeight: 600 }} />

      <Typography sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#334155', mb: 4 }}>
        В рамках договора № 1558 от 29 декабря 2015 года КазНИИСА реализует разработки в области
        электронного маркирования подземных инженерных коммуникаций. Применение пассивных электронных маркеров
        позволяет точно определять местоположение подземных трубопроводов, кабелей и других объектов
        инфраструктуры без вскрытия грунта.
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 2, border: '1px solid #E2E8F0', height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <SignalCellularAltIcon sx={{ color: '#0369A1' }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A' }}>
                Маркер 3M™ 1421 XRiD
              </Typography>
            </Box>
            <Typography sx={{ color: '#334155', lineHeight: 1.7, mb: 2 }}>
              Программируемый электронный маркер ёмкостью <strong>192 бита</strong>.
              Пассивное устройство, не требующее источника питания. Обеспечивает хранение информации
              об объекте коммуникации на весь срок службы подземной инфраструктуры.
            </Typography>
            <Chip label="Технология 3M" sx={{ bgcolor: '#EFF6FF', color: '#0369A1', fontWeight: 600 }} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 2, border: '1px solid #E2E8F0', height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <ElectricBoltIcon sx={{ color: '#F59E0B' }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A' }}>
                Прибор 3M™ 1420E EMS ID Marker Finder
              </Typography>
            </Box>
            <Typography sx={{ color: '#334155', lineHeight: 1.7 }}>
              Портативный считыватель электронных маркеров. Позволяет обнаруживать, идентифицировать
              и считывать данные с маркеров 1421 XRiD на значительной глубине без проведения
              земляных работ, значительно сокращая затраты на обслуживание сетей.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#0F172A' }}>
        Типы маркеров по стандартам APWA
      </Typography>
      <Typography sx={{ color: '#64748B', mb: 3, fontSize: '0.95rem' }}>
        Каждый тип коммуникации имеет собственный цвет и рабочую частоту согласно стандартам
        Американской ассоциации публичных работ (APWA).
      </Typography>

      <Paper sx={{ borderRadius: 2, overflow: 'hidden', border: '1px solid #E2E8F0' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: '#0F172A' }}>
              <TableCell sx={{ color: '#fff', fontWeight: 700 }}>Тип коммуникации</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 700 }}>Цвет маркера</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 700 }}>Частота</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 700 }}>APWA</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {markerTypes.map((m, i) => (
              <TableRow key={m.type} sx={{ bgcolor: i % 2 === 0 ? '#F8FAFC' : '#fff' }}>
                <TableCell sx={{ fontWeight: 600, color: '#0F172A' }}>{m.type}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 16, height: 16, borderRadius: '50%', bgcolor: m.color, border: '1px solid #E2E8F0', flexShrink: 0 }} />
                    {m.colorName}
                  </Box>
                </TableCell>
                <TableCell sx={{ fontFamily: 'monospace', color: '#0369A1', fontWeight: 600 }}>{m.freq}</TableCell>
                <TableCell sx={{ color: '#64748B' }}>{m.apwa}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}
