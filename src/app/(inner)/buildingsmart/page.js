'use client';
import { Typography, Box, Grid, Divider } from '@mui/material';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

export default function BuildingSmartPage() {
  return (
    <Box>
      {/* Header */}
      <Box component="img" src="/images/kazniisa/buildingsmart-logo.webp" alt="buildingSMART logo" sx={{ height: 48, objectFit: 'contain', mb: 2, display: 'block' }} />
      <Typography variant="h3" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 0 }}>
        buildingSMART Казахстан
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, mt: 1, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        buildingSMART Казахстан — официальный представитель buildingSMART International в Республике
        Казахстан. Это профессиональное сообщество экспертов, проектировщиков, строителей и
        заказчиков, объединённых общей целью — внедрением BIM (Building Information Modeling) и
        ТИМСО (Технологии информационного моделирования строительных объектов) в строительную
        отрасль страны. Организация создана в начале 2024 года.
      </Typography>

      <Box sx={{ borderLeft: '4px solid #F59E0B', pl: 3, py: 2, bgcolor: '#FAFAFA', mb: 4 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          Миссия: создание инновационной и устойчивой строительной отрасли Казахстана через широкое
          внедрение технологий информационного моделирования на всех этапах жизненного цикла
          строительных объектов — от проектирования до эксплуатации и сноса.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Goals */}
      <Typography variant="h5" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}>
        Цели организации
      </Typography>
      <Box component="ul" sx={{ pl: 3, m: 0, mb: 4 }}>
        {[
          'Адаптация международных BIM-стандартов к условиям и нормативной базе Казахстана',
          'Продвижение цифровизации строительной отрасли на государственном и корпоративном уровнях',
          'Формирование национальной экосистемы BIM — от университетов до крупных девелоперов',
          'Внедрение открытых форматов обмена данными (openBIM) в проектные и строительные организации',
          'Представление интересов казахстанских специалистов на международной арене',
          'Подготовка кадров в области BIM и цифрового строительства',
        ].map((g, i) => (
          <Box component="li" key={i} sx={{ mb: 1 }}>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>{g}</Typography>
          </Box>
        ))}
      </Box>

      {/* Tasks */}
      <Typography variant="h5" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}>
        Задачи
      </Typography>
      <Box component="ul" sx={{ pl: 3, m: 0, mb: 4 }}>
        {[
          'Локализация и адаптация стандарта IFC и других openBIM-форматов для применения в РК',
          'Представление Казахстана в международных структурах buildingSMART International',
          'Организация обучения и сертификации специалистов по международным программам',
          'Создание платформы диалога между государственными органами, университетами и бизнесом',
          'Разработка рекомендаций и методических материалов по внедрению ТИМСО',
        ].map((t, i) => (
          <Box component="li" key={i} sx={{ mb: 1 }}>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>{t}</Typography>
          </Box>
        ))}
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Certification */}
      <Typography variant="h5" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}>
        Программа обучения и сертификации
      </Typography>
      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        buildingSMART Казахстан реализует программу{' '}
        <Box component="strong" sx={{ color: NAVY }}>
          BuildingSMART Professional Certification-Foundation «Basic»
        </Box>{' '}
        — базовую программу обучения в области технологий информационного моделирования. Программа
        ориентирована на специалистов, начинающих работу с BIM и openBIM-стандартами, и охватывает
        ключевые концепции, форматы данных и процессы информационного моделирования.
      </Typography>
      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        Сертификат программы признаётся в более чем 20 странах мира, что открывает выпускникам
        возможности для работы на международных проектах. В 2021 году КазНИИСА получил право на
        проведение обучения по программам buildingSMART. В начале 2024 года официально создан
        казахстанский чаптер buildingSMART International.
      </Typography>

      {/* Standards */}
      <Divider sx={{ mb: 4 }} />
      <Typography variant="h5" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}>
        Стандарты openBIM
      </Typography>
      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        buildingSMART Kazakhstan продвигает применение открытых нейтральных форматов и стандартов
        обмена данными в строительстве:
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {[
          { code: 'IFC', desc: 'Industry Foundation Classes — открытый формат хранения и обмена данными о строительном объекте' },
          { code: 'IDS', desc: 'Information Delivery Specification — спецификация требований к составу информации' },
          { code: 'BCF', desc: 'BIM Collaboration Format — формат совместной работы и передачи замечаний' },
          { code: 'bSDD', desc: 'buildingSMART Data Dictionary — единый словарь строительных терминов и классификаторов' },
          { code: 'UCM', desc: 'Use Case Management — управление сценариями применения BIM' },
        ].map((s) => (
          <Grid item xs={12} sm={6} key={s.code}>
            <Box sx={{ borderLeft: `3px solid ${AMBER}`, pl: 2, py: 0.5 }}>
              <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1rem' }}>{s.code}</Typography>
              <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#334155' }}>{s.desc}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ mb: 4 }} />

      {/* About bSI */}
      <Typography variant="h5" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}>
        buildingSMART International
      </Typography>
      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        buildingSMART International — глобальная некоммерческая организация, основанная в 1995 году.
        Объединяет более 30 национальных отделений (чаптеров) по всему миру. Организация разрабатывает
        и поддерживает открытые стандарты обмена данными о строительных объектах, в первую очередь
        формат IFC.
      </Typography>
      <Box sx={{ borderLeft: '4px solid #F59E0B', pl: 3, py: 2, bgcolor: '#FAFAFA', mb: 2 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          Видение buildingSMART International: беспрепятственный обмен достоверной цифровой информацией
          об объектах на протяжении всего их жизненного цикла — от идеи до сноса.
        </Typography>
      </Box>
    </Box>
  );
}
