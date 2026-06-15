'use client';
import { Typography, Box, Grid, Divider, Table, TableBody, TableRow, TableCell } from '@mui/material';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

const eurocodes = [
  { code: 'EN 1990', title: 'Основы проектирования конструкций' },
  { code: 'EN 1991', title: 'Воздействия на конструкции' },
  { code: 'EN 1992', title: 'Проектирование железобетонных конструкций' },
  { code: 'EN 1993', title: 'Проектирование стальных конструкций' },
  { code: 'EN 1994', title: 'Проектирование сталежелезобетонных конструкций' },
  { code: 'EN 1995', title: 'Проектирование деревянных конструкций' },
  { code: 'EN 1996', title: 'Проектирование каменных конструкций' },
  { code: 'EN 1997', title: 'Геотехническое проектирование' },
  { code: 'EN 1998', title: 'Проектирование сейсмостойких конструкций' },
  { code: 'EN 1999', title: 'Проектирование алюминиевых конструкций' },
];

export default function EurocodePage() {
  return (
    <Box>
      <Typography variant="h3" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 0 }}>
        Еврокоды в Казахстане
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, mt: 1, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        Еврокоды — единый комплекс европейских технических стандартов проектирования зданий и
        сооружений, разработанных Европейской организацией по стандартизации (CEN) на протяжении
        более 30 лет. Казахстан перешёл на применение Еврокодов с 2020 года. КазНИИСА является
        ведущим научным центром страны по адаптации и внедрению этих стандартов.
      </Typography>

      <Box sx={{ borderLeft: '4px solid #F59E0B', pl: 3, py: 2, bgcolor: '#FAFAFA', mb: 4 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          Еврокоды применяются в более чем 45 странах мира. С 2016 года АО «КазНИИСА» является
          наблюдателем в технических комитетах CEN/ТК 250 (конструкции) и CEN/ТК 340 (сейсмостойкость),
          что позволяет участвовать в разработке и обновлении стандартов на международном уровне.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Why eurocodes */}
      <Typography variant="h5" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}>
        Причины перехода на Еврокоды
      </Typography>
      <Box component="ul" sx={{ pl: 3, m: 0, mb: 4 }}>
        {[
          'Обеспечение надёжности, функциональности и долговечности строительных конструкций на основе передовых методов расчёта',
          'Повышение конкурентоспособности казахстанских проектных и строительных организаций на международном рынке',
          'Параметрический метод нормирования, допускающий гибкость при учёте местных условий через Национальные приложения',
          'Упрощение совместной работы с зарубежными специалистами и привлечение иностранных инвестиций',
          'Интеграция в единое нормативное техническое пространство Европы и ряда стран СНГ',
        ].map((r, i) => (
          <Box component="li" key={i} sx={{ mb: 1 }}>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>{r}</Typography>
          </Box>
        ))}
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Characteristics */}
      <Typography variant="h5" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}>
        Ключевые характеристики
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[
          {
            title: 'Универсальность',
            desc: 'Охватывают все типы строительных конструкций: бетонные, стальные, деревянные, каменные, алюминиевые, а также геотехнику и сейсмостойкость.',
          },
          {
            title: 'Гибкость',
            desc: 'Национальные приложения позволяют учитывать климатические, сейсмические и геологические особенности каждой страны без нарушения единства стандарта.',
          },
          {
            title: 'Прогрессивность',
            desc: 'Базируются на передовых научно-технических достижениях, регулярно обновляются с учётом новых исследований и инженерной практики.',
          },
        ].map((c) => (
          <Grid item xs={12} sm={4} key={c.title}>
            <Box sx={{ borderLeft: `3px solid ${AMBER}`, pl: 2, py: 0.5, height: '100%' }}>
              <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1rem', mb: 0.5 }}>{c.title}</Typography>
              <Typography sx={{ fontSize: '0.97rem', lineHeight: 1.8, color: '#334155' }}>{c.desc}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ mb: 4 }} />

      {/* Eurocode series */}
      <Typography variant="h5" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}>
        Серия стандартов EN 1990–1999
      </Typography>
      <Table sx={{ mb: 4, border: '1px solid #E2E8F0' }}>
        <TableBody>
          {eurocodes.map((ec, i) => (
            <TableRow key={i} sx={{ '&:nth-of-type(odd)': { bgcolor: '#F8FAFC' } }}>
              <TableCell sx={{ fontWeight: 700, color: NAVY, width: '22%', py: 1.5 }}>{ec.code}</TableCell>
              <TableCell sx={{ color: '#334155', fontSize: '0.97rem', py: 1.5 }}>{ec.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Divider sx={{ mb: 4 }} />

      {/* KazNIISA activities */}
      <Typography variant="h5" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}>
        Деятельность КазНИИСА в области Еврокодов
      </Typography>
      <Box component="ul" sx={{ pl: 3, m: 0, mb: 4 }}>
        {[
          'Перевод и адаптация текстов Еврокодов на русский и казахский языки',
          'Разработка Национальных приложений (National Annexes) с учётом климатических и сейсмических условий Казахстана',
          'Гармонизация Еврокодов с действующими национальными нормами (СП РК)',
          'Участие в техническом комитете ТК 32 «Строительство» по внедрению EN-стандартов',
          'Подготовка специалистов и проведение семинаров по применению Еврокодов',
          'Сотрудничество с европейскими комитетами CEN/TC 250 и CEN/TC 340 в качестве наблюдателя',
        ].map((a, i) => (
          <Box component="li" key={i} sx={{ mb: 1 }}>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>{a}</Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ borderLeft: '4px solid #F59E0B', pl: 3, py: 2, bgcolor: '#FAFAFA' }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          Особое внимание уделяется адаптации EN 1998 (сейсмостойкость) с учётом высокой сейсмической
          активности территории Казахстана и богатого отечественного опыта проектирования в сложных
          сейсмических условиях.
        </Typography>
      </Box>
    </Box>
  );
}
