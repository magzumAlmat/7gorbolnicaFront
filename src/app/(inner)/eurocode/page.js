'use client';
import { Typography, Box, Grid, Table, TableBody, TableRow, TableCell } from '@mui/material';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

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
      <Box
        component="img"
        src="/images/kazniisa/eagle-sun.svg"
        alt="Герб Казахстана"
        sx={{ width: 80, height: 80, mb: 2, display: 'block' }}
      />
      <Typography variant="h3" sx={{ fontWeight: 800, color: NAVY, mb: 0 }}>
        Еврокоды в Казахстане
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        Еврокоды — единый комплекс европейских технических стандартов проектирования зданий и
        сооружений, разработанных Европейской организацией по стандартизации (CEN) на протяжении
        более 30 лет. Казахстан перешёл на применение Еврокодов с 2020 года. КазНИИСА является
        ведущим научным центром страны по адаптации и внедрению этих стандартов.
      </Typography>

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 4 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          Еврокоды применяются в более чем 45 странах мира. С 2016 года АО «КазНИИСА» является
          наблюдателем в технических комитетах CEN/ТК 250 (конструкции) и CEN/ТК 340 (сейсмостойкость),
          что позволяет участвовать в разработке и обновлении стандартов на международном уровне.
        </Typography>
      </Box>

      {/* Why eurocodes */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Причины перехода на Еврокоды
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />
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

      {/* Characteristics */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Ключевые характеристики
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />
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
            <Box sx={{ borderLeft: '4px solid ' + BLUE, bgcolor: BLUE_LIGHT, borderRadius: '0 6px 6px 0', pl: 2, py: 1.5, height: '100%', transition: 'box-shadow 0.2s ease, transform 0.2s ease', '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' } }}>
              <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1rem', mb: 0.5 }}>{c.title}</Typography>
              <Typography sx={{ fontSize: '0.97rem', lineHeight: 1.8, color: '#334155' }}>{c.desc}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Eurocode series */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Серия стандартов EN 1990–1999
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />
      <Table sx={{ mb: 4, border: '1px solid ' + BORDER, borderRadius: '6px', overflow: 'hidden' }}>
        <TableBody>
          {eurocodes.map((ec, i) => (
            <TableRow key={i} sx={{ '&:nth-of-type(odd)': { bgcolor: GRAY_BG } }}>
              <TableCell sx={{ fontWeight: 700, color: NAVY, width: '22%', py: 1.5 }}>{ec.code}</TableCell>
              <TableCell sx={{ color: '#334155', fontSize: '0.97rem', py: 1.5 }}>{ec.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* KazNIISA activities */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Деятельность КазНИИСА в области Еврокодов
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />
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

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          Особое внимание уделяется адаптации EN 1998 (сейсмостойкость) с учётом высокой сейсмической
          активности территории Казахстана и богатого отечественного опыта проектирования в сложных
          сейсмических условиях.
        </Typography>
      </Box>
    </Box>
  );
}
