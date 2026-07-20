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
        buildingSMART Kazakhstan
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      {/* Welcome hero */}
      <Typography variant="h4" sx={{ fontWeight: 800, color: NAVY, fontSize: { xs: '1.5rem', sm: '1.8rem' }, mb: 1 }}>
        Добро пожаловать в buildingSMART Kazakhstan!
      </Typography>
      <Typography sx={{ fontSize: '1.05rem', color: BLUE, fontStyle: 'italic', fontWeight: 600, mb: 3 }}>
        «Объединяем технологии для умного проектирования»
      </Typography>

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        buildingSMART Kazakhstan – это профессиональное сообщество, объединяющее экспертов,
        проектировщиков, строителей, разработчиков, а также государственные и образовательные
        организации, заинтересованные во внедрении технологий информационного моделирования
        (BIM/ТИМСО) в строительную отрасль Казахстана. Мы являемся официальным представителем
        buildingSMART International в Казахстане и способствуем развитию стандартов открытого
        обмена данными (OpenBIM), цифровой трансформации и устойчивого развития строительного
        сектора.
      </Typography>

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 4 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          Мансабымыз: Наша миссия — способствовать формированию инновационной и устойчивой
          строительной отрасли Республики Казахстан, путём внедрения и развития технологии
          информационного моделирования строительных объектов BIM (ТИМСО) на всех этапах
          жизненного цикла — от планирования и проектирования до строительства, эксплуатации
          и демонтажа.
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
        Цели
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />
      <Box component="ul" sx={{ pl: 3, m: 0, mb: 4 }}>
        {[
          'Развитие и адаптация международных BIM-стандартов под реалии Казахстана',
          'Содействие цифровизации строительной отрасли через обучение и сотрудничество',
          'Формирование экосистемы участников BIM-сообщества — от вузов до крупных девелоперов',
          'Поддержка государственных инициатив и внедрение открытых форматов для проектирования, строительства и эксплуатации объектов',
          'Представление интересов казахстанских специалистов на международной BIM-арене.',
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
          'Обеспечение локализации и практического внедрения стандартов обмена данными (IFC) с учетом национального законодательства, строительных норм и практик Республики Казахстан.',
          'Представление Казахстана в составе buildingSMART International, участие в глобальных инициативах, технических комитетах и сотрудничество с другими национальными отделениями.',
          'Подготовка квалифицированных кадров по BIM-технологиям, разработка образовательных модулей, методических рекомендаций, сертификационных программ на основе международных требований.',
          'Создание площадки для диалога между государственными органами, профессиональными ассоциациями, вузами, научно-исследовательскими организациями и бизнесом.',
        ].map((t, i) => (
          <Box component="li" key={i} sx={{ mb: 1 }}>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>{t}</Typography>
          </Box>
        ))}
      </Box>

      {/* Value pillars */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {['Управление цифровой трансформацией', 'Создание стандартов и услуг', 'Повышение производительности и устойчивости'].map((p, i) => (
          <Grid item xs={12} sm={4} key={i}>
            <Box sx={{ bgcolor: GRAY_BG, border: '1px solid ' + BORDER, borderRadius: '6px', p: 2.5, textAlign: 'center', height: '100%' }}>
              <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1rem' }}>{p}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

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

      {/* Community engagement */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Взаимодействуйте с мировым сообществом
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      {/* Certification */}
      <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: BLUE, textTransform: 'uppercase', letterSpacing: '0.04em', mb: 0.5 }}>
        Образовательная программа
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Онлайн-курс
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />
      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        buildingSmart Kazakhstan предлагает специалистам строительной отрасли Казахстана пройти
        курс программы:{' '}
        <Box component="strong" sx={{ color: NAVY }}>
          building Smart Professional Certification-Foundation «Basic»
        </Box>
        . Преимуществами данной программы являются: стандартизированный учебный контент,
        основанный на последних международных разработках и лучших практиках; всемирно
        признаваемая квалификация и знак гарантии качества; простой и быстрый процесс
        онлайн-тестирования и оценки квалификации; обучение специалистов в соответствии
        с международно-признанным эталоном; возможность подтверждения компетенций вашей
        организации в области BIM при участии в тендерах на проекты за счёт наличия персонала,
        сертифицированного buildingSMART.
      </Typography>
      <Box component="ul" sx={{ pl: 3, m: 0, mb: 2 }}>
        {[
          '— стандартизированный учебный контент, основанный на последних международных разработках и лучших практиках;',
          '— всемирно признаваемая квалификация и знак гарантии качества;',
          '— простой и быстрый процесс онлайн-тестирования и оценки квалификации;',
          '— обучение специалистов в соответствии с международно-признанным эталоном;',
          '— стандартизированный контент;',
          '— возможность подтверждения компетенций вашей организации в области BIM, при участии в тендерах на проекты, за счет наличия персонала, сертифицированного buildingSMART;',
          '— Сертификат BuildingSMART International признается в более чем 20 странах мира;',
        ].map((b, i) => (
          <Box component="li" key={i} sx={{ mb: 0.5 }}>
            <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#334155' }}>{b}</Typography>
          </Box>
        ))}
      </Box>
      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontWeight: 600, mb: 2 }}>
        Сертификация BuildingSMART Professional Certification – Foundation «Basic» — это важный
        шаг к профессиональному развитию в сфере BIM
      </Typography>
      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        Сертификат BuildingSMART International признаётся в более чем 20 странах мира.
        BuildingSmart Professional Certification-Foundation «Basic» — это базовая программа
        обучения, которая предоставляет слушателям курса знания о фундаментальных принципах
        информационного моделирования зданий и строительных объектов, о ведущих мировых
        практиках, а также внедрении и применении BIM (ТИМСО) в строительной отрасли Республики
        Казахстан.
      </Typography>

      {/* Standards */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        BuildingSmart стандарты
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />
      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        openBIM® расширяет преимущества BIM (информационного моделирования зданий), улучшая
        доступность, удобство использования, управления и устойчивость цифровых данных.
      </Typography>

      {/* About bSI */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        buildingSMART International
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />
      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        buildingSMART International — это глобальная некоммерческая организация, занимающаяся
        цифровой трансформацией строительной отрасли через создание и внедрение открытых
        международных стандартов для моделирования информации о здании (BIM). С момента своего
        основания в 1995 году, buildingSMART стремится улучшить обмен данными и совместную
        работу между различными участниками строительного процесса, включая архитекторов,
        инженеров, подрядчиков и заказчиков. buildingSMART International объединяет
        национальные организации (Chapters) из различных стран по всему миру — на данный
        момент насчитывается более 30 таких отделений, представляющих интересы внедрения
        технологии информационного моделирования по всему миру.
      </Typography>
      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 2 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          Цель: Объединить глобальную индустрию для разработки и внедрения открытых цифровых
          стандартов и сервисов, которые способствуют автоматизации и принятию решений на
          протяжении всего жизненного цикла строительной отрасли, улучшая производительность,
          устойчивость и прибыльность.
        </Typography>
      </Box>
      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 2 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          Видение: беспрепятственный обмен достоверной информацией в рамках строительной
          отрасли.
        </Typography>
      </Box>
      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 4 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          Мансабымыз: Создавать и поддерживать открытые и надежные цифровые стандарты для
          строительной отрасли и поддерживать их глобальное принятие.
        </Typography>
      </Box>

      <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1rem', mb: 1.5 }}>
        Принципы работы buildingSMART International
      </Typography>
      <Box component="ul" sx={{ pl: 3, m: 0, mb: 4 }}>
        {[
          'Мы разрабатываем стандарты и сервисы openBIM® и поддерживаем их внедрение на всех этапах жизненного цикла проекта.',
          'Мы обеспечиваем совместимость программного обеспечения и будущее обеспечение доступа к данным.',
          'Мы предоставляем общие глобальные основы, поддерживающие национальные и локальные расширения.',
          'Мы открыты, нейтральны, прозрачны и некоммерческая организация.',
          'Мы инклюзивны, сотрудничаем, проявляем уважение и профессионализм.',
          'Мы являемся гибким сообществом, принимающим ключевые решения на основе согласия большинства.',
        ].map((p, i) => (
          <Box component="li" key={i} sx={{ mb: 1 }}>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>{p}</Typography>
          </Box>
        ))}
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
            desc: 'Участники получают официальный доступ к глобальному сообществу buildingSMART International — ведущей международной организации по развитию openBIM. Это даёт уникальную возможность обмениваться опытом с экспертами из более чем 30 стран, участвовать в совместных инициативах, проектах и стратегических обсуждениях по цифровой трансформации строительства.',
          },
          {
            title: 'Обучение и сертификация',
            desc: 'Доступ к авторизованным обучающим программам и сертификациям, разработанным совместно с buildingSMART International, а также возможность проведения внутренних тренингов и воркшопов с ведущими мировыми спикерами.',
          },
          {
            title: 'Организационная поддержка',
            desc: 'Участники получают организационную, методическую и информационную поддержку, а также возможность продвигать свои технологии, решения и инициативы через платформу buildingSMART Kazakhstan.',
          },
          {
            title: 'Профессиональная репутация',
            desc: 'Статус участника buildingSMART Kazakhstan подтверждает высокую цифровую зрелость и открытость к инновациям. Это усиливает позиции при международных партнёрствах, тендерах, грантах и государственной поддержке.',
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
        Библиотека
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />
      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Қазақстан Республикасы Инвестициялар және даму министрінің 2017 жылғы 11 сәуірдегі №
        197 бұйрығымен (2018 жылғы 27 ақпандағы №139 бұйрығымен енгізілген өзгерістермен)
        бекітілген «Құрылыс объектілерін жобалау кезінде ақпараттық модельдеу технологиясын
        (BIM-технологиялар) енгізу жөніндегі іс-шаралар жоспарын» іске асыру шеңберінде
        2017-2018 жылдар кезеңінде әзірленді және бекітілді:
      </Typography>
      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        В 2019 году Центром информационного моделирования АО “КазНИИСА” были разработаны и
        утверждены следующие нормативные технические документы:
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
          { code: 'РДС РК 1.02-04-2018', title: '', url: 'https://drive.google.com/open?id=1jaQdrSqbBoXlEWm6lVznz3udKtcrv1yC' },
          { code: '', title: 'Концепция', url: 'https://drive.google.com/file/d/1lu5o987CaRyHkRjJrrOvd3tVZNNyBv5o/view?usp=sharing' },
          { code: 'ТИМСО (BIM)', title: '-ориентированный классификатор в объеме, предусмотренном на 2018 год', url: 'https://drive.google.com/open?id=1X2UPxzdKo6NloXH_PphLGO7cQy6_aJMx' },
          { code: '', title: 'АО НЦГНТЭ', url: 'https://drive.google.com/open?id=1SO-wN17cVkDtcmG3OAtiHaPVP5i4PLIv' },
          { code: '', title: 'Отчет о НИР по разработке ТЗ для ГБИМ', url: 'https://drive.google.com/open?id=1RubLREsPSD6gti4nuyC_wz6c_GyOD5QS' },
          { code: '', title: 'Глобальные обязательные требования по openBIM', url: 'https://kazniisa.kz/wp-content/uploads/2023/10/Глобальные-обязательные-требования-по-openBIM.pdf' },
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
            text: 'Центр информационного моделирования АО «КазНИИСА» в 2021 году получил право на оказание услуг по обучению программе Building Smart «Основы» на основании договора с Национальной Ассоциацией инженеров-консультантов в строительстве (НАИКС), на тот момент являвшейся российским отделением buildingSmart. В рамках данного договора, Общество прошло процедуру аккредитации учебного центра и курса для слушателей в Республике Казахстан.',
          },
          {
            year: '2024',
            text: 'В начале 2024 года было принято стратегическое решение о создании отделения buildingSMART Kazakhstan, что позволило Казахстану стать частью глобальной сети buildingSMART International.',
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
          'Директор по взаимодействую с государственными органами',
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
