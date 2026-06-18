'use client';
import { Typography, Box, Grid } from '@mui/material';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

export default function BuildingSmartPage() {
  return (
    <Box>
      {/* Header */}
      <Box component="img" src="/images/kazniisa/buildingsmart-logo.webp" alt="buildingSMART logo" sx={{ height: 48, objectFit: 'contain', mb: 2, display: 'block' }} />
      <Typography variant="h3" sx={{ fontWeight: 800, color: NAVY, mb: 0 }}>
        buildingSMART Казахстан
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        buildingSMART Казахстан — официальный представитель buildingSMART International в Республике
        Казахстан. Это профессиональное сообщество экспертов, проектировщиков, строителей и
        заказчиков, объединённых общей целью — внедрением BIM (Building Information Modeling) и
        ТИМСО (Технологии информационного моделирования строительных объектов) в строительную
        отрасль страны. Организация создана в начале 2024 года.
      </Typography>

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 4 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          Миссия: создание инновационной и устойчивой строительной отрасли Казахстана через широкое
          внедрение технологий информационного моделирования на всех этапах жизненного цикла
          строительных объектов — от проектирования до эксплуатации и сноса.
        </Typography>
      </Box>

      {/* BIM Gallery */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {['/images/kazniisa/bim-1.webp', '/images/kazniisa/bim-2.webp', '/images/kazniisa/bim-3.webp'].map((src, i) => (
          <Grid item xs={12} sm={4} key={i}>
            <Box
              component="img"
              src={src}
              alt={`BIM ${i + 1}`}
              sx={{ width: '100%', maxWidth: 340, borderRadius: '6px', display: 'block' }}
            />
          </Grid>
        ))}
      </Grid>

      {/* Goals */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Цели организации
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />
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
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Задачи
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />
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

      {/* Service images */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {[
          { src: '/images/kazniisa/service-spec-tech.webp', alt: 'Специальные технические условия' },
          { src: '/images/kazniisa/service-bim-integration.webp', alt: 'BIM-интеграция' },
          { src: '/images/kazniisa/service-ai-tech.webp', alt: 'AI-технологии' },
          { src: '/images/kazniisa/service-certification.webp', alt: 'Сертификация' },
          { src: '/images/kazniisa/service-bim-audit.webp', alt: 'BIM-аудит' },
        ].map((img, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box
              component="img"
              src={img.src}
              alt={img.alt}
              sx={{ width: '100%', maxWidth: 340, borderRadius: '6px', display: 'block' }}
            />
          </Grid>
        ))}
      </Grid>

      {/* Certification */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Программа обучения и сертификации
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />
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
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Стандарты openBIM
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />
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
            <Box sx={{ borderLeft: '3px solid ' + BLUE, pl: 2, py: 0.5 }}>
              <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1rem' }}>{s.code}</Typography>
              <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#334155' }}>{s.desc}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* About bSI */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        buildingSMART International
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />
      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        buildingSMART International — глобальная некоммерческая организация, основанная в 1995 году.
        Объединяет более 30 национальных отделений (чаптеров) по всему миру. Организация разрабатывает
        и поддерживает открытые стандарты обмена данными о строительных объектах, в первую очередь
        формат IFC.
      </Typography>
      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 4 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          Видение buildingSMART International: беспрепятственный обмен достоверной цифровой информацией
          об объектах на протяжении всего их жизненного цикла — от идеи до сноса.
        </Typography>
      </Box>

      {/* Membership benefits */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Преимущества вступления в сообщество buildingSMART Kazakhstan
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {[
          {
            title: 'Доступ к глобальной сети',
            desc: 'Участники получают официальный доступ к глобальному сообществу buildingSMART International и возможность взаимодействовать с экспертами более чем из 30 стран.',
          },
          {
            title: 'Обучение и сертификация',
            desc: 'Доступ к авторизованным обучающим программам и сертификациям, разработанным совместно с buildingSMART International.',
          },
          {
            title: 'Организационная поддержка',
            desc: 'Участники получают организационную, методическую и информационную поддержку, а также возможность продвигать технологии через платформу сообщества.',
          },
          {
            title: 'Профессиональная репутация',
            desc: 'Статус участника демонстрирует высокую цифровую зрелость и открытость к инновациям, укрепляя позиции в партнёрствах, тендерах и грантах.',
          },
        ].map((b) => (
          <Grid item xs={12} sm={6} key={b.title}>
            <Box sx={{ borderLeft: '3px solid ' + BLUE, pl: 2, py: 0.5 }}>
              <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1rem' }}>{b.title}</Typography>
              <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#334155' }}>{b.desc}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {[
          { label: 'Годы основания', value: '2024' },
          { label: 'Chapters Globally', value: '30+' },
          { label: 'Участники', value: 'Сообщество' },
          { label: 'Релизы проекта', value: 'openBIM' },
        ].map((s) => (
          <Grid item xs={6} sm={3} key={s.label}>
            <Box sx={{ bgcolor: GRAY_BG, border: '1px solid ' + BORDER, borderRadius: '6px', p: 2.5, textAlign: 'center' }}>
              <Typography sx={{ fontWeight: 800, color: BLUE, fontSize: '1.5rem', lineHeight: 1.2 }}>{s.value}</Typography>
              <Typography sx={{ fontSize: '0.85rem', color: GRAY_TEXT, mt: 0.5 }}>{s.label}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Library */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Библиотека документов
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />
      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Своды правил и нормативные документы Республики Казахстан в области информационного
        моделирования строительных объектов (ТИМСО):
      </Typography>
      <Box component="ul" sx={{ pl: 0, m: 0, mb: 4, listStyle: 'none' }}>
        {[
          { code: 'СП РК 1.02-111-2017', title: 'Применение информационного моделирования в проектной организации', url: 'https://drive.google.com/open?id=1MaGqPKN5qUfyRY55nVeCqdII4E8DcW8d' },
          { code: 'СП РК 1.02-112-2018', title: 'Жизненный цикл строительных объектов. Часть 1', url: 'https://drive.google.com/open?id=1rfIYziRKWyy6ETYYduOZI7QexN_ydEWu' },
          { code: 'СП РК 1.02-113-2018', title: 'Жизненный цикл строительных объектов. Часть 2', url: 'https://drive.google.com/open?id=1dlfGswdsYSxGO7S87M4BzM07V1kKdUne' },
          { code: 'СП РК 1.02-114-2018', title: 'Жизненный цикл строительных объектов. Часть 3', url: 'https://drive.google.com/open?id=1FYacgv7AzjD_cqGlgffz45r6zBx6AbVG' },
          { code: 'СП РК 1.02-115-2018', title: 'Правила организации совместного создания информации о строительстве', url: 'https://drive.google.com/open?id=1RYC6LHRGyxR6Ew6P4St-WViP_DDJpQHV' },
          { code: 'СП РК 1.02-116-2018', title: 'Требования к оформлению проектной документации', url: 'https://drive.google.com/open?id=10dw4NU530LW1vi51r8sRkxv9VVyWrbmn' },
          { code: 'СП РК 1.02-117-2018', title: 'Порядок проведения экспертизы информационных моделей', url: 'https://drive.google.com/open?id=1Ix20Hufw5BTtnFTqsSUxXds8NHsNpkca' },
          { code: 'СП РК', title: 'Жизненный цикл строительных объектов. Часть 4. Требования к моделям на стадии строительства', url: 'https://docs.google.com/document/d/1YiCppfGBPEdXiJnCfe6mj9tiJCqUjOGvdh0XR1gxNTo/edit?pli=1' },
          { code: 'СП РК', title: 'Жизненный цикл строительных объектов. Часть 5. Требования к моделям на стадии эксплуатации', url: 'https://docs.google.com/document/d/1kFGhGQoleYowix98fkLdVY3-f5OAb4cNTlK9wBh0i4M/edit' },
          { code: 'СП РК', title: 'Применение информационного моделирования в строительной организации', url: 'https://docs.google.com/document/d/1_Ic6u-STvslKSmkOrCjZN39xqHArIfx2nd5FDt8J2oc/edit' },
          { code: 'СП РК', title: 'Применение информационного моделирования в эксплуатирующей организации', url: 'https://docs.google.com/document/d/1MB0kYyHDVo6FqHke9cJE2yf4naFF_nkULMmG_aIsf2s/edit?usp=sharing' },
          { code: 'РДС РК 1.02-04-2018', title: 'Руководящий документ в строительстве', url: 'https://drive.google.com/open?id=1jaQdrSqbBoXlEWm6lVznz3udKtcrv1yC' },
          { code: 'Концепция', title: 'Концепция внедрения информационного моделирования', url: 'https://drive.google.com/file/d/1lu5o987CaRyHkRjJrrOvd3tVZNNyBv5o/view?usp=sharing' },
        ].map((doc) => (
          <Box
            component="li"
            key={doc.url}
            sx={{ borderBottom: '1px solid ' + BORDER, py: 1.5, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { sm: 'baseline' }, gap: { xs: 0.5, sm: 1.5 } }}
          >
            <Typography component="span" sx={{ fontWeight: 700, color: NAVY, fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
              {doc.code}
            </Typography>
            <Box
              component="a"
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ fontSize: '0.95rem', lineHeight: 1.7, color: BLUE, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
            >
              {doc.title}
            </Box>
          </Box>
        ))}
      </Box>

      {/* History */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        История BIM Казахстан
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />
      <Box sx={{ mb: 4 }}>
        {[
          {
            year: '2021',
            text: 'Центр информационного моделирования АО «КазНИИСА» в 2021 году получил право на оказание услуг по обучению программе Building Smart «Основы».',
          },
          {
            year: '2024',
            text: 'В начале 2024 года было принято стратегическое решение о создании отделения buildingSMART Kazakhstan.',
          },
        ].map((h) => (
          <Box key={h.year} sx={{ display: 'flex', gap: 2, mb: 2.5 }}>
            <Typography sx={{ fontWeight: 800, color: BLUE, fontSize: '1.25rem', minWidth: 64 }}>{h.year}</Typography>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>{h.text}</Typography>
          </Box>
        ))}
      </Box>

      {/* Organizational structure */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Структура организации
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {[
          'Председатель отделения',
          'Исполнительный директор',
          'Директор по взаимодействию с государственными органами',
          'Технический директор',
          'Администратор программ обучения',
          'Специалист по техническим стандартам',
          'Менеджер по связям с общественностью',
          'Технический специалист',
        ].map((role) => (
          <Grid item xs={12} sm={6} key={role}>
            <Box sx={{ borderLeft: '3px solid ' + BLUE, pl: 2, py: 0.5 }}>
              <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#334155' }}>{role}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
