'use client';
import { Typography, Box, Grid, Divider, Table, TableBody, TableRow, TableCell } from '@mui/material';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

const members = [
  'Азербайджан',
  'Армения',
  'Беларусь',
  'Казахстан (секретариат — АО «КазНИИСА»)',
  'Киргизия',
  'Молдавия',
  'Россия',
  'Таджикистан',
  'Туркмения',
  'Узбекистан',
  'Украина',
];

export default function BoccPage() {
  return (
    <Box>
      <Box
        component="img"
        src="/images/kazniisa/logo.webp"
        alt="КазНИИСА"
        sx={{ height: 56, objectFit: 'contain', mb: 2, display: 'block' }}
      />
      <Typography variant="h3" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 0 }}>
        БОСС — Базовая организация в сейсмостойком строительстве СНГ
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, mt: 1, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        БОСС (Базовая организация стран СНГ в области сейсмостойкого строительства) — межгосударственная
        структура, созданная под руководством АО «КазНИИСА». Объединяет 11 государств-членов Содружества
        Независимых Государств с целью выработки единых подходов к развитию сейсмостойкого строительства
        на постсоветском пространстве.
      </Typography>

      <Box sx={{ borderLeft: '4px solid #F59E0B', pl: 3, py: 2, bgcolor: '#FAFAFA', mb: 4 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          Главная цель БОСС — создать единый подход к развитию сейсмостойкого строительства в
          странах СНГ, при котором государства-участники совместно используют испытательные базы
          и научные результаты, исключая дублирование дорогостоящих исследований.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Functions */}
      <Typography variant="h5" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}>
        Функции организации
      </Typography>
      <Box component="ul" sx={{ pl: 3, m: 0, mb: 4 }}>
        {[
          'Координация экспериментальных и научных исследований в области сейсмостойкого строительства',
          'Совместный анализ устойчивости строительных конструкций при сейсмических воздействиях',
          'Обеспечение единой платформы сотрудничества для учёных и специалистов стран-участниц',
          'Разработка унифицированных межгосударственных строительных норм в области сейсмостойкости',
          'Обмен результатами испытаний и совместное использование экспериментальных стендов',
          'Формирование общей базы знаний об особенностях сейсмических воздействий в регионе',
          'Подготовка рекомендаций по сейсмическому районированию и категорированию территорий',
          'Гармонизация национальных норм сейсмостойкого строительства с международными стандартами',
        ].map((f, i) => (
          <Box component="li" key={i} sx={{ mb: 1 }}>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>{f}</Typography>
          </Box>
        ))}
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Members */}
      <Typography variant="h5" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}>
        Государства-участники
      </Typography>
      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        В состав БОСС входят 11 государств — членов СНГ:
      </Typography>
      <Grid container spacing={1} sx={{ mb: 4 }}>
        {members.map((m, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, py: 0.5 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: AMBER, mt: '10px', flexShrink: 0 }} />
              <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>{m}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ mb: 4 }} />

      {/* Scientific cooperation */}
      <Typography variant="h5" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}>
        Научное сотрудничество
      </Typography>
      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Государства-участники БОСС ведут совместные исследования в следующих направлениях:
      </Typography>
      <Table sx={{ mb: 4, border: '1px solid #E2E8F0' }}>
        <TableBody>
          {[
            ['Сейсмическое микрорайонирование', 'Детальное картирование сейсмической опасности для конкретных площадок строительства'],
            ['Динамика сооружений', 'Изучение реакции зданий и конструкций на сейсмические нагрузки, разработка расчётных моделей'],
            ['Испытания конструкций', 'Натурные и стендовые испытания строительных конструкций на сейсмических платформах'],
            ['Нормирование', 'Разработка межгосударственных норм и правил проектирования сейсмостойких зданий'],
            ['Мониторинг', 'Инструментальный мониторинг зданий и сооружений в сейсмически активных зонах'],
          ].map(([area, desc], i) => (
            <TableRow key={i} sx={{ '&:nth-of-type(odd)': { bgcolor: '#F8FAFC' } }}>
              <TableCell sx={{ fontWeight: 700, color: NAVY, width: '35%', verticalAlign: 'top', py: 1.5 }}>{area}</TableCell>
              <TableCell sx={{ color: '#334155', fontSize: '0.97rem', lineHeight: 1.8, py: 1.5 }}>{desc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Box sx={{ borderLeft: '4px solid #F59E0B', pl: 3, py: 2, bgcolor: '#FAFAFA' }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          АО «КазНИИСА» выполняет функции секретариата БОСС, обеспечивая организационно-техническое
          сопровождение деятельности организации: ведение архива нормативных документов, координацию
          рабочих групп и подготовку материалов заседаний.
        </Typography>
      </Box>
    </Box>
  );
}
